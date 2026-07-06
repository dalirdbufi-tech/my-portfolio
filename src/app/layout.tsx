import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MatrixRain } from "@/components/MatrixRain";
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
  title: "Dalird Bufi — DevOps / Platform Engineer",
  description:
    "Dalird Bufi — DevOps / Platform Engineer specialising in Kubernetes (CKA), AWS, Azure, Terraform and CI/CD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col">
        <MatrixRain />
        <div
          aria-hidden="true"
          className="scanlines pointer-events-none fixed inset-0 z-0"
        />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
