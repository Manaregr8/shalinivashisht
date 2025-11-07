import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/about.module.css';
import Footer from '../components/footer';

const values = [
  {
    heading: 'Skin-first rituals',
    copy: 'Medical-grade prepping techniques ensure every base stays luminous yet breathable through pheras, flash photography, and after-parties.',
  },
  {
    heading: 'Tailored colour stories',
    copy: 'Pigments and textures are custom blended to match undertones, couture fabrics, and jewellery metals while respecting cultural aesthetics.',
  },
  {
    heading: 'Precision collective',
    copy: 'Artists, hair directors, and dermal specialists are trained under Shalini to deliver couture detail consistently across multi-day events.',
  },
  {
    heading: 'Conscious indulgence',
    copy: 'Cruelty-free kits, refill systems, and hospital-grade hygiene protocols keep luxury experiences considered and responsible.',
  },
];

const timeline = [
  {
    year: '2010',
    title: 'Television Debut',
    description:
      'First national television appearance as lead makeup artist on a prime-time makeover series, introducing signature skin-first glam to millions.',
  },
  {
    year: '2013',
    title: 'SVE Studio Launch',
    description:
      'Opened the Shalini Vashisht Experiences atelier in New Delhi, offering concierge bridal artistry and bespoke complexion rituals.',
  },
  {
    year: '2017',
    title: 'Fashion Week Director',
    description:
      'Helmed backstage beauty direction for couture houses at Lakmé Fashion Week, FDCI showcases, and international designer tours.',
  },
  {
    year: '2022',
    title: 'Global Destination Suite',
    description:
      'Expanded the collective to serve destination weddings from Santorini to Seychelles with climate-adaptive airbrush and HD artistry.',
  },
];

const services = [
  {
    heading: 'Bridal Couture Makeup',
    copy: 'Multi-event journeys with preview trials, ensemble-matched palettes, ritual-friendly touch-ups, and luxury skin prep for pheras, sangeets, and receptions.',
  },
  {
    heading: 'Party & Occasion Glam',
    copy: 'Statement-ready looks for cocktails, award nights, anniversaries, and social soirées that balance longevity with effortless comfort.',
  },
  {
    heading: 'Airbrush & HD Complexion',
    copy: 'Feather-light coverage engineered to resist humidity, flash photography, and marathon celebrations while keeping skin breathable.',
  },
  {
    heading: 'Editorial & Photoshoots',
    copy: 'Concept-to-camera beauty direction for campaigns, fashion lookbooks, and brand launches with on-set continuity support.',
  },
  {
    heading: 'Celebrity & Media Glam',
    copy: 'Red-carpet, press junket, and television-ready makeup refined for high-definition broadcast and paparazzi flash.',
  },
];

const testimonials = [
  {
    quote:
      'Shalini translated my bridal Pinterest board into a couture reality that survived 14 hours of ceremonies and rain. Every photo still feels luminous.',
    name: 'Rhea Malhotra',
    role: 'Destination Bride · Jaipur',
  },
  {
    quote:
      'Her command backstage is unmatched—three shows, zero delays, and the most flawless complexions under runway spotlights.',
    name: 'Arjun Bedi',
    role: 'Fashion Director · Lakmé Fashion Week',
  },
  {
    quote:
      'TV lights can be unforgiving, yet Shalini’s HD finish kept me photo-ready through live interviews and flash photography.',
    name: 'Meera Kapoor',
    role: 'Actor & Host',
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
  <main id="about" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.heroEyebrow}>Meet the artist</span>
            <h1 className={styles.heroHeading}>The artistry behind India’s favourite glow.</h1>
            <p className={styles.heroBody}>
              Shalini Vashisht is a senior makeup director celebrated for fusing skin science with couture instinct. Featured across
              Vogue India, Harper’s Bazaar Bride, and prime-time television, her signature is a refined, natural glam that travels
              seamlessly from pheran rituals to red carpets. Every face chart honours heritage, lighting, attire, and the moment you
              want to remember forever.
            </p>
            <div className={styles.heroActions}>
              <Link href="#services" className={styles.primaryLink}>
                Explore signature services
              </Link>
              <Link href="/contact" className={styles.secondaryLink}>
                Book a consultation
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div>
                <span>15+</span>
                <p>Years designing couture beauty journeys worldwide</p>
              </div>
              <div>
                <span>520+</span>
                <p>Destination celebrations, shoots, and editorial sets</p>
              </div>
              <div>
                <span>70</span>
                <p>Fashion week showcases and celebrity press tours</p>
              </div>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroMediaGlow} />
            <div className={styles.heroMediaFrame}>
              <img
                src="/hdimages/SendAnywhere_658944/89556a7a-ea01-48cf-b1ef-299718eb7481.jpg"
                alt="Shalini Vashisht perfecting a bridal glow"
                style={{ objectPosition: '30% 35%' }}
              />
            </div>
            <div className={styles.heroBadge}>
              <span>Trusted Artistry</span>
              <strong>Since 2010</strong>
            </div>
          </div>
        </section>

        <section id="vision" className={styles.valuesSection}>
          <header>
            <span className={styles.sectionEyebrow}>Artistic Philosophy</span>
            <h2>Makeup that feels like couture, looks like skin.</h2>
            <p>
              Every booking begins with a skin diagnostic, lighting study, and wardrobe review so the final look moves effortlessly
              with you. The SVE collective merges colour theory with sensorial rituals to create finishes that endure celebrations,
              cameras, and climates.
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

  <section id="services" className={styles.servicesSection}>
          <header>
            <span className={styles.sectionEyebrow}>Signature Services</span>
            <h2>Bespoke beauty journeys engineered for your itinerary.</h2>
            <p>
              From multi-day bridal couture to red-carpet press tours, each service tier includes preview calls, custom skincare
              prescriptions, and on-location touch-up rituals so you stay camera ready at every milestone.
            </p>
          </header>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.heading} className={styles.serviceCard}>
                <h3>{service.heading}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
          <div className={styles.servicesCta}>
            <Link href="/contact" className={styles.primaryLink}>
              Reserve your date
            </Link>
            <p>Concierge bookings are available up to twelve months in advance worldwide.</p>
          </div>
        </section>

        <section id="milestones" className={styles.timelineSection}>
          <div className={styles.timelineHeader}>
            <span className={styles.sectionEyebrow}>Milestones</span>
            <h2>A decade of celebrated transformations.</h2>
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

        <section className={styles.testimonialsSection}>
          <header>
            <span className={styles.sectionEyebrow}>Client Praise</span>
            <h2>Confidence that lasts from first look to final frame.</h2>
            <p>
              Brides, fashion directors, and on-air talent trust Shalini and the collective to deliver artistry that feels personal,
              luxurious, and effortless under every spotlight.
            </p>
          </header>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>
                  <span>&ldquo;</span>
                  {testimonial.quote}
                  <span>&rdquo;</span>
                </p>
                <div className={styles.testimonialMeta}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="collective" className={styles.teamSection}>
          <div className={styles.teamCopy}>
            <span className={styles.sectionEyebrow}>The Collective</span>
            <h2>Concierge artists, hair architects, and skin therapists.</h2>
            <p>
              The SVE unit travels with you for every celebration, complete with hair maestros, dermal therapists, and logistics
              producers who choreograph your schedule. Expect bespoke prep menus, couture kit sanitisation, and touch-up blueprints
              for each ceremony and frame.
            </p>
            <Link href="/contact" className={styles.primaryLink}>
              Curate your collective
            </Link>
          </div>
          <div className={styles.teamMedia}>
            <div className={styles.teamMediaGlow} />
            <div className={styles.teamMediaFrame}>
              <img
                src="/hdimages/SendAnywhere_001278/7-1.jpg"
                alt="SVE collective collaborating backstage"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>
          </div>
        </section>
  </main>
  <Footer />
    </>
  );
}
