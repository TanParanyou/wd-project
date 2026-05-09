import type { Metadata } from "next";
import { Playfair_Display, Caveat, Kanit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const kanit = Kanit({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  display: "swap",
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Nan & Tan - Housewarming Ceremony & Wrist-Tying Ceremony",
  description: "ขอเรียนเชิญร่วมงานทำบุญขึ้นบ้านใหม่ และพิธีผูกข้อมือแบบอบอุ่นเป็นกันเอง | May 23, 2026",
  keywords: ["Nan", "Tan", "Housewarming", "Wrist-Tying", "ทำบุญขึ้นบ้านใหม่", "ผูกข้อมือ", "งานแต่ง", "การ์ดเชิญ", "บ้านใหม่", "พิธีสงฆ์"],
  authors: [{ name: "Nan & Tan" }],
  creator: "Nan & Tan",
  publisher: "Nan & Tan",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Nan & Tan - Housewarming Ceremony & Wrist-Tying Ceremony",
    description: "ขอเรียนเชิญร่วมงานทำบุญขึ้นบ้านใหม่ และพิธีผูกข้อมือแบบอบอุ่นเป็นกันเอง",
    type: "website",
    locale: "th_TH",
    siteName: "Nan & Tan Invitation",
    images: [{
      url: "/favicon.png",
      width: 1200,
      height: 630,
      alt: "Nan & Tan - Housewarming Ceremony Invitation",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nan & Tan - Housewarming Ceremony",
    description: "ขอเรียนเชิญร่วมงานทำบุญขึ้นบ้านใหม่ และพิธีผูกข้อมือ",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "your-google-verification-code",
  },
  metadataBase: new URL("https://nan-tan-wedding.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${playfair.variable} ${caveat.variable} ${kanit.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FAFAF8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#2C2C2C]">
        {children}
      </body>
    </html>
  );
}
