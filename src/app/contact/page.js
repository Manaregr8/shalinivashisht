'use client';

import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/contact.module.css';
import Footer from '../components/footer';

const contactChannels = [
	{
		heading: 'Bridal & Destination',
		detail: 'concierge@shalinivashisht.com',
		note: 'Tailored timelines, travel-ready kits, and prep rituals for weddings worldwide.',
	},
	{
		heading: 'Editorial & Campaigns',
		detail: 'editorial@shalinivashisht.com',
		note: 'Runway direction, brand launches, luxury shoots, and creative collaborations.',
	},
	{
		heading: 'Workshops & Education',
		detail: 'academy@shalinivashisht.com',
		note: 'Private masterclasses and corporate immersions for teams and ateliers.',
	},
];

export default function ContactPage() {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("");
		const formData = new FormData(event.target);
		formData.append("access_key", "651058f9-f1e2-4e94-968a-8bab901fc82d");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		});

		const data = await response.json();
		if (data.success) {
			setResult("Form submitted successfully! We'll get back to you soon.");
			event.target.reset();
		} else {
			setResult("Something went wrong. Please try again.");
		}
	};

	return (
		<>
			<Head>
				<title>Connect with SVE | Book Your Artistry Experience</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Ms+Madi&family=Raleway:ital,wght@0,100..900;1,100..900&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.page}>
				<section className={styles.hero}>
					<div className={styles.heroCopy}>
						<span className={styles.heroEyebrow}>Let’s create your glow map</span>
						<h1>Tell us about your moment.</h1>
						<p>
							Whether you are planning an intimate pheran ceremony, a red-carpet reveal, or a minimalist editorial, the SVE studio
							crafts immersive experiences that feel whisper-light yet unforgettable.
						</p>
						<div className={styles.heroHighlights}>
							<div>
								<span>01</span>
								<p>Virtual consults to align moodboards, attire, and lighting cues.</p>
							</div>
							<div>
								<span>02</span>
								<p>Extended wear artistry designed for long celebrations and climate shifts.</p>
							</div>
						</div>
					</div>
					<div className={styles.heroMedia}>
						<div className={styles.heroMediaGlow} />
						<img src="/pexels-pixabay-247322.jpg" alt="Makeup brushes and palette on a vanity" />
					</div>
				</section>

				<section className={styles.contactSection}>
					<div className={styles.contactInfo}>
						<h2>Book a consultation</h2>
						<p>
							Share your celebration dates, locations, and inspiration. Our concierge team will respond within 24 hours with an
							art direction roadmap and availability.
						</p>
						<div className={styles.channels}>
							{contactChannels.map((channel) => (
								<div key={channel.heading} className={styles.channelCard}>
									<h3>{channel.heading}</h3>
									<a href={`mailto:${channel.detail}`}>{channel.detail}</a>
									<p>{channel.note}</p>
								</div>
							))}
						</div>
						<div className={styles.studioCard}>
							<h3>Visit the Studio</h3>
							<p>C-18, Defence Colony, New Delhi · By appointment only</p>
							<div className={styles.studioMeta}>
								<span>Studio Hours</span>
								<p>Monday – Thursday · 10am – 7pm</p>
								<p>Friday – Sunday · Curated sessions</p>
							</div>
						</div>
					</div>

					<div className={styles.formPanel}>
						<form className={styles.contactForm} onSubmit={onSubmit}>
							<div className={styles.formGrid}>
								<label>
									<span>Full Name</span>
									<input type="text" name="name" placeholder="Saanvi Kapoor" required />
								</label>
								<label>
									<span>Email</span>
									<input type="email" name="email" placeholder="you@example.com" required />
								</label>
								<label>
									<span>Phone</span>
									<input type="tel" name="phone" placeholder="+91 98765 43210" />
								</label>
								<label>
									<span>Event Date</span>
									<input type="date" name="date" />
								</label>
								<label>
									<span>Event Type</span>
									<select name="eventType" required>
										<option value="Bridal">Bridal</option>
										<option value="Reception">Reception</option>
										<option value="Haldi">Haldi</option>
										<option value="Mehendi">Mehendi</option>
										<option value="Sangeet">Sangeet</option>
										<option value="Cocktail">Cocktail</option>
										<option value="Party">Party</option>
										<option value="Other">Other</option>
									</select>
								</label>
							</div>
							<label className={styles.fullWidth}>
								<span>Event Details & Inspiration</span>
								<textarea
									name="message"
									rows={5}
									placeholder="Share your venue, moodboard, attire, and any must-have looks."
									required
								/>
							</label>
							<input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
							<button type="submit" className={styles.submitButton}>Submit Form</button>
							{result && <p style={{ marginTop: '16px', textAlign: 'center', color: result.includes('success') ? '#10b981' : '#ef4444' }}>{result}</p>}
							<p className={styles.formDisclaimer}>
								By submitting, you agree to our{' '}
								<a href="/contact">privacy policy</a> and understand that availability is limited during peak wedding seasons.
							</p>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
