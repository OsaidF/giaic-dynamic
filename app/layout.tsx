import type { Metadata } from "next";
import "./globals.css";
import { Urbanist, Righteous } from 'next/font/google'

const urbanist = Urbanist({
  weight: ['800', '200'],
  subsets: ['latin'],
  variable: '--font-urbanist'
})

const righteous = Righteous({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-righteous'
})

export const metadata: Metadata = {
  title: "Resume",
  description: "Made by Osaid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${righteous.variable}`}>
        {children}
      </body>
    </html>
  );
}
