import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/about.module.css';
import Footer from '../components/footer';

const timeline = [
  {
    year: '2010',
    title: 'Artist Residency',
    description:
      'Refined techniques at the London College of Fashion while assisting editorial teams for global glossies.',
  },
  {
    year: '2014',
    title: 'SVE Studio Launch',
    description:
      'Opened the first Shalini Vashisht Experiences atelier in New Delhi with a focus on customized bridal artistry.',
  },
  {
    year: '2018',
    title: 'Fashion Weeks',
    description:
      'Led backstage beauty direction for couture showcases across Mumbai, Dubai, and Milan.',
  },
  {
    year: '2023',
    title: 'Global Destination Collective',
    description:
      'Built a concierge team delivering on-location transformations from Santorini to Seychelles.',
  },
];

const values = [
  {
    heading: 'Intentional Glamour',
    copy: 'Every canvas begins with skin health, balanced tones, and a bespoke palette mapped to lighting, attire, and the moment.',
  },
  {
    heading: 'Artistry + Tech',
    copy: 'Color science, AI-enabled face charts, and precision airbrush tools ensure couture looks stay camera-ready for 18 hours.',
  },
  {
    heading: 'Sustainable Luxury',
    copy: 'Cruelty-free and refillable kits, responsibly sourced pigments, and mindful rituals keep the glow planet-positive.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Shalini Vashisht | Bespoke Makeup Artistry</title>
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
            <span className={styles.heroEyebrow}>Meet the artist</span>
            <h1 className={styles.heroHeading}>The story behind the signature glow.</h1>
            <p className={styles.heroBody}>
              For over a decade, Shalini Vashisht has transformed bridal mornings, runway finales, and cinematic frames with a
              refined balance of artistry and technology. The SVE collective is rooted in intentional glamour—where every detail
              narrates who you are.
            </p>
            <div className={styles.heroActions}>
              <Link href="#vision" className={styles.primaryLink}>
                Explore the craft
              </Link>
              <Link href="/contact" className={styles.secondaryLink}>
                Collaborate with us
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div>
                <span>11+</span>
                <p>Years curating couture beauty journeys</p>
              </div>
              <div>
                <span>420+</span>
                <p>Destination celebrations and shoots</p>
              </div>
              <div>
                <span>65</span>
                <p>Fashion week showcases globally</p>
              </div>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroMediaGlow} />
            <img src="/pexels-olenagoldman-1021693.jpg" alt="Makeup artist perfecting bridal look" />
            <div className={styles.heroBadge}>
              <span>Trusted Artistry</span>
              <strong>Since 2014</strong>
            </div>
          </div>
        </section>

        <section id="vision" className={styles.valuesSection}>
          <header>
            <span className={styles.sectionEyebrow}>Vision & Values</span>
            <h2>What guides every transformation.</h2>
            <p>
              The SVE atelier blends couture intuition with technical mastery. Every look is a collaboration anchored in your story,
              guided by sustainable luxury, and engineered for longevity.
            </p>
          </header>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.heading}>
                <h3>{value.heading}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.timelineSection}>
          <div className={styles.timelineHeader}>
            <span className={styles.sectionEyebrow}>Milestones</span>
            <h2>A timeline of glow-inducing moments.</h2>
          </div>
          <div className={styles.timelineRail}>
            {timeline.map((item) => (
              <div className={styles.timelineNode} key={item.year}>
                <span className={styles.timelineYear}>{item.year}</span>
                <div className={styles.timelineCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.teamCopy}>
            <span className={styles.sectionEyebrow}>The Collective</span>
            <h2>Concierge artists, hair architects, and skin therapists.</h2>
            <p>
              We partner with award-winning hair stylists, dermal experts, and aura readers to craft holistic experiences. Each
              blueprint includes prep rituals, travel-ready touch-up kits, and guidance calls that allow you to ease into the day.
            </p>
            <Link href="/contact" className={styles.primaryLink}>
              Design your experience
            </Link>
          </div>
          <div className={styles.teamMedia}>
            <div className={styles.teamMediaGlow} />
            <img src="/pexels-christian-diokno-1666462-3260852.jpg" alt="Artists collaborating backstage" />
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
