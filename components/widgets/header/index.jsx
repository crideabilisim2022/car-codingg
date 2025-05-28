"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger ikonları için
import menuItems from "@/data/nav";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold text-red-600">
          OtoYazılım
        </Link>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.subItems && toggleMenu(item.label)}
              onMouseLeave={() => item.subItems && toggleMenu("")}
            >
              <button
                onClick={() => item.subItems && toggleMenu(item.label)}
                className="hover:text-red-500 transition duration-300"
              >
                {item.label}
              </button>
              <AnimatePresence>
                {item.subItems && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-zinc-900 text-sm mt-2 rounded-md shadow-lg overflow-hidden"
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-red-600 transition"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-zinc-900 px-4 pb-4"
          >
            {menuItems.map((item) => (
              <div key={item.label} className="mb-2">
                <Link
                  href={item.href || "#"}
                  className="block text-white py-2 border-b border-zinc-700"
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-sm text-gray-300 hover:text-red-500"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
