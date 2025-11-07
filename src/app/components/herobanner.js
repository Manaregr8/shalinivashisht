"use client";

import Link from 'next/link';

import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import styles from '../styles/hero.module.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import Footer from './footer';

const slides = [
    {
        id: 'bridal-luxe',
        src: '/hdimages/SendAnywhere_658944/78f490a6-9754-4235-881f-82bf76b04e7c.jpg',
        alt: 'Couture bridal glow styled by Shalini Vashisht for a pheras ceremony.',
        objectPosition: '50% 20%',
    },
    {
        id: 'editorial-muse',
        src: '/hdimages/SendAnywhere_001278/5-2.jpg',
        alt: 'High-fashion campaign look with velvet liner and reflective skin.',
        objectPosition: '50% 40%',
    },
    {
        id: 'destination-vows',
        src: '/hdimages/SendAnywhere_658944/0498e69a-16ae-4165-ac99-67da33506b3a.jpg',
        alt: 'Destination wedding beauty captured in golden hour light.',
        objectPosition: '50% 55%',
    },
];

const featureSections = [
    {
        id: 'bridal-couture',
        eyebrow: 'Bridal Couture',
        title: 'Custom rituals for pheran mornings, pheras, and receptions.',
        copy: 'Consultative trials, heirloom palette mapping, and on-location touch-ups ensure every vow is framed by luminous, skin-first glam that withstands ceremony to celebration.',
        image: {
            src: '/hdimages/SendAnywhere_001278/4-1.jpg',
            alt: 'Shalini perfecting a couture bridal look before the pheras.',
            objectPosition: '50% 30%',
        },
        align: 'right',
    },
    {
        id: 'editorial-direction',
        eyebrow: 'Editorial Direction',
        title: 'Runway, campaign, and cover-ready precision.',
        copy: 'Sculpted lighting, tone-perfect pigments, and backstage leadership translate creative decks into award-winning imagery for designers, fashion weeks, and luxury houses.',
        image: {
            src: '/hdimages/SendAnywhere_658944/c435e75e-13cc-48f8-944d-8c70511c53ac.jpg',
            alt: 'Editorial muse on-set with sculpted glam direction.',
            objectPosition: '50% 15%',
        },
        align: 'left',
    },
    {
        id: 'airbrush-longwear',
        eyebrow: 'Airbrush + HD',
        title: 'Feather-light coverage engineered for climate and camera.',
        copy: 'Advanced airbrush layering, cryo-prep, and humidity-resistant sealing keep complexions glassy and comfortable through flash photography, spotlights, and destination weather.',
        image: {
            src: '/hdimages/SendAnywhere_001278/6-2.jpg',
            alt: 'Airbrush complexion being detailed for a tropical celebration.',
            objectPosition: '50% 32%',
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
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className={styles.swiperImage}
                                    style={{ objectPosition: slide.objectPosition || '50% 50%' }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <aside className={styles.contentRight}>
                        <p className={styles.eyebrow}>Shalini Vashisht Extraordinaire</p>
                        <h1 className={styles.heading}>Handcrafted by Shalini Vashisht.</h1>
                        <p className={styles.copy}>
                            Senior makeup director Shalini Vashisht sculpts luminous, skin-loving looks for brides, celebrities, and Models.</p>
                        <div className={styles.signature}>
                            <img src="/makeup.svg" alt="makeup signature" />
                        </div>
                    </aside>

                    <div className={styles.absoluteStyle}>
                        <img src="/sve.svg" alt="SVE typography" />
                    </div>
                </div>
            </main>
            <section
                id="services"
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
                                <img
                                    src={section.image.src}
                                    alt={section.image.alt}
                                    style={{ objectPosition: section.image.objectPosition || '50% 50%' }}
                                />
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