import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Etch-a-sketch",
  description: "Etch-a-sketch App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen	flex flex-col">
        <header className="flexBetween">
          <h1 className="max-container padding-container relative z-30 pt-1.5 pb-5 font-bold text-3xl md:text-5xl sm:text-4xl">
            Etch-a-sketch
          </h1>
        </header>
        <main className="relative overflow-hidden flex-1">{children}</main>
        <footer className="bottom-0 fixed w-screen flex justify-center text-xs md:text-sm">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
