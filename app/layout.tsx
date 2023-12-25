import { inParkingFont } from "@/theme/appFonts";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "inParking",
  description: "parking web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inParkingFont.className}`}>{children}</body>
    </html>
  );
}
