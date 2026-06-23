import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
/* import { GoogleTagManager } from "@next/third-parties/google"; */
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Professional portfolio website showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
      {/* Temporalmente se documenta mientras se prueba  */}
      {/* <GoogleTagManager gtmId="GTM-KPF3DXTQ" /> */}
    </html>
  );
}