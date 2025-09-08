import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});


export const metadata: Metadata = {
  title: "RecipeFinder",
  description: "TastyVerse is a universe of flavors, bringing recipes from every corner of the world to your kitchen",
  icons: {
    icon: "/logo.webp", // ✅ path in public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
