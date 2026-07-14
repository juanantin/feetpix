import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://feetpix.example"),
  title: "$FEETPIX — The Legendary NFT Collection Returns Onchain",
  description:
    "The official $FEETPIX token relaunch of the legendary FEETPIX NFT Collection, now entering a new era on Robinhood Chain.",
  openGraph: {
    title: "$FEETPIX — The Legendary NFT Collection Returns Onchain",
    description:
      "The official $FEETPIX token relaunch of the legendary FEETPIX NFT Collection, now entering a new era on Robinhood Chain.",
    type: "website",
    images: ["/images/social-preview.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "$FEETPIX — The Legendary NFT Collection Returns Onchain",
    description:
      "The official $FEETPIX token relaunch of the legendary FEETPIX NFT Collection, now entering a new era on Robinhood Chain.",
    images: ["/images/social-preview.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
