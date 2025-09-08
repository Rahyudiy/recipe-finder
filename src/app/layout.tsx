import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "TastyVerse - Recipe Finder 🌍🍜",
    template: "%s | TastyVerse",
  },
  description:
    "Discover delicious recipes from around the world with TastyVerse. Cook, learn, and enjoy international flavors in your kitchen.",
  keywords: [
    "recipes",
    "cooking",
    "international food",
    "world cuisine",
    "TastyVerse",
  ],
  authors: [{ name: "TastyVerse Team" }],
  icons: {
    icon: "/logo.webp", // stored inside /public
  },
  openGraph: {
    title: "TastyVerse - Explore Global Recipes 🌍🍜",
    description:
      "Bringing recipes from every corner of the world to your kitchen.",
    url: "https://recipe-finder-xi-bice.vercel.app/", 
    siteName: "TastyVerse",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 800,
        alt: "TastyVerse Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TastyVerse - Explore Global Recipes 🌍🍜",
    description: "Discover recipes from every corner of the world.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased `}>{children}</body>
    </html>
  );
}
