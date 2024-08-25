import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const imbPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
})

export const metadata: Metadata = {
  title: "Horizon Bank Brandon",
  description: "plataforma moderna de banco para todos",
  icons: {
    
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${imbPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
