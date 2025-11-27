import Head from 'next/head';
import Masonry from '../components/Masonry';
import styles from '../styles/work.module.css';
import Footer from '../components/footer';

const celebrityItems = [
  {
    id: 'celebrity-aish',
    img: '/new%20pics%20shalini%20mam/celebrity/aish.jpg',
    url: '/contact',
    height: 540
  },
  {
    id: 'celebrity-scan1',
    img: '/new%20pics%20shalini%20mam/celebrity/scan0001.jpg',
    url: '/contact',
    height: 440
  },
  {
    id: 'celebrity-scan2',
    img: '/new%20pics%20shalini%20mam/celebrity/scan0002.jpg',
    url: '/contact',
    height: 620
  },
  {
    id: 'celebrity-scan3',
    img: '/new%20pics%20shalini%20mam/celebrity/scan0003.jpg',
    url: '/contact',
    height: 500
  },
  {
    id: 'celebrity-scan4',
    img: '/new%20pics%20shalini%20mam/celebrity/scan002202.jpg',
    url: '/contact',
    height: 580
  },
  {
    id: 'celebrity-classic',
    img: '/new%20pics%20shalini%20mam/celebrity/scan01.jpg',
    url: '/contact',
    height: 480
  }
];

const magazineItems = [
  {
    id: 'magazine-08',
    img: '/new%20pics%20shalini%20mam/b-covers/08.jpg',
    url: '/contact',
    height: 560
  },
  {
    id: 'magazine-10',
    img: '/new%20pics%20shalini%20mam/b-covers/10.jpg',
    url: '/contact',
    height: 420
  },
  {
    id: 'magazine-11',
    img: '/new%20pics%20shalini%20mam/b-covers/11.jpg',
    url: '/contact',
    height: 610
  },
  {
    id: 'magazine-12',
    img: '/new%20pics%20shalini%20mam/b-covers/12.jpg',
    url: '/contact',
    height: 470
  },
  {
    id: 'magazine-22',
    img: '/new%20pics%20shalini%20mam/b-covers/22.jpg',
    url: '/contact',
    height: 530
  },
  {
    id: 'magazine-scan',
    img: '/new%20pics%20shalini%20mam/b-covers/scan00022.jpg',
    url: '/contact',
    height: 590
  }
];

const mediaItems = [
  {
    id: 'media-1',
    img: '/new%20pics%20shalini%20mam/media/media1.jpg',
    url: '/contact',
    height: 540
  },
  {
    id: 'media-2',
    img: '/new%20pics%20shalini%20mam/media/media2.jpg',
    url: '/contact',
    height: 420
  },
  {
    id: 'media-3',
    img: '/new%20pics%20shalini%20mam/media/media3.jpg',
    url: '/contact',
    height: 610
  },
  {
    id: 'media-scan1',
    img: '/new%20pics%20shalini%20mam/media/scan0007.jpg',
    url: '/contact',
    height: 460
  },
  {
    id: 'media-scan2',
    img: '/new%20pics%20shalini%20mam/media/scan0010.jpg',
    url: '/contact',
    height: 520
  },
  {
    id: 'media-scan3',
    img: '/new%20pics%20shalini%20mam/media/scan0015.jpg',
    url: '/contact',
    height: 590
  }
];

const fashionItems = [
  {
    id: 'fashion-05',
    img: '/new%20pics%20shalini%20mam/fashion/05.jpg',
    url: '/contact',
    height: 500
  },
  {
    id: 'fashion-16',
    img: '/new%20pics%20shalini%20mam/fashion/16.jpg',
    url: '/contact',
    height: 420
  },
  {
    id: 'fashion-17',
    img: '/new%20pics%20shalini%20mam/fashion/17.jpg',
    url: '/contact',
    height: 600
  },
  {
    id: 'fashion-valor',
    img: '/new%20pics%20shalini%20mam/fashion/jj_valaya_1.jpg',
    url: '/contact',
    height: 540
  },
  {
    id: 'fashion-dsc',
    img: '/new%20pics%20shalini%20mam/fashion/DSC_0012.jpg',
    url: '/contact',
    height: 460
  },
  {
    id: 'fashion-kirat',
    img: '/new%20pics%20shalini%20mam/fashion/kirat4.jpg',
    url: '/contact',
    height: 580
  }
];

const workSections = [
  {
    key: 'celebrities',
    tag: 'Signature Icons',
    title: 'Celebrities',
    description: 'A luminous archive of the actors, singers, and tastemakers who trust the SVE collective with their red-carpet transformations.',
    items: celebrityItems
  },
  {
    key: 'magazines',
    tag: 'Cover Stories',
    title: 'Magazines',
    description: 'Editorial spreads and glossy covers that bring couture beauty narratives to life on the biggest print stages.',
    items: magazineItems
  },
  {
    key: 'media',
    tag: 'Spotlight Moments',
    title: 'Media Featured',
    description: 'Press highlights, broadcast features, and behind-the-scenes reveals that celebrate Shalini Vashisht Experiences in the limelight.',
    items: mediaItems
  },
  {
    key: 'fashion',
    tag: 'Runway & Campaigns',
    title: 'Fashion',
    description: 'Runway finales, couture campaigns, and atelier collaborations, captured in textures of silk, shimmer, and spotlight.',
    items: fashionItems
  }
];

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Our Work | Shalini Vashisht Experiences</title>
        <meta
          name="description"
          content="Explore celebrity looks, magazine covers, media features, and fashion campaigns curated by Shalini Vashisht Experiences."
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <span className={styles.heroEyebrow}>Our Work</span>
          <h1>Where every frame captures an unforgettable transformation.</h1>
          <p>
            Step inside the SVE archive. From iconic faces to couture campaigns, discover a fluid mosaic of artistry shaped for premieres,
            print legends, media spotlights, and runway storytelling.
          </p>
        </section>

        {workSections.map((section) => (
          <section key={section.key} id={section.key} className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionTag}>{section.tag}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>
              <p className={styles.sectionDescription}>{section.description}</p>
            </div>
            <div className={styles.masonryWrap}>
              <Masonry
                items={section.items}
                animateFrom="random"
                duration={0.7}
                stagger={0.08}
                ease="expo.out"
                scaleOnHover
                hoverScale={0.93}
                blurToFocus
                colorShiftOnHover
              />
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
