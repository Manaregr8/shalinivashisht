import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shalini Vashisht - Professional Makeup Artist",
  description: "Luxury bridal, editorial, and airbrush makeup artistry by celebrity-trusted artist Shalini Vashisht. Couture looks with skin-enhancing, long-wear finishes in Delhi and worldwide.",
  keywords: [
    "Shalini Vashisht",
    "luxury bridal makeup artist",
    "celebrity makeup artist Delhi",
    "airbrush makeup specialist",
    "editorial makeup services",
    "destination wedding makeup India",
  ],
  openGraph: {
    title: "Shalini Vashisht | Luxury Bridal & Editorial Makeup Artist",
    description:
      "Discover award-winning bridal, editorial, and airbrush makeup by Shalini Vashisht. Celebrity-trusted artistry delivering luminous, long-lasting looks.",
    url: "https://shalinivashisht.com",
    siteName: "Shalini Vashisht Experiences",
    images: [
      {
        url: "https://shalinivashisht.com/MainLogo.png",
        width: 1200,
        height: 630,
        alt: "Shalini Vashisht brand mark",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalini Vashisht | Luxury Bridal & Editorial Makeup Artist",
    description:
      "Book senior makeup artist Shalini Vashisht for couture bridal, celebrity, and editorial looks designed to withstand every spotlight.",
    images: ["https://shalinivashisht.com/MainLogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1179564876849009');
        fbq('track', 'PageView');` }} />
        <noscript>
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=1179564876849009&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
