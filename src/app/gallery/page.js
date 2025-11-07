import Head from 'next/head';
import Link from 'next/link';
import MagicBento from '../components/MagicBento';
import Masonry from '../components/Masonry';
import styles from '../styles/gallery.module.css';
import Footer from '../components/footer';

const galleryNotes = [
  {
    title: 'Destination Diaries',
    body: 'From Santorini sunsets to Jaipur palaces, these frames capture couture artistry shaped around light, climate, and culture.'
  },
  {
    title: 'Texture Studies',
    body: 'A macro exploration of glass-skin, velvet matte lips, and crystalline shimmer built for HD lenses and after-dark reveals.'
  },
  {
    title: 'Behind the Curtain',
    body: 'Intimate glimpses from prep suites, backstage queues, and rehearsal halls where the SVE collective orchestrates the glow.'
  }
];

const masonryItems = [
  {
    id: 'bridal-portrait',
    img: '/hdimages/SendAnywhere_658944/0498e69a-16ae-4165-ac99-67da33506b3a.jpg',
    url: '/contact',
    height: 520,
  },
  {
    id: 'sangeet-glow',
    img: '/hdimages/SendAnywhere_001278/4-1.jpg',
    url: '/contact',
    height: 360,
  },
  {
    id: 'couture-campaign',
    img: '/hdimages/SendAnywhere_658944/c435e75e-13cc-48f8-944d-8c70511c53ac.jpg',
    url: '/contact',
    height: 600,
  },
  {
    id: 'haldi-bloom',
    img: '/hdimages/SendAnywhere_658944/2e9f16a3-a02c-47fb-a616-9242034abcbe.jpg',
    url: '/contact',
    height: 420,
  },
  {
    id: 'veil-moment',
    img: '/hdimages/SendAnywhere_001278/3-1.jpg',
    url: '/contact',
    height: 480,
  },
  {
    id: 'reception-glam',
    img: '/hdimages/SendAnywhere_658944/e8fc0e15-c936-4756-8555-5aea1409863c.jpg',
    url: '/contact',
    height: 540,
  }
];

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Shalini Vashisht Experiences</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Ms+Madi&family=Raleway:ital,wght@0,100..900;1,100..900&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <span className={styles.heroEyebrow}>Archive of light + movement</span>
          <h1>The SVE gallery of unforgettable transformations.</h1>
          <p>
            Dive into a living moodboard of couture beauty. Each tile pulses with particle trails, spotlight magnetism, and rare moments from
            bridal mornings, editorial campaigns, and destination ceremonies.
          </p>
          <span className={styles.heroAccent}>Scroll to explore</span>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.bentoWrap}>
            <MagicBento
              textAutoHide
              enableStars
              enableSpotlight
              enableBorderGlow
              enableTilt
              enableMagnetism
              clickEffect
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
          <div className={styles.masonryBlock}>
            <h3>Flowing frames curated for every celebration.</h3>
            <p>
              Lose yourself in a responsive tapestry of SVE stories—each tile reveals a new perspective, from pheran mornings to
              runway finales. Tap to explore the full narrative in a new tab.
            </p>
            <div className={styles.masonryShell}>
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
