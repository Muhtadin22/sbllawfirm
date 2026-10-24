"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  Lock,
  Target,
  Clock,
  ChevronRight,
  CalendarCheck,
  BadgeCheck,
  Building2,
  Briefcase,
  FileCheck2,
  Landmark,
  Sparkles,
} from "lucide-react";
import ReservationModal from "@/components/ReservationModal";
import {
  FIRM_CONFIG,
  CORE_VALUES,
  WORKFLOW_STEPS,
  CoreValueItem,
  WorkflowStepItem,
} from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

// Konfigurasi Animasi dengan Tipe Variants Eksplisit Bebas Error TS2322
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);

  // Mengambil Data Kamus Terjemahan Global & State Bahasa Aktif
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#FFFFFF] text-[#1E232A] min-h-screen selection:bg-[#C5A880] selection:text-[#121316]">
      {/* =========================================================================
          1. LUXURY PAGE BANNER — OBSIDIAN BLACK & WARM GOLD ARCHITECTURAL OVERLAY
      ========================================================================= */}
      <section className="relative bg-[#121316] text-white overflow-hidden py-24 sm:py-32 border-b-2 border-[#C5A880]">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#121316]/95 to-[#121316]/75 pointer-events-none" />
        <div className="absolute top-1/4 right-8 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-4"
          >
            {/* Navigasi Breadcrumbs */}
            <motion.nav
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B1D22] border border-[#C5A880]/50 rounded-sm text-xs text-[#C5A880] font-semibold uppercase tracking-widest"
            >
              <Landmark className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <span className="text-[#6B7280]">/</span>
              <span className="text-white">{t.aboutPage.breadcrumb}</span>
            </motion.nav>

            {/* Judul Halaman Otoritatif */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            >
              {t.aboutPage.heroTitleStart}
              <span className="text-[#C5A880] italic font-normal block sm:inline">
                {t.aboutPage.heroTitleHighlight}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal max-w-2xl pt-2"
            >
              {t.aboutPage.heroDesc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. SEJARAH, FILOSOFI PENDIRIAN, & JAMINAN KERAHASIAAN JABATAN
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Narasi Komitmen & Sejarah Firma */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-[#FAF9F6] text-[#121316] text-xs font-bold uppercase tracking-widest rounded-sm border border-[#C5A880]">
                {t.aboutPage.historyBadge}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] leading-tight">
                {t.aboutPage.historyHeading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#1E232A]/85 leading-relaxed font-normal">
                <p>{t.aboutPage.historyP1}</p>
                <p>{t.aboutPage.historyP2}</p>
                <p>{t.aboutPage.historyP3}</p>
              </div>

              {/* Statistik Pengabdian & Kepatuhan */}
              <div className="pt-4 flex flex-wrap items-center gap-8 border-t border-[#E5E7EB]">
                <div className="border-l-2 border-[#C5A880] pl-4">
                  <span className="font-serif text-2xl font-bold text-[#121316] block">
                    15+
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    {t.aboutPage.stat1}
                  </span>
                </div>
                <div className="border-l-2 border-[#C5A880] pl-4">
                  <span className="font-serif text-2xl font-bold text-[#121316] block">
                    100%
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    {t.aboutPage.stat2}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Kotak Jaminan Etika & Kerahasiaan Berbingkai Emas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#121316] p-8 sm:p-10 text-white rounded-sm border-2 border-[#C5A880] shadow-2xl space-y-6 relative overflow-hidden">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A880] z-20 pointer-events-none" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A880] z-20 pointer-events-none" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A880] z-20 pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A880] z-20 pointer-events-none" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#1B1D22] border border-[#C5A880] flex items-center justify-center text-[#C5A880] shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {t.aboutPage.confTitle}
                    </h3>
                    <p className="text-[11px] text-[#C5A880] tracking-wide font-mono">
                      {t.aboutPage.confStatute}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#D1D5DB] leading-relaxed font-normal">
                  {t.aboutPage.confDesc}
                </p>

                <div className="space-y-3.5 pt-3 text-xs text-[#FAF9F6] border-t border-[#2A2E37]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{t.aboutPage.confP1}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{t.aboutPage.confP2}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{t.aboutPage.confP3}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VISI & MISI STRATEGIS FIRMA
      ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {t.aboutPage.visionBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {t.aboutPage.visionHeading}
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Kartu Visi Institusional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 sm:p-10 rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#121316] text-[#C5A880] flex items-center justify-center mb-6 border border-[#C5A880]/50 shadow-sm">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A7B3E] block mb-2">
                  {t.aboutPage.visionTag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#121316] mb-4">
                  {t.aboutPage.visionTitle}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed font-normal">
                  {t.aboutPage.visionDesc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E7EB] text-xs text-[#6B7280]">
                {language === "EN"
                  ? "Pillars: Judicial Certainty • Commercial Protection • Officium Nobile"
                  : "Fokus: Kepastian Hukum • Stabilitas Bisnis • Kehormatan Profesi"}
              </div>
            </motion.div>

            {/* Kartu Misi Advokasi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white p-8 sm:p-10 rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#121316] text-[#C5A880] flex items-center justify-center mb-6 border border-[#C5A880]/50 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A7B3E] block mb-2">
                  {t.aboutPage.missionTag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#121316] mb-4">
                  {t.aboutPage.missionTitle}
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#4B5563]">
                  <li className="flex items-start gap-2.5">
                    <span className="font-bold text-[#C5A880]">1.</span>
                    <span>{t.aboutPage.mission1}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-bold text-[#C5A880]">2.</span>
                    <span>{t.aboutPage.mission2}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-bold text-[#C5A880]">3.</span>
                    <span>{t.aboutPage.mission3}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E5E7EB] text-xs text-[#6B7280]">
                {language === "EN"
                  ? "Standard: Substantive Verification • Procedural Precision • Regular Reporting"
                  : "Standar: Ketepatan Formil • Uji Materiil • Pelaporan Transparan"}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EMPAT PILAR NILAI-NILAI UTAMA (CORE VALUES)
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {t.aboutPage.valuesBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {t.aboutPage.valuesHeading}
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val: CoreValueItem, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#FAF9F6] rounded-sm border-t-4 border-[#C5A880] border-x border-b border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 bg-[#121316] text-[#C5A880] rounded-sm flex items-center justify-center mb-5 border border-[#C5A880]">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Target className="w-5 h-5" />}
                  {idx === 2 && <FileCheck2 className="w-5 h-5" />}
                  {idx === 3 && <Clock className="w-5 h-5" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#121316] mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed font-normal">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. METODOLOGI ALUR PENANGANAN PERKARA 4 TAHAP
      ========================================================================= */}
      <section className="py-24 bg-[#121316] text-white border-y border-[#2A2E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
              {t.aboutPage.workflowBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              {t.aboutPage.workflowHeading}
            </h2>
            <p className="text-xs text-[#9CA3AF] mt-2 max-w-xl mx-auto font-normal">
              {t.aboutPage.workflowDesc}
            </p>
            <div className="w-16 h-0.5 bg-[#C5A880]/60 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((wf: WorkflowStepItem, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-[#1B1D22] rounded-sm border-2 border-[#2A2E37] hover:border-[#C5A880] transition-colors relative group shadow-sm"
              >
                <span className="font-serif text-4xl font-bold text-[#C5A880]/40 block mb-2 group-hover:text-[#C5A880] transition-colors">
                  {wf.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {wf.title}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed font-normal">
                  {wf.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LEGALITAS, AKREDITASI, & AFILIASI RESMI (KREDENSIAL PROFESI)
      ========================================================================= */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {t.aboutPage.affiliationsBadge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121316] mt-1">
              {t.aboutPage.affiliationsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-[#FAF9F6] rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#C5A880] mx-auto mb-3" />
              <h4 className="font-serif text-base font-bold text-[#121316]">PERADI</h4>
              <p className="text-[11px] text-[#6B7280] mt-1">
                Perhimpunan Advokat Indonesia
              </p>
            </div>
            <div className="p-6 bg-[#FAF9F6] rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] transition-colors">
              <BadgeCheck className="w-8 h-8 text-[#C5A880] mx-auto mb-3" />
              <h4 className="font-serif text-base font-bold text-[#121316]">HKHPM</h4>
              <p className="text-[11px] text-[#6B7280] mt-1">
                Himpunan Konsultan Hukum Pasar Modal
              </p>
            </div>
            <div className="p-6 bg-[#FAF9F6] rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] transition-colors">
              <Award className="w-8 h-8 text-[#C5A880] mx-auto mb-3" />
              <h4 className="font-serif text-base font-bold text-[#121316]">AKPI</h4>
              <p className="text-[11px] text-[#6B7280] mt-1">
                Asosiasi Kurator & Pengurus Indonesia
              </p>
            </div>
            <div className="p-6 bg-[#FAF9F6] rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] transition-colors">
              <FileText className="w-8 h-8 text-[#C5A880] mx-auto mb-3" />
              <h4 className="font-serif text-base font-bold text-[#121316]">ASAHI</h4>
              <p className="text-[11px] text-[#6B7280] mt-1">
                Asosiasi Auditor Hukum Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PRE-FOOTER CALL TO ACTION (KONSULTASI RESMI)
      ========================================================================= */}
      <section className="py-20 bg-[#FAF9F6] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121316] p-10 sm:p-14 rounded-sm border-2 border-[#C5A880] text-center max-w-4xl mx-auto shadow-2xl text-white relative">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.ctaBanner.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              {t.ctaBanner.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setReservationOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C5A880]"
              >
                <CalendarCheck className="w-4 h-4 text-[#121316]" />
                <span>{t.ctaBanner.btnReserve}</span>
              </button>
              <Link
                href="/kontak"
                className="w-full sm:w-auto px-8 py-4 bg-[#1B1D22] hover:bg-[#2A2E37] border border-[#C5A880] text-[#C5A880] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors text-center"
              >
                {t.ctaBanner.btnOffice}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog Reservasi Pertemuan WhatsApp */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}