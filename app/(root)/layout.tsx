import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";
import { Variable } from "lucide-react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>  SIDEBAR 
     {children}
     </main>
  );
}
