import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <body className="flex flex-col min-h-screen overflow-y-auto overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
