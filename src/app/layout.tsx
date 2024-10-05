import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Coming Soon - PDD24",
  description: "PDD2024 by HammerCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ic_pdd24_light.svg" sizes="any" />
      </head>
      <body className={sora.className}>
        <Navbar />
        <div className="bg-primaryBlack-900 mt-28 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
