import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description:
    "Desarrollador Frontend con mas de 5 años creando productos digitales accesibles, elegantes y funcionales para startups y empresas internacionales.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Desarrollador Frontend con mas de 5 años creando productos digitales accesibles, elegantes y funcionales para startups y empresas internacionales.",
    siteName: `${personalInfo.name} | Portfolio`,
    images: [
      {
        url: personalInfo.aboutImage,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Desarrollador Frontend con mas de 5 años creando productos digitales accesibles, elegantes y funcionales para startups y empresas internacionales.",
    images: [personalInfo.aboutImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
