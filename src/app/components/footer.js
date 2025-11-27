import Link from 'next/link';
import styles from '../styles/hero.module.css';

const footerLinks = [
    {
        heading: 'Quick Links',
        items: [
            { label: 'About Shalini', href: '/about' },
            { label: 'Signature Services', href: '/about#services' },
            { label: 'Portfolio', href: '/gallery' },
            { label: 'Book a Session', href: '/contact' },
        ],
    },
    {
        heading: 'Bridal Couture',
        items: [
            { label: 'Celebrity Work', href: '/work#celebrities' },
            { label: 'Magazine Features', href: '/work#magazines' },
            { label: 'Media Coverage', href: '/work#media' },
            { label: 'Fashion Campaigns', href: '/work#fashion' },
        ],
    },
];
const Footer = () =>{

    return(
        <footer
                className={styles.footer}
                style={{
                    background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
                    color: '#e2e8f0',
                    borderTop: '1px solid rgba(30, 41, 59, 0.65)'
                }}
            >
                <div className={styles.footerWave} style={{ opacity: 0.18 }}>
                    <img src="/YOOYOOYOYOYOYOYOYOY.svg" alt="Decorative wave" />
                </div>
                <div
                    className={styles.footerContent}
                    style={{
                        boxShadow: '0 35px 80px rgba(2, 6, 23, 0.65)'
                    }}
                >
                    <div className={styles.footerBrand} style={{ color: '#e2e8f0' }}>
                        <img
                            src="/Shalini Mam Logo (N).png"
                            alt="SVE"
                            className={styles.footerLogo}
                            style={{ filter: 'drop-shadow(0 14px 40px rgba(15, 23, 42, 0.75))' }}
                        />
                        <p className={styles.footerTagline} style={{ color: 'rgba(226, 232, 240, 0.7)' }}>
                            Bespoke makeup artistry bringing couture nuance to every moment worth remembering.
                        </p>
                        <div className={styles.footerContact} style={{ color: 'rgba(226, 232, 240, 0.78)' }}>
                            <span>Bookings & Enquiries</span>
                            <a href="tel:+919876543210" style={{ color: '#facc15' }}>
                                +91 98765 43210
                            </a>
                            <a href="mailto:hello@shalinivashisht.com" style={{ color: '#facc15' }}>
                                hello@shalinivashisht.com
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerLinksWrap} style={{ color: '#e2e8f0' }}>
                        {footerLinks.map((group) => (
                            <div key={group.heading} className={styles.footerColumn} style={{ color: '#e2e8f0' }}>
                                <h3 style={{ color: '#f4f4f5' }}>{group.heading}</h3>
                                <ul>
                                    {group.items.map((item) => (
                                        <li key={item.label} style={{ color: 'rgba(226, 232, 240, 0.75)' }}>
                                            <Link href={item.href} style={{ color: 'rgba(148, 163, 184, 0.85)' }}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className={styles.footerColumn} style={{ color: '#e2e8f0' }}>
                            <h3 style={{ color: '#f4f4f5' }}>Studio Hours</h3>
                            <ul>
                                <li style={{ color: 'rgba(226, 232, 240, 0.75)' }}>Mon – Thu · 10am – 7pm</li>
                                <li style={{ color: 'rgba(226, 232, 240, 0.75)' }}>Fri – Sun · By appointment</li>
                                <li className={styles.footerAddress} style={{ color: 'rgba(148, 163, 184, 0.7)' }}>
                                    C-18, Defence Colony, New Delhi
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.footerCredits}
                    style={{
                        borderTop: '1px solid rgba(30, 41, 59, 0.65)',
                        color: 'rgba(203, 213, 225, 0.7)'
                    }}
                >
                    <span>© {new Date().getFullYear()} Shalini Vashisht Experiences. All rights reserved.</span>
                    <div className={styles.footerLegal} style={{ color: 'rgba(203, 213, 225, 0.7)' }}>
                        <Link href="/contact" style={{ color: '#facc15' }}>
                            Privacy Policy
                        </Link>
                        <span>·</span>
                        <Link href="/contact" style={{ color: '#facc15' }}>
                            Terms
                        </Link>
                    </div>
                </div>
            </footer>
    );
}
export default Footer;