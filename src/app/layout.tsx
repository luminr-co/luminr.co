import "./globals.css";
import { Montserrat, Kanit } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mons" });
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "Luminr.co",
  description: "Illuminating Your Vision With Utmost Delight And Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${kanit.variable}`}>
      <body className={`noise  relative`}>{children}</body>
    </html>
  );
}
