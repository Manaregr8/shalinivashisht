"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const rootRef = useRef(null);

	useEffect(() => {
		function onDocumentClick(e) {
			if (!rootRef.current) return;
			if (!rootRef.current.contains(e.target)) {
				setOpen(false);
			}
		}
		function onKey(e) {
			if (e.key === 'Escape') setOpen(false);
		}
		document.addEventListener('mousedown', onDocumentClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onDocumentClick);
			document.removeEventListener('keydown', onKey);
		};
	}, []);

	return (
		<nav className={styles.navbar} aria-label="Main navigation" ref={rootRef}>
			{/* create a social icon clickable to show social media links in a drop down later */}
			<img className={styles.logo} src="/MainLogo.png" alt="Site Logo" />
			{/* create a menu icon clickable to show below links in a drop down later */}

			{/* keep the original hidden nav list (if you want a different layout later) */}
			<ul className={styles.navList}>
				<li className={styles.navItem}><Link href="/">Home</Link></li>
				<li className={styles.navItem}><Link href="/about">About</Link></li>
				<li className={styles.navItem}><Link href="/gallery">Gallery</Link></li>
				<li className={styles.navItem}><Link href="/contact">Contact</Link></li>
			</ul>

			{/* persistent menu button (visible on all screen sizes) */}
			<button
				className={styles.menuButton}
				aria-expanded={open}
				aria-controls="site-menu"
				onClick={() => setOpen((s) => !s)}
				type="button"
			>
				Menu
			</button>

			{/* absolutely-positioned dropdown that appears when `open` is true */}
			<ul
				id="site-menu"
				role="menu"
				className={`${styles.dropdown} ${open ? styles.open : ''}`}
			>
				<li className={styles.dropdownItem} role="none"><Link role="menuitem" href="/">Home</Link></li>
				<li className={styles.dropdownItem} role="none"><Link role="menuitem" href="/about">About</Link></li>
				<li className={styles.dropdownItem} role="none"><Link role="menuitem" href="/gallery">Gallery</Link></li>
				<li className={styles.dropdownItem} role="none"><Link role="menuitem" href="/contact">Contact</Link></li>
			</ul>

		</nav>
	);
}

