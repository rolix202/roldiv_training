import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://learn.zeenomtech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Learn Frontend Development From Scratch | Zeenomtech",
    template: "%s | Zeenomtech",
  },
  description:
    "Build an in-demand tech skill for 2026. Learn HTML, CSS, JavaScript & React through practical, beginner-friendly training. Join our free WhatsApp group.",
  keywords: [
    "frontend development",
    "learn HTML",
    "learn CSS",
    "JavaScript course",
    "React training",
    "web development",
    "Zeenomtech",
    "coding bootcamp",
  ],
  authors: [{ name: "Zeenomtech", url: siteUrl }],
  creator: "Zeenomtech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Zeenomtech",
    title: "Learn Frontend Development From Scratch | Zeenomtech",
    description:
      "Build an in-demand tech skill for 2026. Learn HTML, CSS, JavaScript & React through practical, beginner-friendly training.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Frontend Development From Scratch | Zeenomtech",
    description:
      "Build an in-demand tech skill for 2026. Learn HTML, CSS, JavaScript & React through practical training.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
