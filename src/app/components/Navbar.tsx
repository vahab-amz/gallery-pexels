"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 10);

      if (currentY > lastScrollY && currentY > 100) {
        setHidden(true); 
      } else {
        setHidden(false); 
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 top-0 w-full transition-all duration-500 z-10 rounded-b-lg
        ${scrolled ? "bg-white shadow text-slate-900" : "bg-transparent text-gray-300"} 
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="py-3 md:py-6 lg:py-8 flex flex-col md:flex-row gap-4 justify-between max-w-[1200px] mx-auto px-4">
        <Link
          className="text-2xl lg:text-3xl font-semibold font-mono"
          href="/"
        >
          Image Gallery
        </Link>
        <Search />
      </nav>
    </header>
  );
}
