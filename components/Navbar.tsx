"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigation } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = navigation.map((item) => ({
    ...item,
    isActive: pathname === item.href,
  }));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full group-hover:bg-primary/50 transition-all duration-300" />
                <div className="relative p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-white/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <span className="text-lg font-semibold text-foreground tracking-tight">
                Arman<span className="text-primary">dev</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group"
                >
                  <span className={item.isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
                    {item.name}
                  </span>
                  {item.isActive && (
                    <div className="hidden md:block absolute inset-0 bg-primary/10 rounded-lg -z-10" />
                  )}
                  {!item.isActive && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ArmandLord"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              {/* Mobile menu button */}
                <button 
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors md:hidden"
                  aria-label="Abrir menú"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay - fuera del header para que no se recorte */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50"
          >
            <nav className="flex flex-col p-6 gap-2 pt-20">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      item.isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
