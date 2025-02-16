import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suhy Web Design | Technology Solutions | Dallas, TX",
  description: "Suhy Web Design, based in Dallas, TX, creates stunning websites and custom digital tools to help businesses in the Dallas area technologically succeed.",
  keywords: ["web design dallas", "web development dallas", "digital solutions dallas", "responsive websites dallas", "custom applications dallas"],
  authors: [
    { name: "Suhy Web Design", url: "https://suhy.tech" },
  ],
  creator: "Suhy Web Design",
  publisher: "Suhy Web Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
  },
  openGraph: {
    title: "Suhy Web Design | Technology Solutions | Dallas, TX",
    description: "Suhy Web Design, based in Dallas, TX, creates stunning websites and custom digital tools to help businesses in the Dallas area technologically succeed.",
    url: "https://suhy.tech",
    siteName: "Suhy Web Design",
    images: [
      {
        url: "https://suhy.tech/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Suhy Web Design Portfolio"
      }
    ],
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhy Web Design | Technology Solutions | Dallas, TX",
    description: "Suhy Web Design, based in Dallas, TX, creates stunning websites and custom digital tools to help businesses in the Dallas area technologically succeed.",
    images: ["https://suhy.tech/favicon.ico"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}