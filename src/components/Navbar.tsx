"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Menu,
  X,
  CalendarCheck,
  ChevronRight,
  Globe,
} from "lucide-react";
import ReservationModal from "./ReservationModal";
import { FIRM_CONFIG } from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const pathname = usePathname();

  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/tentang-kami" },
    { name: t.nav.services, href: "/layanan" },
    { name: t.nav.attorneys, href: "/tim-pengacara" },
    { name: t.nav.contact, href: "/kontak" },
  ];

  // Efek scroll & penutup otomatis saat navigasi berpindah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Kunci scroll body saat menu ponsel terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Tutup menu saat menekan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* 1. BACKDROP OVERLAY KHUSUS MENU PONSEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* 2. WRAPPER PULAU NAVIGASI MELAYANG */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none pt-2 sm:pt-3 px-2.5 sm:px-4 md:px-6 lg:px-8">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-7xl mx-auto rounded-sm border pointer-events-auto transition-all duration-300 relative shadow-2xl ${
            isScrolled
              ? "bg-[#121316]/95 border-[#C5A880]/40 backdrop-blur-xl py-2 px-3 sm:px-5 md:px-6 shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
              : "bg-[#121316]/90 border-[#C5A880]/25 backdrop-blur-lg py-2.5 sm:py-3 px-3.5 sm:px-6 md:px-7 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Ornamen Sudut Emas Presisi */}
          <span className="absolute top-0 left-0 w-2 h-2 sm:w-2.5 sm:h-2.5 border-t-2 border-l-2 border-[#C5A880] pointer-events-none" />
          <span className="absolute top-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 border-t-2 border-r-2 border-[#C5A880] pointer-events-none" />
          <span className="absolute bottom-0 left-0 w-2 h-2 sm:w-2.5 sm:h-2.5 border-b-2 border-l-2 border-[#C5A880] pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 border-b-2 border-r-2 border-[#C5A880] pointer-events-none" />

          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
            {/* BRAND LOGO & MONOGRAM */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-hidden"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-sm bg-[#16181D] border border-[#C5A880] p-1 flex items-center justify-center text-[#C5A880] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#F3E5AB] group-hover:shadow-[0_0_12px_rgba(197,168,128,0.35)] relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A880]/15 via-transparent to-transparent pointer-events-none" />
                <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 stroke-[2.2]" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-serif tracking-[0.16em] sm:tracking-[0.2em] text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors leading-none truncate">
                  {FIRM_CONFIG.name}
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#C5A880] font-medium mt-1 truncate hidden min-[360px]:block">
                  {t.nav.tagline}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 xl:px-4 py-2 text-[11px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium transition-all duration-200 rounded-xs group ${
                      isActive
                        ? "text-[#C5A880] font-bold"
                        : "text-[#D1D5DB] hover:text-[#C5A880]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#C5A880]/60 transition-all duration-200 group-hover:w-1/2" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* DESKTOP UTILITIES (BILINGUAL TOGGLE & CTA) */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
              {/* Language Switcher */}
              <div className="flex items-center bg-[#16181D] border border-[#C5A880]/30 rounded-xs p-0.5 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setLanguage("ID")}
                  className={`px-2.5 py-1 rounded-xs transition-all duration-150 cursor-pointer ${
                    language === "ID"
                      ? "bg-[#C5A880] text-[#121316] font-extrabold shadow-xs"
                      : "text-[#9CA3AF] hover:text-white"
                  }`}
                  aria-label="Bahasa Indonesia"
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`px-2.5 py-1 rounded-xs transition-all duration-150 cursor-pointer ${
                    language === "EN"
                      ? "bg-[#C5A880] text-[#121316] font-extrabold shadow-xs"
                      : "text-[#9CA3AF] hover:text-white"
                  }`}
                  aria-label="English Language"
                >
                  EN
                </button>
              </div>

              {/* Main CTA */}
              <button
                type="button"
                onClick={() => setReservationModalOpen(true)}
                className="group relative px-4 xl:px-5 py-2.5 bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B87333] hover:brightness-110 text-[#121316] font-bold text-[11px] xl:text-xs uppercase tracking-[0.14em] rounded-xs transition-all shadow-[0_4px_16px_rgba(197,168,128,0.25)] flex items-center gap-2 cursor-pointer border border-[#E8CBB3]/40 active:scale-[0.98]"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-[#121316] transition-transform duration-200 group-hover:scale-110" />
                <span>{t.nav.reservation}</span>
              </button>
            </div>

            {/* MOBILE CONTROLS (SWITCHER + HAMBURGER TOGGLE) */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              {/* Language Toggle Mobile */}
              <div className="flex items-center bg-[#16181D] border border-[#C5A880]/30 rounded-xs p-0.5 text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setLanguage("ID")}
                  className={`px-2 py-1 rounded-xs transition-colors ${
                    language === "ID"
                      ? "bg-[#C5A880] text-[#121316]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`px-2 py-1 rounded-xs transition-colors ${
                    language === "EN"
                      ? "bg-[#C5A880] text-[#121316]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 flex items-center justify-center text-white hover:text-[#C5A880] bg-[#16181D] border border-[#C5A880]/30 rounded-xs transition-colors cursor-pointer active:scale-95"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-4.5 h-4.5 text-[#C5A880]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-4.5 h-4.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* 3. MOBILE ANIMATED ACCORDION DRAWER */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-2.5 pt-3 border-t border-[#2A2E37] space-y-1 pb-1">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ x: -12, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors active:bg-[#1B1D22] ${
                            isActive
                              ? "bg-[#16181D] text-[#C5A880] border-l-2 border-[#C5A880]"
                              : "text-[#D1D5DB] hover:bg-[#16181D]/60 hover:text-white"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]/60" />
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.22, duration: 0.2 }}
                    className="pt-2.5 mt-2 border-t border-[#2A2E37]"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setReservationModalOpen(true);
                      }}
                      className="w-full py-3 bg-gradient-to-r from-[#C5A880] to-[#B87333] hover:brightness-105 text-[#121316] font-bold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center gap-2 shadow-md cursor-pointer border border-[#C5A880] active:scale-[0.99]"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>{t.nav.reservation}</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      {/* 4. MODAL RESERVASI */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </>
  );
}