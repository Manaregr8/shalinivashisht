"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import styles from '../styles/Masonry.module.css';

const useMedia = (queries, values, defaultValue) => {
  const getValue = useCallback(() => {
    if (typeof window === 'undefined') return defaultValue;

    const index = queries.findIndex((query) => window.matchMedia(query).matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, queries, values]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handler = () => setValue(getValue());
    const mqls = queries.map((query) => window.matchMedia(query));
    mqls.forEach((mql) => mql.addEventListener('change', handler));

    return () => {
      mqls.forEach((mql) => mql.removeEventListener('change', handler));
    };
  }, [getValue, queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1,
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const getInitialPosition = useCallback(
    (item) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return { x: item.x, y: item.y };

      let direction = animateFrom;

      if (animateFrom === 'random') {
        const directions = ['top', 'bottom', 'left', 'right'];
        direction = directions[Math.floor(Math.random() * directions.length)];
      }

      switch (direction) {
        case 'top':
          return { x: item.x, y: -200 };
        case 'bottom':
          return { x: item.x, y: window.innerHeight + 200 };
        case 'left':
          return { x: -200, y: item.y };
        case 'right':
          return { x: window.innerWidth + 200, y: item.y };
        case 'center':
          return {
            x: containerRect.width / 2 - item.w / 2,
            y: containerRect.height / 2 - item.h / 2,
          };
        default:
          return { x: item.x, y: item.y + 100 };
      }
    },
    [animateFrom, containerRef],
  );

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  useEffect(() => {
    // Prevent background scroll while the lightbox is open and support Escape to close.
    if (!activeItem) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem]);

  const { grid: gridItems, totalHeight } = useMemo(() => {
    if (!width) {
      return { grid: [], totalHeight: 0 };
    }

    const gutter = 24;
    const colHeights = new Array(columns).fill(gutter);
    const columnWidth = width / columns;
    const mapped = items.map((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = item.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gutter;

      return { ...item, x, y, w: columnWidth, h: height };
    });

    const tallestColumn = Math.max(0, ...colHeights) - gutter;

    return { grid: mapped, totalHeight: tallestColumn };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

  gridItems.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item, index);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' }),
        };

        gsap.fromTo(
          selector,
          initialState,
          {
            opacity: 1,
            ...animationProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: 'auto',
        });
      }
    });

    hasMounted.current = true;
  }, [blurToFocus, duration, ease, getInitialPosition, gridItems, imagesReady, stagger]);

  const handleMouseEnter = useCallback(
    (e, item) => {
      const selector = `[data-key="${item.id}"]`;

      if (scaleOnHover) {
        gsap.to(selector, {
          scale: hoverScale,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      if (colorShiftOnHover) {
        const overlay = e.currentTarget.querySelector(`.${styles.colorOverlay}`);
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.3,
            duration: 0.3,
          });
        }
      }
    },
    [colorShiftOnHover, hoverScale, scaleOnHover],
  );

  const handleMouseLeave = useCallback(
    (e, item) => {
      const selector = `[data-key="${item.id}"]`;

      if (scaleOnHover) {
        gsap.to(selector, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      if (colorShiftOnHover) {
        const overlay = e.currentTarget.querySelector(`.${styles.colorOverlay}`);
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
          });
        }
      }
    },
    [colorShiftOnHover, scaleOnHover],
  );

  return (
    <>
      <div
        ref={containerRef}
        className={`${styles.list} masonry-grid`}
        style={{ height: Math.max(totalHeight + 24, 360) }}
      >
        {gridItems.map((item) => (
          <div
            key={item.id}
            data-key={item.id}
            className={styles.itemWrapper}
            onClick={() => setActiveItem(item)}
            onMouseEnter={(event) => handleMouseEnter(event, item)}
            onMouseLeave={(event) => handleMouseLeave(event, item)}
          >
            <div className={styles.itemImg} style={{ backgroundImage: `url(${item.img})` }}>
              {colorShiftOnHover && <div className={styles.colorOverlay} />}
            </div>
          </div>
        ))}
      </div>

      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
};

export default Masonry;

function Lightbox({ item, onClose }) {
  if (!item || typeof document === 'undefined') return null;

  return createPortal(
    (
      <div
        className={styles.lightboxOverlay}
        role="dialog"
        aria-modal="true"
        aria-label="Expanded gallery image"
        onClick={onClose}
      >
        <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
          <button type="button" className={styles.lightboxClose} aria-label="Close image" onClick={onClose}>
            ×
          </button>
          <img className={styles.lightboxImage} src={item.img} alt={item.alt || item.title || item.id} />
        </div>
      </div>
    ),
    document.body
  );
}
