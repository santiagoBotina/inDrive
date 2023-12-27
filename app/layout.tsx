import { inParkingFont } from "@/theme/appFonts";
import type { Metadata } from "next";
import "./globals.css";

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
