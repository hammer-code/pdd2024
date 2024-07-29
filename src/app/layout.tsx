import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
        <div className="bg-gradient-to-b from-primaryBlack-800 to-primaryBlack-900 text-white min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
