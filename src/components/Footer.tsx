"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  ChevronUp,
  Lock,
  BadgeCheck,
  ShieldAlert,
} from "lucide-react";
import { FIRM_CONFIG, PRACTICE_AREAS } from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0A0B0E] text-[#D1D5DB] border-t-2 border-[#C5A880] pt-10 pb-6 selection:bg-[#C5A880] selection:text-[#121316] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* KISI UTAMA TATA LETAK RINGKAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#2A2E37]">
          
          {/* KOLOM 1: IDENTITAS & KREDENSIAL (4 KOLOM) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-[#16181D] border border-[#C5A880] flex items-center justify-center text-[#C5A880] shrink-0">
                <Scale className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.16em] text-base font-bold text-white group-hover:text-[#C5A880] transition-colors leading-none">
                  {FIRM_CONFIG.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A880] font-medium mt-1">
                  {t.nav.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
              {t.footer.desc}
            </p>

            {/* Badges Ringkas */}
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-[#C5A880]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#121316] border border-[#C5A880]/30 rounded-xs">
                <BadgeCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>PERADI Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#121316] border border-[#C5A880]/30 rounded-xs text-[#D1D5DB]">
                <Lock className="w-3 h-3 text-[#C5A880]" />
                <span>UU No. 18/2003</span>
              </span>
            </div>
          </div>

          {/* KOLOM 2: BIDANG PRAKTIK UTAMA (3 KOLOM) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-white border-l-2 border-[#C5A880] pl-2.5">
              {t.footer.colPractices}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
              {PRACTICE_AREAS.slice(0, 4).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/layanan#${area.id}`}
                    className="hover:text-[#C5A880] transition-colors line-clamp-1"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: NAVIGASI CEPAT (2 KOLOM) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-white border-l-2 border-[#C5A880] pl-2.5">
              {t.footer.colQuick}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
              <li>
                <Link href="/" className="hover:text-[#C5A880] transition-colors block">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-[#C5A880] transition-colors block">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-[#C5A880] transition-colors block">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/tim-pengacara" className="hover:text-[#C5A880] transition-colors block">
                  {t.nav.attorneys}
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#C5A880] transition-colors block">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: KONTAK & HOTLINE INTEGRASI (3 KOLOM) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-white border-l-2 border-[#C5A880] pl-2.5">
              {t.footer.colContact}
            </h4>
            
            <div className="space-y-2 text-xs text-[#9CA3AF]">
              <div className="flex items-start gap-2 text-[#D1D5DB]">
                <Building2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="line-clamp-2">{FIRM_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span className="text-white font-medium">{FIRM_CONFIG.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{FIRM_CONFIG.email}</span>
              </div>

              {/* Tombol Hotline Darurat Terpadu */}
              <a
                href={`https://wa.me/${FIRM_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "*HOTLINE DARURAT 24 JAM — SBL LAW FIRM*\nMohon bantuan segera:"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-[#16181D] hover:bg-[#1B1D22] text-[#C5A880] border border-[#C5A880]/40 rounded-xs text-[11px] font-semibold transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{language === "EN" ? "24/7 Urgent Legal Desk" : "Layanan Siaga 24/7"}</span>
              </a>
            </div>
          </div>

        </div>

        {/* STATUTORY LEGAL DISCLAIMER RINGKAS */}
        <div className="py-4 border-b border-[#2A2E37] text-[10px] text-[#717682] leading-relaxed flex items-start gap-2">
          <Scale className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#C5A880]">LEGAL DISCLAIMER: </strong>
            {t.footer.disclaimerBody}
          </p>
        </div>

        {/* BARIS COPYRIGHT & TOMBOL KE ATAS */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B7280] gap-3">
          <div className="text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} {FIRM_CONFIG.name}. {t.footer.copyright}
            </span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span className="text-[#C5A880]">
              {t.footer.statuteCompliance}
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#121316] hover:bg-[#1B1D22] text-[#C5A880] border border-[#C5A880]/30 rounded-xs text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>{language === "EN" ? "Top" : "Ke Atas"}</span>
            <ChevronUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}