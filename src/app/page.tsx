"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  ArrowRight,
  Target,
  FileCheck2,
  Clock,
  Briefcase,
  ChevronRight,
  Award,
  CheckCircle2,
  CalendarCheck,
  Gavel,
  Lock,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Check,
  BookOpen,
  Sparkles,
  Landmark,
  FileText,
  BadgeCheck,
  ShieldAlert,
  Users,
  FileSpreadsheet,
} from "lucide-react";
import ReservationModal from "@/components/ReservationModal";
import {
  FIRM_CONFIG,
  PRACTICE_AREAS,
  ATTORNEYS,
  CORE_VALUES,
  WORKFLOW_STEPS,
  CASE_STUDIES,
  LEGAL_ALERTS,
  Attorney,
  PracticeArea,
  MetricItem,
  CoreValueItem,
  WorkflowStepItem,
  CaseStudy,
  LegalAlert,
} from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

// Konfigurasi Animasi Halus & Bebas Error TypeScript
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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

export default function HomePage() {
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const managingPartner: Attorney = ATTORNEYS[0];

  // Integrasi Konteks Bahasa Global
  const { language, t } = useLanguage();

  // Helper untuk Membedakan Ikon Bidang Praktik agar Tidak Monoton
  const renderPracticeIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert {...iconProps} />;
      case "Scale":
        return <Scale {...iconProps} />;
      case "Briefcase":
        return <Briefcase {...iconProps} />;
      case "Users":
        return <Users {...iconProps} />;
      case "Building2":
        return <Building2 {...iconProps} />;
      case "FileSpreadsheet":
        return <FileSpreadsheet {...iconProps} />;
      default:
        return <Scale {...iconProps} />;
    }
  };

  // Pertanyaan Umum Terkait Standar Etika & Prosedur
  const ethicsFaqs = [
    {
      q:
        language === "EN"
          ? "How does the firm guarantee absolute confidentiality of case documents and corporate secrets?"
          : "Bagaimana firma menjamin kerahasiaan dokumen perkara dan rahasia korporasi klien?",
      a:
        language === "EN"
          ? "Under Article 19 of the Indonesian Advocates Act (Law No. 18/2003) and the Indonesian Advocates Code of Ethics, all communications, evidence files, and case facts are strictly safeguarded by Advocate Immunity Rights and the obligation of professional secrecy, applicable perpetually without limitation."
          : "Berdasarkan ketentuan Pasal 19 Undang-Undang Nomor 18 Tahun 2003 tentang Advokat serta Kode Etik Advokat Indonesia, seluruh komunikasi, berkas bukti, dan rahasia korporasi klien dilindungi secara mutlak oleh Hak Imunitas Advokat serta kewajiban memegang rahasia jabatan yang berlaku selamanya.",
    },
    {
      q:
        language === "EN"
          ? "Can SBL Law Firm guarantee a favorable outcome or victory in legal proceedings?"
          : "Apakah SBL Law Firm dapat menjamin kemenangan perkara di hadapan pengadilan?",
      a:
        language === "EN"
          ? "In accordance with Article 4 letter c of the Indonesian Advocates Code of Ethics, advocates are strictly prohibited from promising case victory. Our steadfast commitment is to deploy rigorous judicial analysis, meticulous factual auditing, and proven trial procedural strategies to protect our clients' legal interests to the highest standard."
          : "Sesuai Pasal 4 huruf c Kode Etik Advokat Indonesia, seorang advokat dilarang keras menjanjikan kemenangan kepada klien. Standar komitmen kami adalah mengerahkan telaah yuridis mendalam, integritas alat bukti materiil, dan penguasaan hukum acara peradilan terbaik guna memperjuangkan hak hukum klien secara optimal.",
    },
    {
      q:
        language === "EN"
          ? "What is the fee arrangement and billing transparency policy?"
          : "Bagaimana sistem transparansi penetapan honorarium jasa hukum?",
      a:
        language === "EN"
          ? "Every component of legal remuneration is explicitly agreed upon in writing through a Legal Services Agreement (SPJH) prior to the execution of a Special Power of Attorney. Fee structures are determined proportionally based on case complexity, whether Retainer, Lump-sum per judicial tier, or Legal Due Diligence audits, with zero hidden costs."
          : "Setiap skema biaya penanganan disepakati secara terbuka dan tertuang tertulis dalam Surat Perjanjian Jasa Hukum sebelum penandatanganan Surat Kuasa Khusus. Struktur biaya ditentukan secara proporsional sesuai tingkat kerumitan perkara, baik melalui skema Retainer, Lump-sum per tingkatan peradilan, maupun Audit Uji Tuntas Hukum, tanpa ada biaya tersembunyi.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1E232A] min-h-screen selection:bg-[#C5A880] selection:text-[#121316]">
      {/* =========================================================================
          1. LUXURY HERO SECTION (GEDUNG PENCAKAR LANGIT DENGAN SLOW ZOOM ANIMATION)
      ========================================================================= */}
      <section className="relative bg-[#121316] text-white overflow-hidden min-h-[92vh] flex items-center border-b-2 border-[#C5A880]">
        {/* Latar Belakang Gambar Arsitektur */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center pointer-events-none filter brightness-75 contrast-125"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Gradien Multilayer Monolitik */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#121316]/95 to-[#121316]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-[#121316]/60 pointer-events-none" />

        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#C5A880]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-8 space-y-7"
            >
              {/* Badge Legal Authority */}
              <motion.div variants={fadeInUp} className="inline-block">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#1B1D22]/90 border border-[#C5A880]/50 rounded-full text-[#C5A880] text-xs font-semibold uppercase tracking-[0.2em] shadow-inner backdrop-blur-md">
                  <Scale className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{t.hero.badge}</span>
                </div>
              </motion.div>

              {/* Headline Utama */}
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]"
              >
                {t.hero.titleStart}
                <span className="text-[#C5A880] italic font-normal block sm:inline">
                  {t.hero.titleHighlight}
                </span>
              </motion.h1>

              {/* Paragraf Pengantar */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed font-normal max-w-2xl"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Tombol Interaksi CTA */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
              >
                <button
                  type="button"
                  onClick={() => setReservationOpen(true)}
                  className="px-8 py-4 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-[0_10px_25px_-5px_rgba(197,168,128,0.45)] flex items-center justify-center gap-2.5 hover:-translate-y-0.5 cursor-pointer border border-[#C5A880]"
                >
                  <CalendarCheck className="w-4 h-4 text-[#121316]" />
                  <span>{t.hero.ctaPrimary}</span>
                </button>

                <Link
                  href="/layanan"
                  className="px-8 py-4 border border-[#C5A880]/50 hover:border-[#C5A880] text-white hover:text-[#C5A880] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 hover:bg-[#1B1D22]/80 backdrop-blur-xs"
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Reassurance Tags Etika Profesi */}
              <motion.div
                variants={fadeInUp}
                className="pt-6 border-t border-[#2A2E37] flex flex-wrap gap-6 text-xs text-[#9CA3AF] font-medium"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>{t.hero.badge1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C5A880]" />
                  <span>{t.hero.badge2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C5A880]" />
                  <span>{t.hero.badge3}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Kotak Ringkasan Samping Floating Glass Monolitik */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.3 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="bg-[#1B1D22]/90 backdrop-blur-md p-8 rounded-sm border-2 border-[#C5A880] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-[#C5A880] transition-colors">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A880] z-20" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A880] z-20" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A880] z-20" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A880] z-20" />

                <div className="w-12 h-12 rounded-sm bg-[#121316] border border-[#C5A880] flex items-center justify-center text-[#C5A880] mb-6 shadow-inner">
                  <Gavel className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {t.hero.cardTitle}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-6 font-normal italic">
                  {t.hero.cardQuote}
                </p>
                <div className="border-t border-[#2A2E37] pt-4 flex items-center justify-between text-xs">
                  <span className="text-[#C5A880] font-bold tracking-wider uppercase text-[11px]">
                    {t.hero.cardStandard}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#121316] text-[#C5A880] border border-[#C5A880] rounded text-[10px] font-semibold tracking-widest">
                    OFFICIUM NOBILE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STAT COUNTER BAR (PENCAPAIAN YURIDIS TERUKUR)
      ========================================================================= */}
      <section className="bg-[#1B1D22] border-b-2 border-[#C5A880]/40 py-10 text-white relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FIRM_CONFIG.metrics.map((metric: MetricItem, idx: number) => {
              const labelMap: { [key: number]: string } = {
                0: t.metrics.exp,
                1: t.metrics.cases,
                2: t.metrics.rate,
                3: t.metrics.asset,
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6 border-l-2 border-[#C5A880]"
                >
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C5A880] tracking-tight block">
                    {metric.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#D1D5DB] font-medium mt-1 block">
                    {labelMap[idx] || metric.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SEKILAS TENTANG FIRMA & PENDEKATAN MULTI-DISIPLIN
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-[#FAF9F6] text-[#121316] text-xs font-bold uppercase tracking-widest rounded-sm border border-[#C5A880]">
                {t.aboutBrief.badge}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] leading-tight">
                {t.aboutBrief.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#1E232A]/85 leading-relaxed font-normal">
                <p>{t.aboutBrief.p1}</p>
                <p>{t.aboutBrief.p2}</p>
              </div>

              <div className="pt-2">
                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121316] hover:text-[#9A7B3E] transition-colors group"
                >
                  <span>{t.aboutBrief.link}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#C5A880]" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#121316] p-8 sm:p-10 text-white rounded-sm shadow-2xl border-2 border-[#C5A880] relative">
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {t.aboutBrief.cardTitle}
                </h3>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-8 font-normal">
                  {t.aboutBrief.cardDesc}
                </p>
                <div className="space-y-4 text-xs sm:text-sm text-[#FAF9F6]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{t.aboutBrief.point1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{t.aboutBrief.point2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{t.aboutBrief.point3}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FOKUS BIDANG PRAKTIK UTAMA (DIVERSIFIKASI IKON EKSKLUSIF)
      ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {t.practice.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {t.practice.heading}
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area: PracticeArea, idx: number) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-xs hover:shadow-2xl border-2 border-[#E5E7EB] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div>
                  {/* Ikon Dinamis Sesuai Bidang Hukum */}
                  <div className="w-12 h-12 bg-[#FAF9F6] rounded-sm flex items-center justify-center text-[#121316] group-hover:bg-[#121316] group-hover:text-[#C5A880] transition-colors mb-6 border border-[#C5A880]/50 shadow-xs">
                    {renderPracticeIcon(area.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B3E] block mb-1">
                    {area.category === "litigasi"
                      ? language === "EN"
                        ? "Dispute Resolution Chamber"
                        : "Kamar Penyelesaian Sengketa"
                      : language === "EN"
                        ? "Corporate Advisory Chamber"
                        : "Kamar Kepatuhan Korporasi"}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#121316] mb-3 group-hover:text-[#9A7B3E] transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-6 font-normal">
                    {area.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <Link
                    href={`/layanan#${area.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#121316] group-hover:text-[#9A7B3E] transition-colors"
                  >
                    <span>{t.practice.scope}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#C5A880]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#121316] hover:bg-[#1B1D22] text-white font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors shadow-md border border-[#C5A880]"
            >
              <Briefcase className="w-4 h-4 text-[#C5A880]" />
              <span>{t.practice.allBtn}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. METODOLOGI ALUR PENANGANAN PERKARA 4 TAHAP (STANDAR OPERASIONAL BAKU)
      ========================================================================= */}
      <section className="py-24 bg-[#121316] text-white border-b border-[#2A2E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
              {language === "EN"
                ? "Structured Operational SOP"
                : "Standar Operasional Baku"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              {language === "EN"
                ? "Four-Stage Case Handling Protocol"
                : "Alur Standar Penanganan Perkara"}
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
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
          6. REKAM JEJAK KASUS REPRESENTATIF (REPRESENTATIVE MATTERS)
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {language === "EN"
                ? "Verifiable Achievements"
                : "Pengalaman Penanganan Perkara"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {language === "EN"
                ? "Representative Matters & Case Studies"
                : "Rekam Jejak Kasus Pilihan"}
            </h2>
            <p className="text-xs text-[#6B7280] mt-2">
              {language === "EN"
                ? "*Client identities are fully anonymized to honor statutory professional confidentiality obligations."
                : "*Identitas para pihak disamarkan sepenuhnya demi mematuhi asas kerahasiaan jabatan Advokat berdasarkan Pasal 19 UU No. 18/2003."}
            </p>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs: CaseStudy, idx: number) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#FAF9F6] p-8 sm:p-10 rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] shadow-sm flex flex-col justify-between transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#121316] text-[#C5A880] rounded-sm border border-[#C5A880]">
                      {cs.practiceArea}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316]">
                    {cs.title}
                  </h3>
                  <div className="text-xs text-[#4B5563]">
                    <strong>{language === "EN" ? "Client Profile:" : "Profil Klien:"}</strong>{" "}
                    {cs.clientType}
                  </div>

                  <div className="space-y-3.5 pt-4 text-xs border-t border-[#E5E7EB]">
                    <div>
                      <span className="font-bold text-[#121316] block mb-1">
                        {language === "EN"
                          ? "Legal Challenge & Fact Background:"
                          : "Tantangan Pokok Perkara:"}
                      </span>
                      <p className="text-[#4B5563] leading-relaxed font-normal">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#121316] block mb-1">
                        {language === "EN"
                          ? "Litigation / Non-Litigation Strategy:"
                          : "Strategi Yuridis Dijalankan:"}
                      </span>
                      <p className="text-[#4B5563] leading-relaxed font-normal">{cs.strategy}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#121316] block mb-1">
                        {language === "EN" ? "Final Resolution:" : "Hasil Penyelesaian:"}
                      </span>
                      <p className="text-[#121316] leading-relaxed font-semibold">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E7EB] bg-white p-4 rounded-sm border border-[#C5A880]/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[11px] uppercase font-bold text-[#9A7B3E]">
                    {language === "EN" ? "Protected Value:" : "Dampak Perlindungan Aset:"}
                  </span>
                  <span className="text-xs font-bold text-[#121316]">
                    {cs.valueOrImpact}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EMPAT PILAR INTEGRITAS & NILAI UTAMA (CORE VALUES)
      ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {language === "EN" ? "Pillars of Trust" : "Pondasi Kepercayaan"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {language === "EN" ? "Our Core Institutional Pillars" : "Empat Pilar Integritas Kami"}
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
                className="p-8 bg-white rounded-sm border-t-4 border-[#C5A880] border-x border-b border-[#E5E7EB] shadow-xs hover:shadow-xl transition-shadow"
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
          8. SPOTLIGHT MANAGING PARTNER (DEWAN PIMPINAN FIRMA)
      ========================================================================= */}
      <section className="py-24 bg-[#1B1D22] text-white border-y-2 border-[#C5A880] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="p-2 border-2 border-[#C5A880] bg-[#121316] rounded-sm shadow-2xl relative">
                <img
                  src={managingPartner.imageUrl}
                  alt={managingPartner.name}
                  className="w-full h-96 sm:h-[450px] object-cover object-top rounded-sm"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#C5A880] text-[#121316] px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm shadow-xl hidden sm:block border border-[#121316]">
                  NIA PERADI: {managingPartner.peradiNia}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-[#121316] text-[#C5A880] text-xs font-bold uppercase tracking-widest rounded-sm border border-[#C5A880]">
                {language === "EN" ? "Firm Leadership" : "Pimpinan Kantor Hukum"}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {managingPartner.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#E8CBB3] font-semibold">
                Managing Partner • Advokat Senior PERADI
              </p>

              <blockquote className="border-l-2 border-[#C5A880] pl-5 text-base sm:text-lg italic text-[#D1D5DB] leading-relaxed font-serif">
                &quot;
                {language === "EN"
                  ? "The law is an instrument of certainty. We exist not to make unrealistic promises, but to relentlessly advocate for justice through scholarly research, ethical steadfastness, and trial courage."
                  : "Hukum adalah instrumen kepastian. Kami hadir bukan untuk menjanjikan kemenangan instan di luar nalar hukum, melainkan memperjuangkan keadilan klien dengan benteng riset terkuat, kepatuhan etika, dan keberanian di ruang sidang."}
                &quot;
              </blockquote>

              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-normal">
                {managingPartner.bio}
              </p>

              <div className="pt-2">
                <Link
                  href="/tim-pengacara"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md border border-[#C5A880]"
                >
                  <Award className="w-4 h-4 text-[#121316]" />
                  <span>
                    {language === "EN"
                      ? "View Complete Legal Team Hierarchy"
                      : "Lihat Seluruh Dewan Advokat & Tim"}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. KATALOG WAWASAN HUKUM & REGULASI (LEGAL ALERTS & CLIENT UPDATES)
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7B3E]">
                {t.alerts.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
                {t.alerts.heading}
              </h2>
              <div className="w-16 h-0.5 bg-[#C5A880] mt-4" />
            </div>
            <p className="text-xs text-[#6B7280] max-w-md leading-relaxed">
              {t.alerts.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEGAL_ALERTS.map((alert: LegalAlert) => (
              <article
                key={alert.id}
                className="bg-[#FAF9F6] border-2 border-[#E5E7EB] hover:border-[#C5A880] p-6 rounded-sm shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] text-[#6B7280]">
                    <span className="px-2.5 py-0.5 bg-[#121316] text-[#C5A880] font-bold uppercase tracking-wider rounded-sm border border-[#C5A880]/40">
                      {alert.tag}
                    </span>
                    <span>{alert.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#121316] group-hover:text-[#9A7B3E] transition-colors leading-snug mb-3">
                    {alert.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-6 font-normal">
                    {alert.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
                  <span className="text-[#121316] font-semibold">{alert.author}</span>
                  <span className="text-[#6B7280]">{alert.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. TANYA JAWAB STANDAR ETIKA & PROSEDUR KONSULTASI (FAQ)
      ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {language === "EN" ? "Professional Transparency" : "Transparansi Profesi"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {language === "EN"
                ? "Frequently Asked Questions on Ethics & Fees"
                : "Pertanyaan Seputar Layanan & Etika Advokat"}
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {ethicsFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-[#121316] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#121316] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#9A7B3E]" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#1E232A]/85 leading-relaxed border-t border-[#E5E7EB] bg-white overflow-hidden"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. PRE-FOOTER CALL TO ACTION (KONSULTASI HUKUM RESMI)
      ========================================================================= */}
      <section className="py-20 bg-[#FFFFFF] border-t-2 border-[#C5A880]">
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