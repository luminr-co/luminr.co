import Script from "next/script";
import "./globals.css";
import { Montserrat, Kanit } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mons" });
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata = {
  metadataBase: "https://luminr.co",
  title: {
    template: "%s | Luminr.co",
    default: "Luminr.co",
  },
  description: "Your trusted partner for all things digital. Build Your Dynamic Web and Mobile Applications and Enhance Online Visibility with SEO.",
  keywords: [
    "luminr",
    "nepal",
    "mobile development",
    "web development",
    "seo",
    "branding",
    "business intelligence",
  ],
  openGraph: {
    title: "Luminr.co",
    description: "Your trusted partner for all things digital. Build Your Dynamic Web and Mobile Applications and Enhance Online Visibility with SEO.",
    url: "https://luminr.co",
    siteName: "Luminr.co",
    images: [
      {
        url: "https://luminr.co/banner.webp",
        width: 400,
        height: 250,
        alt: "Luminr Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminr.co",
    description: "Your trusted partner for all things digital. Build Your Dynamic Web and Mobile Applications and Enhance Online Visibility with SEO.",
    images: ["https://luminr.co/banner.webp"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${kanit.variable}`}>
      <body className={`noise  relative`}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-595J3VH2R3" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-595J3VH2R3');
        `}
        </Script>
      </body>
    </html>
  );
}
