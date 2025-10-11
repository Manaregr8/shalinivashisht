"use client";

import Link from 'next/link';

import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import styles from '../styles/hero.module.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import Footer from './footer';
import Navbar from './navbar';

const slides = [
    {
        id: 'aurora',
        src: '/pexels-christian-diokno-1666462-3260852.jpg',
        alt: 'Neon-lit modern interior with futuristic ambience.',
    },
    {
        id: 'atelier',
        src: '/pexels-olenagoldman-1021693.jpg',
        alt: 'Soft daylight shining into a lounge interior.',
    },
    {
        id: 'soundform',
        src: '/pexels-pixabay-247322.jpg',
        alt: 'Minimalist living room setup with artistic decor.',
    },
];

const featureSections = [
    {
        id: 'bridal-elegance',
        eyebrow: 'Bridal Elegance',
        title: 'Couture bridal looks that radiate on camera and IRL.',
        copy: 'Soft-focus complexions, weightless veils of shimmer, and bespoke palettes tailored for the aisle. Shalini crafts luminous stories for every pheran, lehenga, and gown.',
        image: {
            src: '/pexels-olenagoldman-1021693.jpg',
            alt: 'Bride having makeup applied with soft blush tones.',
        },
        align: 'right',
    },
    {
        id: 'editorial-finish',
        eyebrow: 'Editorial Finish',
        title: 'Runway precision for lookbooks, campaigns, and couture.',
        copy: 'From glossy lids to velvet matte lips, each stroke is purpose-built for high definition lighting and bold creative direction.',
        image: {
            src: '/pexels-christian-diokno-1666462-3260852.jpg',
            alt: 'Model with dramatic lighting showcasing editorial makeup.',
        },
        align: 'left',
    },
    {
        id: 'occasion-glow',
        eyebrow: 'Occasion Glow',
        title: 'Statement shimmer for soirées, sangeets, and celebrations.',
        copy: 'Signature highlights, precise eye definition, and custom lip alchemy keep you camera-ready from first toast to final dance.',
        image: {
            src: '/pexels-pixabay-247322.jpg',
            alt: 'Close-up of glamorous evening makeup look.',
        },
        align: 'right',
    },
];

const footerLinks = [
    {
        heading: 'Quick Links',
        items: [
            { label: 'About Shalini', href: '#about' },
            { label: 'Signature Services', href: '#services' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Book a Session', href: '#book' },
        ],
    },
    {
        heading: 'Bridal Couture',
        items: [
            { label: 'Haldi & Mehendi', href: '#haldi' },
            { label: 'Wedding Day Glam', href: '#wedding' },
            { label: 'Reception Looks', href: '#reception' },
            { label: 'Destination Packages', href: '#destination' },
        ],
    },
];

const HeroBanner = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Ms+Madi&family=Raleway:ital,wght@0,100..900;1,100..900&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.mainBannerContainer}>
                    <Swiper
                        className={styles.swiperRoot}
                        modules={[Autoplay, EffectFade]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        effect="fade"
                        loop
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                                <img src={slide.src} alt={slide.alt} className={styles.swiperImage} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <aside className={styles.contentRight}>
                        <p className={styles.eyebrow}>Shalini Vashisht artistry</p>
                        <h1 className={styles.heading}>Beauty narratives, painted by hand.</h1>
                        <div className={styles.signature}>
                            <img src="/makeup.svg" alt="makeup signature" />
                        </div>
                    </aside>

                    <div className={styles.absoluteStyle}>
                        <img src="/sve.svg" alt="SVE typography" />
                    </div>

                    <img className={styles.logo} src="/MainLogo.png" alt="SVE" />
                </div>
            </main>
            <section
                className={styles.featureCollection}
                style={{
                    background:
                        'radial-gradient(circle at top, rgba(28, 37, 89, 0.4), transparent 55%), linear-gradient(180deg, #020617 0%, #0b1120 100%)',
                    borderTop: '1px solid rgba(51, 65, 85, 0.45)',
                    borderBottom: '1px solid rgba(51, 65, 85, 0.45)'
                }}
            >
                {featureSections.map((section) => {
                    const imageRight = section.align === 'right';
                    return (
                        <div
                            key={section.id}
                            className={`${styles.featureRow} ${
                                imageRight ? styles.rowImageRight : styles.rowImageLeft
                            }`}
                        
                        >
                            <div className={styles.featureCopy} style={{ color: '#e2e8f0' }}>
                                <span
                                    className={styles.featureEyebrow}
                                    style={{ color: 'rgba(148, 163, 184, 0.85)' }}
                                >
                                    {section.eyebrow}
                                </span>
                                <h2 className={styles.featureHeading} style={{ color: '#f8fafc' }}>
                                    {section.title}
                                </h2>
                                <p
                                    className={styles.featureBody}
                                    style={{ color: 'rgba(226, 232, 240, 0.75)' }}
                                >
                                    {section.copy}
                                </p>
                                <Link
                                    href="#book"
                                    className={styles.featureLink}
                                    style={{
                                        color: '#facc15',
                                        borderBottom: '1px solid rgba(250, 204, 21, 0.5)'
                                    }}
                                >
                                    Reserve a session
                                </Link>
                            </div>
                            <div className={styles.featureMedia} style={{ borderRadius: '1.5rem' }}>
                                <div
                                    className={styles.featureMediaGlow}
                                    style={{
                                        background:
                                            'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.35), transparent 70%)'
                                    }}
                                />
                                <img src={section.image.src} alt={section.image.alt} />
                            </div>
                        </div>
                    );
                })}
            </section>
            <Footer/>
        </>
    );
};

export default HeroBanner;