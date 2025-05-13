import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/header/Navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meotel",
  description: "A simple and elegant hotel booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
