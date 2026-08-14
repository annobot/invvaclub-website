import type { Metadata } from "next";
import { Geist, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Invva Club | The Pulse of Ahmedabad's Artist Youth",
    template: "%s | Invva Club",
  },
  description:
    "Ahmedabad's open mic community for poetry, comedy, music, storytelling & more. Studio nights, cafe takeovers, corporate shows, kids events, and solo performances. Own the mic, own the moment.",
  keywords: [
    "Invva Club",
    "Ahmedabad open mic",
    "poetry",
    "standup comedy",
    "storytelling",
    "corporate entertainment",
  ],
  openGraph: {
    title: "Invva Club | Own the Mic, Own the Moment",
    description:
      "The pulse of Ahmedabad's artist youth. Open mics, solo shows, cafe events & corporate gigs.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${plusJakarta.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
