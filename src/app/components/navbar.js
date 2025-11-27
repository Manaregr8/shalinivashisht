"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
	const [isSocialOpen, setIsSocialOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!navRef.current) return;
			if (!navRef.current.contains(event.target)) {
				setIsSocialOpen(false);
				setIsMenuOpen(false);
			}
		};

		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				setIsSocialOpen(false);
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);

	const toggleSocialDropdown = () => {
		setIsSocialOpen((prev) => {
			const nextState = !prev;
			if (nextState) setIsMenuOpen(false);
			return nextState;
		});
	};

	const toggleMenuDropdown = () => {
		setIsMenuOpen((prev) => {
			const nextState = !prev;
			if (nextState) setIsSocialOpen(false);
			return nextState;
		});
	};

	const closeDropdowns = () => {
		setIsSocialOpen(false);
		setIsMenuOpen(false);
	};

	return (
		<nav className={styles.navbar} aria-label="Main navigation" ref={navRef}>
			<div className={styles.dropdownContainer}>
				<img
					src="/social.svg"
					alt="Socials Icon"
					className={`${styles.socialS} ${styles.clickable}`}
					onClick={toggleSocialDropdown}
				/>

				{isSocialOpen && (
					<div className={`${styles.dropdown} ${styles.socialDropdown}`}>
						<a href="https://www.facebook.com/makeupstudioshalinivasisht/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/facebook.svg" alt="Facebook" className={styles.socialIcon} />
						</a>
						<a href="https://www.instagram.com/makeupstudioshalinivasisht/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/instagram.svg" alt="Instagram" className={styles.socialIcon} />
						</a>
						<a href="https://youtube.com/@shalinivasisht334?si=F4zN_PUvrVj7ZGBY" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/youtube-music-svgrepo-com.svg" alt="YouTube" className={styles.socialIcon} />
						</a>
						{/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/x.png" alt="Twitter" className={styles.socialIcon} style={{ padding: '2px' }} />
						</a> */}
					</div>
				)}
			</div>

			<img className={styles.logo} src="/Shalini Mam Logo (N).png" alt="Site Logo" />

			<div className={styles.dropdownContainer}>
				<img
					src="/menu.svg"
					alt="Menu Icon"
					className={`${styles.socialS} ${styles.clickable}`}
					onClick={toggleMenuDropdown}
				/>

				{isMenuOpen && (
					<div className={`${styles.dropdown} ${styles.menuDropdown}`}>
						<ul className={styles.dropdownNavList}>
							<li className={styles.dropdownNavItem}>
								<Link href="/" onClick={closeDropdowns}>
									Home
								</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/about" onClick={closeDropdowns}>
									About
								</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/gallery" onClick={closeDropdowns}>
									Gallery
								</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/work" onClick={closeDropdowns}>
									Our Work
								</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/contact" onClick={closeDropdowns}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>

			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/about">About</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/gallery">Gallery</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/work">Our Work</Link>
				</li>
				<li className={styles.navItem}>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
