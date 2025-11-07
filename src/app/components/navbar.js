"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
	const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);
	const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

	const toggleSocialDropdown = () => {
		setIsSocialDropdownOpen(!isSocialDropdownOpen);
		setIsMenuDropdownOpen(false); // Close menu dropdown when social opens
	};

	const toggleMenuDropdown = () => {
		setIsMenuDropdownOpen(!isMenuDropdownOpen);
		setIsSocialDropdownOpen(false); // Close social dropdown when menu opens
	};

	const closeBothDropdowns = () => {
		setIsSocialDropdownOpen(false);
		setIsMenuDropdownOpen(false);
	};

	return (
		<nav className={styles.navbar} aria-label="Main navigation">
			{/* Social Icon with Dropdown */}
			<div className={styles.dropdownContainer}>
				<img 
					src='/social.svg' 
					alt="Socials Icon" 
					className={`${styles.socialS} ${styles.clickable}`}
					onClick={toggleSocialDropdown}
				/>
				
				{/* Social Dropdown */}
				{isSocialDropdownOpen && (
					<div className={`${styles.dropdown} ${styles.socialDropdown}`}>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/facebook.svg" alt="Facebook" className={styles.socialIcon} />
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/instagram.svg" alt="Instagram" className={styles.socialIcon} />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
							<img src="/x.png" alt="Twitter" className={styles.socialIcon} style={{padding:'2px'}}/>
						</a>
					</div>
				)}
			</div>

			<img className={styles.logo} src="/Shalini Mam Logo (N).png" alt="Site Logo" />
			
			{/* Menu Icon with Dropdown */}
			<div className={styles.dropdownContainer}>
				<img 
					src='/menu.svg' 
					alt="Menu Icon" 
					className={`${styles.socialS} ${styles.clickable}`}
					onClick={toggleMenuDropdown}
				/>
				
				{/* Menu Dropdown */}
				{isMenuDropdownOpen && (
					<div className={`${styles.dropdown} ${styles.menuDropdown}`}>
						<ul className={styles.dropdownNavList}>
							<li className={styles.dropdownNavItem}>
								<Link href="/" onClick={closeBothDropdowns}>Home</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/about" onClick={closeBothDropdowns}>About</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/gallery" onClick={closeBothDropdowns}>Gallery</Link>
							</li>
							<li className={styles.dropdownNavItem}>
								<Link href="/contact" onClick={closeBothDropdowns}>Contact</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
			
			{/* Hidden original nav list */}
			<ul className={styles.navList}>
				<li className={styles.navItem}><Link href="/">Home</Link></li>
				<li className={styles.navItem}><Link href="/about">About</Link></li>
				<li className={styles.navItem}><Link href="/gallery">Gallery</Link></li>
				<li className={styles.navItem}><Link href="/contact">Contact</Link></li>
			</ul>
			
		</nav>
	);
}
