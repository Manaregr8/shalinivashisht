"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Experiences', href: '#experiences' },
	{ label: 'Contact', href: '#book' },
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 24);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (!isMenuOpen) return;

		const closeOnRoute = () => setIsMenuOpen(false);
		window.addEventListener('resize', closeOnRoute);
		return () => window.removeEventListener('resize', closeOnRoute);
	}, [isMenuOpen]);

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ''}`}>
			<div className={styles.inner}>
				<Link href="/" className={styles.brand}>
					<img src="/MainLogo.png" alt="Shalini Vashisht Experiences" />
					<span className={styles.brandText}>
						<span>Shalini</span>
						<span>Vashisht Experiences</span>
					</span>
				</Link>

				<nav className={styles.nav}>
					{navLinks.map((link) => (
						<Link key={link.label} href={link.href} onClick={handleLinkClick}>
							{link.label}
						</Link>
					))}
				</nav>

				<div className={styles.ctaGroup}>
					<a className={styles.callButton} href="tel:+919876543210">
						Call Studio
					</a>
				</div>

				<button
					type="button"
					aria-expanded={isMenuOpen}
					aria-label="Toggle navigation"
					className={`${styles.menuToggle} ${isMenuOpen ? styles.menuActive : ''}`}
					onClick={() => setIsMenuOpen((prev) => !prev)}
				>
					<span />
					<span />
					<span />
				</button>

				<div className={styles.glisten} />
			</div>

			<div
				className={`${styles.mobilePanel} ${isMenuOpen ? styles.panelVisible : ''}`}
				aria-hidden={!isMenuOpen}
			>
				<nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
					{navLinks.map((link) => (
						<Link key={link.label} href={link.href} onClick={handleLinkClick}>
							{link.label}
						</Link>
					))}
				</nav>
				<a className={styles.panelCta} href="mailto:hello@shalinivashisht.com">
					Email Studio
				</a>
			</div>
		</header>
	);
};

export default Navbar;
