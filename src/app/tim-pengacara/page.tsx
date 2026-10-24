"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  CalendarCheck,
  Scale,
  GraduationCap,
  ArrowUpRight,
  Gavel,
  BookOpen,
  Crown,
  Landmark,
  FileCheck2,
  CheckCircle2,
  Briefcase,
  Award,
  Sparkles,
  Users,
} from "lucide-react";
import LawyerModal from "@/components/LawyerModal";
import ReservationModal from "@/components/ReservationModal";
import { ATTORNEYS, Attorney } from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

// Konfigurasi Animasi Halus & Bebas Error TypeScript TS2322
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

export default function AttorneysPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<Attorney | null>(null);
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);
  const [targetLawyerName, setTargetLawyerName] = useState<string>("");
  const [activeTab, setActiveTab] = useState<
    "all" | "managing" | "partners" | "associates" | "paralegals"
  >("all");

  // Konteks Bahasa Global (ID / EN)
  const { language, t } = useLanguage();

  // Terjemahan Dinamis Seluruh Profil Pengacara & Paralegal (ID & EN)
  const translatedAttorneys: Attorney[] = ATTORNEYS.map((attorney) => {
    if (language === "EN") {
      switch (attorney.id) {
        case "surya-bintang-laksana":
          return {
            ...attorney,
            role: "Managing Partner",
            degree:
              "Doctor of Laws (S3 - UNPAD), Master of Laws (S2 - UGM), Bachelor of Laws (S1 - UI)",
            peradiNia: attorney.peradiNia,
            specialization: [
              "Commercial Litigation",
              "Corporate White-Collar Crime",
              "Bankruptcy & PKPU",
            ],
            education: [
              "Doctor of Laws (S3) — Universitas Padjadjaran (Cum Laude)",
              "Master of Business Law (S2) — Universitas Gadjah Mada",
              "Bachelor of Laws (S1) — Universitas Indonesia",
              "Certified Legal Auditor (C.L.A.) — Indonesian Legal Auditors Association",
            ],
            bio: "With over 18 years of distinguished experience, Dr. Surya steers high-stakes commercial disputes before District Courts, Commercial Courts, through Cassation at the Supreme Court. Firmly grounded in procedural trial mastery and uncompromising judicial integrity.",
            casesHandled: [
              "Lead Counsel in Cross-Border Mining Corporate Equity Dispute",
              "Counsel for Syndicated Banking Debt Restructuring of Rp 185 Billion",
              "Special Advisor for Strategic M&A in Finance & Infrastructure Sectors",
            ],
          };
        case "rahmat-hidayat":
          return {
            ...attorney,
            role: "Senior Partner",
            degree:
              "Master of Laws (LL.M. in Corporate Law - Leiden University), Bachelor of Laws (S1 - UI)",
            peradiNia: attorney.peradiNia,
            specialization: [
              "Corporate Law & M&A",
              "Banking & Finance Law",
              "Capital Markets",
            ],
            education: [
              "Master of Laws (LL.M.) — Leiden University, The Netherlands",
              "Bachelor of Laws (S.H.) — Universitas Indonesia",
              "Registered Capital Market Legal Consultant (HKHPM / OJK)",
            ],
            bio: "Specialist in multinational M&A transactions, capital markets regulatory compliance, and foreign direct investment (FDI). Advising corporations through complex corporate restructuring under international governance standards.",
            casesHandled: [
              "Legal Due Diligence on Majority Share Acquisition of Private National Bank",
              "EPC Contract Architecture for Independent Power Producer (IPP) Valued at Rp 800 Billion",
            ],
          };
        case "clara-stephanie-putri":
          return {
            ...attorney,
            role: "Partner",
            degree:
              "Master of Notarial Law (M.Kn. - Undip), Bachelor of Laws (S1 - Unair)",
            peradiNia: attorney.peradiNia,
            specialization: [
              "Agrarian & Real Estate",
              "Industrial Relations",
              "Commercial Contracts",
            ],
            education: [
              "Master of Notarial Law (M.Kn.) — Universitas Diponegoro",
              "Bachelor of Laws (S.H.) — Universitas Airlangga",
            ],
            bio: "Focuses on industrial real property asset protection, agrarian law compliance audits, and strategic industrial relations dispute mediation.",
            casesHandled: [
              "Legal Advisory for 120-Hectare Integrated Industrial Estate Land Acquisition",
              "Bipartite Resolution of Mass Redundancy in Textile Manufacturing Industry",
            ],
          };
        case "prof-hartono-kartohadiprodjo":
          return {
            ...attorney,
            role: "Of Counsel",
            degree:
              "Professor of Civil Procedural Law & Commercial Arbitration",
            peradiNia: "Senior Legal Advisor (Academician)",
            specialization: [
              "Expert Legal Opinion",
              "BANI Commercial Arbitration",
              "Judicial Case Examination",
            ],
            education: [
              "Doctor of Laws — Universitas Indonesia",
              "Master of Science — Universitas Gadjah Mada",
              "Bachelor of Laws — Universitas Diponegoro",
            ],
            bio: "Renowned legal scholar frequently testifying as an expert witness before the Constitutional Court and Indonesian National Board of Arbitration (BANI). Providing independent doctrinal guidance on strategic disputes.",
            casesHandled: [
              "Expert Witness in International Commercial Arbitration within Energy Sector",
              "Lead Expert Author on Judicial Review Petitions against Commercial Regulations",
            ],
          };
        case "dimas-anggoro":
          return {
            ...attorney,
            role: "Senior Associate",
            degree:
              "Bachelor of Laws (LL.B. Criminal Law - Universitas Brawijaya)",
            peradiNia: attorney.peradiNia,
            specialization: [
              "Criminal Litigation",
              "Administrative Court (PTUN)",
              "Special Criminal Inquiries",
            ],
            education: [
              "Bachelor of Laws (S.H.) — Universitas Brawijaya Malang",
            ],
            bio: "Tenacious advocate with extensive operational courtroom experience defending clients before the National Police, Prosecution Service, and District Courts in general and corporate corruption matters.",
            casesHandled: [
              "Defense Counsel for Key Witness & Suspect in Trade Secret Dispute",
              "Pre-Trial Habeas Corpus Motion against Alleged Administrative Misfeasance",
            ],
          };
        case "nadia-safitri":
          return {
            ...attorney,
            role: "Associate",
            degree:
              "Bachelor of Laws (LL.B. Business Law - Universitas Sebelas Maret)",
            peradiNia: attorney.peradiNia,
            specialization: [
              "Contract Drafting",
              "Legal Due Diligence",
              "IP & Privacy Compliance",
            ],
            education: [
              "Bachelor of Laws (S.H.) — Universitas Sebelas Maret (UNS) Surakarta",
            ],
            bio: "Focuses on Legal Opinion drafting, regulatory analysis under the Personal Data Protection Act (UU PDP), as well as trademark and copyright portfolio registration.",
            casesHandled: [
              "Data Protection & Privacy Compliance Audit for FinTech Enterprise",
              "Drafting Trademark & Commercial Copyright Licensing Master Agreements",
            ],
          };
        case "sabilul-muhtadin":
          return {
            ...attorney,
            role: "Senior Paralegal",
            degree:
              "Bachelor of Laws (Criminal Law & Commercial Civil Law Specialization)",
            peradiNia: "Paralegal Division & Case Operations Desk",
            specialization: [
              "Supreme Court Decision Anatomy",
              "Forensic Evidence Audit",
              "Judicial Precedent Research",
            ],
            education: [
              "Bachelor of Laws (S.H.) — Department of Legal Studies",
              "Special Education for the Advocate Profession (PKPA)",
              "Certification in Judicial Docket Management & Precedent Research",
            ],
            bio: "Supervises case file operations, Supreme Court precedent indexing, evidentiary timeline verification, and preliminary legal drafting under the direct guidance of Executive Partners.",
            casesHandled: [
              "Evidentiary Document & Timeline Examination in Commercial Default Litigation",
              "Supreme Court Cassation Precedent Research on Corporate Criminal Liability",
              "Due Diligence Dossier Compilation on Industrial Land Title Legality",
            ],
          };
        case "faisal-azhari":
          return {
            ...attorney,
            role: "Paralegal & Legal Researcher",
            degree:
              "Bachelor of Laws (Corporate Law & Commercial Contracts Focus)",
            peradiNia: "Legal Research & Institutional Relations Desk",
            specialization: [
              "OSS-RBA Regulatory Research",
              "Judicial Archiving",
              "Statutory Compliance Monitoring",
            ],
            education: [
              "Bachelor of Laws (S.H.) — Faculty of Law",
              "Advanced Training in Sectoral Regulatory Tracking & Statutory Databases",
            ],
            bio: "Supports corporate practice chambers in ministerial regulatory tracking, OSS-RBA licensing compliance, court docket monitoring, and technical inter-agency liaisons.",
            casesHandled: [
              "Bonded Zone Regulatory & Industrial Licensing Compliance Monitoring",
              "Evidentiary Compilation for Industrial Relations Dispute at Ministry of Manpower",
            ],
          };
        default:
          return attorney;
      }
    }
    return attorney;
  });

  // Pemilahan Hirarki Berdasarkan Role
  const managingPartner = translatedAttorneys.find(
    (a: Attorney) => a.role === "Managing Partner"
  );
  const seniorAndPracticePartners = translatedAttorneys.filter(
    (a: Attorney) => a.role === "Senior Partner" || a.role === "Partner"
  );
  const ofCounselList = translatedAttorneys.filter(
    (a: Attorney) => a.role === "Of Counsel"
  );
  const associates = translatedAttorneys.filter(
    (a: Attorney) => a.role === "Senior Associate" || a.role === "Associate"
  );
  const paralegals = translatedAttorneys.filter(
    (a: Attorney) =>
      a.role === "Senior Paralegal" || a.role === "Paralegal & Legal Researcher"
  );

  const handleBookWithLawyer = (lawyerName: string) => {
    setTargetLawyerName(lawyerName);
    setReservationOpen(true);
  };

  // Komponen Kartu Profil Individu dengan Bingkai Emas Eksklusif
  const renderGoldFramedCard = (lawyer: Attorney, tierBadge: string) => {
    const isParalegal =
      lawyer.role === "Senior Paralegal" ||
      lawyer.role === "Paralegal & Legal Researcher";

    return (
      <motion.div
        key={lawyer.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#FFFFFF] rounded-sm border-2 border-[#C5A880] shadow-[0_12px_35px_-12px_rgba(18,19,22,0.15)] hover:shadow-[0_20px_45px_-10px_rgba(197,168,128,0.4)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
      >
        {/* Ornamen Sudut Emas Presisi */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A880] z-20 pointer-events-none" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A880] z-20 pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A880] z-20 pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A880] z-20 pointer-events-none" />

        <div>
          {/* Plakat Header Jabatan Berbingkai Emas */}
          <div className="bg-[#121316] px-5 py-3 border-b-2 border-[#C5A880] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C5A880]">
                {lawyer.role}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8CBB3]/80 border border-[#C5A880]/40 px-2 py-0.5 rounded-sm">
              {tierBadge}
            </span>
          </div>

          {/* Bingkai Foto Portrait dengan Inner Gold Border */}
          <div className="p-4 pb-0 bg-[#FAF9F6]">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-[#121316] border-2 border-[#C5A880]/80 rounded-sm shadow-inner">
              <img
                src={lawyer.imageUrl}
                alt={lawyer.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-transparent to-transparent opacity-75" />

              {/* Lencana Lisensi / Divisi di Atas Foto */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#121316]/95 border border-[#C5A880] px-3 py-2 rounded-sm backdrop-blur-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="text-[11px] text-[#FAF9F6] font-medium truncate">
                  {isParalegal
                    ? lawyer.peradiNia
                    : `NIA PERADI: ${lawyer.peradiNia}`}
                </span>
              </div>
            </div>
          </div>

          {/* Informasi Akademik & Spesialisasi */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#121316] group-hover:text-[#9A7B3E] transition-colors leading-snug">
                {lawyer.name}
              </h3>
              <p className="text-xs text-[#4B5563] mt-1.5 flex items-start gap-1.5 leading-relaxed font-normal">
                <GraduationCap className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{lawyer.degree}</span>
              </p>
            </div>

            {/* Kutipan Biografi Singkat */}
            <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 border-l-2 border-[#C5A880] pl-3 italic bg-[#FAF9F6] py-1.5 font-normal">
              {lawyer.bio}
            </p>

            {/* Tag Spesialisasi dengan Border Emas Halus */}
            <div className="pt-3 border-t border-[#C5A880]/40">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#9A7B3E] block mb-2">
                {t.attorneysPage.tier1SpecLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {lawyer.specialization.map((spec: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#FAF9F6] text-[#121316] text-[11px] rounded-sm border border-[#C5A880]/60 font-semibold"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Kartu: Dual Action Button */}
        <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => setSelectedLawyer(lawyer)}
            className="py-2.5 px-3 bg-[#121316] hover:bg-[#1B1D22] text-[#C5A880] text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all border border-[#C5A880] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>{t.attorneysPage.cardDetailBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleBookWithLawyer(lawyer.name)}
            className="py-2.5 px-3 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all border border-[#C5A880] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>{t.attorneysPage.cardConsultBtn}</span>
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#FAF9F6] text-[#1E232A] min-h-screen selection:bg-[#C5A880] selection:text-[#121316]">
      {/* =========================================================================
          1. HERO BANNER — AUTHORITATIVE OBSIDIAN & GOLD OVERLAY
      ========================================================================= */}
      <section className="relative bg-[#121316] text-white overflow-hidden py-24 sm:py-32 border-b-4 border-[#C5A880]">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#121316]/95 to-[#121316]/80 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-5"
          >
            <motion.nav
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1B1D22] border border-[#C5A880] rounded-sm text-xs text-[#C5A880] font-semibold uppercase tracking-widest"
            >
              <Landmark className="w-3.5 h-3.5" />
              <Link href="/" className="hover:underline">
                {t.nav.home}
              </Link>
              <span>/</span>
              <span className="text-white">{t.attorneysPage.breadcrumb}</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              {t.attorneysPage.heroTitleStart}
              <span className="text-[#C5A880] italic font-normal block sm:inline">
                {t.attorneysPage.heroTitleHighlight}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal max-w-2xl"
            >
              {t.attorneysPage.heroDesc}
            </motion.p>
          </motion.div>

          {/* Filter Tab Kategori Hierarki */}
          <div className="flex flex-wrap gap-2.5 mt-10 pt-6 border-t border-[#C5A880]/30">
            {[
              {
                id: "all",
                label: `${t.attorneysPage.tabAll} (${translatedAttorneys.length})`,
              },
              { id: "managing", label: t.attorneysPage.tabLeadership },
              { id: "partners", label: t.attorneysPage.tabPartners },
              { id: "associates", label: t.attorneysPage.tabAssociates },
              { id: "paralegals", label: t.attorneysPage.tabParalegals },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer border ${activeTab === tab.id
                    ? "bg-[#C5A880] text-[#121316] border-[#C5A880] shadow-[0_0_20px_rgba(197,168,128,0.4)]"
                    : "bg-[#1B1D22] text-[#D1D5DB] border-[#C5A880]/40 hover:border-[#C5A880] hover:text-[#C5A880]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. BAGAN ALUR KOMANDO & HIERARKI ANGGOTA FIRMA
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* TIER 01: MANAGING PARTNER (PUNCAK KEPEMIMPINAN EKSEKUTIF) */}
        {(activeTab === "all" || activeTab === "managing") && managingPartner && (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#121316] text-white rounded-sm border-2 border-[#C5A880] p-6 sm:p-10 shadow-2xl relative"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C5A880] text-[#121316] text-xs font-extrabold uppercase tracking-[0.2em] rounded-sm mb-8 shadow-md">
                <Crown className="w-4 h-4" />
                <span>{t.attorneysPage.tier1Badge}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Foto Managing Partner */}
                <div className="lg:col-span-5">
                  <div className="p-2 border-2 border-[#C5A880] bg-[#1B1D22] rounded-sm relative shadow-inner">
                    <img
                      src={managingPartner.imageUrl}
                      alt={managingPartner.name}
                      className="w-full h-96 sm:h-[420px] object-cover object-top rounded-sm"
                    />
                    <div className="mt-2 bg-[#121316] border border-[#C5A880] p-3 text-center">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A880] block">
                        {language === "EN"
                          ? "National Advocate License"
                          : "Lisensi Advokat Nasional"}
                      </span>
                      <span className="text-xs text-white font-mono">
                        NIA PERADI: {managingPartner.peradiNia}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detail Otoritas Managing Partner */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="border-b border-[#C5A880]/40 pb-4">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block mb-1">
                      {t.attorneysPage.tier1Subtitle}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                      {managingPartner.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#E8CBB3] mt-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>{managingPartner.degree}</span>
                    </p>
                  </div>

                  <blockquote className="p-4 bg-[#1B1D22] border-l-4 border-[#C5A880] text-sm sm:text-base italic font-serif text-[#F3F4F6] leading-relaxed">
                    &quot;{t.attorneysPage.tier1Quote}&quot;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-normal">
                    {managingPartner.bio}
                  </p>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880] block mb-2.5">
                      {t.attorneysPage.tier1SpecLabel}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {managingPartner.specialization.map(
                        (spec: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#1B1D22] text-[#C5A880] border border-[#C5A880] text-xs font-semibold rounded-sm"
                          >
                            {spec}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedLawyer(managingPartner)}
                      className="px-6 py-3.5 bg-[#1B1D22] hover:bg-[#2A2E37] text-[#C5A880] border-2 border-[#C5A880] font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t.attorneysPage.tier1BtnBio}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBookWithLawyer(managingPartner.name)}
                      className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] border-2 border-[#C5A880] font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>{t.attorneysPage.tier1BtnBook}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Garis Konektor Vertikal Emas */}
            {activeTab === "all" && (
              <div className="hidden lg:flex flex-col items-center justify-center h-16">
                <div className="w-0.5 h-full bg-[#C5A880]" />
                <div className="w-3 h-3 rounded-full bg-[#C5A880] -mt-1.5" />
              </div>
            )}
          </div>
        )}

        {/* TIER 02: DEWAN MITRA & PENASIHAT AHLI (PARTNERS & OF COUNSEL) */}
        {(activeTab === "all" || activeTab === "partners") && (
          <div className="relative">
            <div className="bg-white rounded-sm border-2 border-[#C5A880] p-6 sm:p-10 shadow-xl">
              <div className="bg-[#121316] text-white p-5 rounded-sm border-2 border-[#C5A880] mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-bold uppercase tracking-[0.2em]">
                    <Scale className="w-4 h-4" />
                    <span>{t.attorneysPage.tier2Badge}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {t.attorneysPage.tier2Title}
                  </h2>
                  <p className="text-xs text-[#D1D5DB]">
                    {t.attorneysPage.tier2Desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="px-3.5 py-1.5 bg-[#1B1D22] text-[#C5A880] border border-[#C5A880] text-[11px] font-bold uppercase tracking-widest rounded-sm inline-block">
                    {t.attorneysPage.tier2Pill}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seniorAndPracticePartners.map((lawyer: Attorney) =>
                  renderGoldFramedCard(lawyer, "TIER II • PARTNER")
                )}
                {ofCounselList.map((lawyer: Attorney) =>
                  renderGoldFramedCard(lawyer, "TIER II • OF COUNSEL")
                )}
              </div>
            </div>

            {/* Garis Konektor Vertikal Emas */}
            {activeTab === "all" && (
              <div className="hidden lg:flex flex-col items-center justify-center h-16">
                <div className="w-0.5 h-full bg-[#C5A880]" />
                <div className="w-3 h-3 rounded-full bg-[#C5A880] -mt-1.5" />
              </div>
            )}
          </div>
        )}

        {/* TIER 03: ADVOKAT LITIGASI & ASOSIASI (ASSOCIATES) */}
        {(activeTab === "all" || activeTab === "associates") && (
          <div className="relative">
            <div className="bg-white rounded-sm border-2 border-[#C5A880] p-6 sm:p-10 shadow-xl">
              <div className="bg-[#121316] text-white p-5 rounded-sm border-2 border-[#C5A880] mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-bold uppercase tracking-[0.2em]">
                    <Gavel className="w-4 h-4" />
                    <span>{t.attorneysPage.tier3Badge}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {t.attorneysPage.tier3Title}
                  </h2>
                  <p className="text-xs text-[#D1D5DB]">
                    {t.attorneysPage.tier3Desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="px-3.5 py-1.5 bg-[#1B1D22] text-[#C5A880] border border-[#C5A880] text-[11px] font-bold uppercase tracking-widest rounded-sm inline-block">
                    {t.attorneysPage.tier3Pill}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {associates.map((lawyer: Attorney) =>
                  renderGoldFramedCard(lawyer, "TIER III • ASSOCIATE")
                )}
              </div>
            </div>

            {/* Garis Konektor Vertikal Emas */}
            {activeTab === "all" && (
              <div className="hidden lg:flex flex-col items-center justify-center h-16">
                <div className="w-0.5 h-full bg-[#C5A880]" />
                <div className="w-3 h-3 rounded-full bg-[#C5A880] -mt-1.5" />
              </div>
            )}
          </div>
        )}

        {/* TIER 04: DIVISI PARALEGAL & RISET YURIDIS (OPERATIONAL BACKBONE) */}
        {(activeTab === "all" || activeTab === "paralegals") && (
          <div className="relative">
            <div className="bg-white rounded-sm border-2 border-[#C5A880] p-6 sm:p-10 shadow-xl">
              <div className="bg-[#121316] text-white p-5 rounded-sm border-2 border-[#C5A880] mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-bold uppercase tracking-[0.2em]">
                    <BookOpen className="w-4 h-4" />
                    <span>{t.attorneysPage.tier4Badge}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {t.attorneysPage.tier4Title}
                  </h2>
                  <p className="text-xs text-[#D1D5DB]">
                    {t.attorneysPage.tier4Desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="px-3.5 py-1.5 bg-[#1B1D22] text-[#C5A880] border border-[#C5A880] text-[11px] font-bold uppercase tracking-widest rounded-sm inline-block">
                    {t.attorneysPage.tier4Pill}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {paralegals.map((lawyer: Attorney) =>
                  renderGoldFramedCard(lawyer, "TIER IV • PARALEGAL")
                )}
              </div>

              {/* Box Manifesto Supervisi Berkas Tiga Lapis (Three-Layer Review) */}
              <div className="mt-12 bg-[#121316] text-white p-6 sm:p-8 rounded-sm border-2 border-[#C5A880] shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <div className="inline-flex items-center gap-2 text-[#C5A880] text-xs font-bold uppercase tracking-widest">
                      <FileCheck2 className="w-4 h-4" />
                      <span>{t.attorneysPage.paralegalBoxBadge}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {t.attorneysPage.paralegalBoxTitle}
                    </h3>
                    <p className="text-xs text-[#D1D5DB] leading-relaxed font-normal">
                      {t.attorneysPage.paralegalBoxDesc}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-2 text-xs">
                    <div className="p-3 bg-[#1B1D22] border border-[#C5A880] rounded-sm flex items-center gap-2.5 text-[#FAF9F6]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>
                        {language === "EN"
                          ? "Precedent & Statutory Verification"
                          : "Akurasi Kutipan Pasal & Yurisprudensi"}
                      </span>
                    </div>
                    <div className="p-3 bg-[#1B1D22] border border-[#C5A880] rounded-sm flex items-center gap-2.5 text-[#FAF9F6]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>
                        {language === "EN"
                          ? "Strict Code of Ethics Compliance"
                          : "Kepatuhan Ketat Kode Etik Advokat"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          3. PRE-FOOTER CALL TO ACTION (KONSULTASI TIM RESMI)
      ========================================================================= */}
      <section className="py-16 bg-[#FFFFFF] border-t-2 border-[#C5A880]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121316] p-10 sm:p-14 rounded-sm border-2 border-[#C5A880] text-center max-w-4xl mx-auto shadow-2xl text-white relative">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.attorneysPage.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              {t.attorneysPage.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setTargetLawyerName("");
                  setReservationOpen(true);
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C5A880]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.attorneysPage.ctaBtnReserve}</span>
              </button>
              <Link
                href="/kontak"
                className="w-full sm:w-auto px-8 py-4 bg-[#1B1D22] hover:bg-[#2A2E37] border border-[#C5A880] text-[#C5A880] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors text-center"
              >
                {t.attorneysPage.ctaBtnOffice}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog Detail Profil Anggota Tim */}
      <LawyerModal
        lawyer={selectedLawyer}
        onClose={() => setSelectedLawyer(null)}
        onBookConsultation={handleBookWithLawyer}
      />

      {/* Modal Dialog Reservasi Pertemuan WhatsApp */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        preselectedLawyer={targetLawyerName ? targetLawyerName : undefined}
      />
    </div>
  );
}