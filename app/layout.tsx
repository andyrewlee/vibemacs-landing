import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vibemacs",
  description:
    "emacs config for running multiple codex and claude code agents",
  openGraph: {
    title: "vibemacs",
    description:
      "emacs config for running multiple codex and claude code agents",
    images: [
      {
        url: "/product.png",
        width: 2222,
        height: 1192,
        alt: "vibemacs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vibemacs",
    description:
      "emacs config for running multiple codex and claude code agents",
    images: ["/product.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
