import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const revalidate = 10

export const metadata: Metadata = {
  title: "Gallery Pexels",
  description: "A gallery app using Pexels API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 min-h-screen">
        <main className="max-w-[1200px] mx-auto px-4 mb-10 ">
            <Navbar />
            <div className="relative top-30 ">
          	  {children}
            </div>
        </main>
      </body>
    </html>
  );
}
