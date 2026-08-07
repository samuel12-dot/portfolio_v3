import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Ayodeji Samuel — Product Designer & Full-Stack Engineer";
const description =
  "Product designer and full-stack MERN engineer based in Lagos, Nigeria. I design the interface, then I build the API behind it.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Ayodeji Samuel",
    "Product Designer",
    "Full-Stack Engineer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Lagos Nigeria",
  ],
  authors: [{ name: "Ayodeji Samuel" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_NG",
    siteName: "Ayodeji Samuel",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
