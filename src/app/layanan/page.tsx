"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  Briefcase,
  Users,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  CalendarCheck,
  ArrowRight,
  ArrowUpRight,
  Lock,
  Target,
  FileText,
  Award,
  ShieldCheck,
  Check,
  Clock,
  Landmark,
  Sparkles,
} from "lucide-react";
import ReservationModal from "@/components/ReservationModal";
import LegalHealthCheck from "@/components/LegalHealthCheck";
import {
  PRACTICE_AREAS,
  CASE_STUDIES,
  FAQS,
  WORKFLOW_STEPS,
  PracticeArea,
  CaseStudy,
  FAQItem,
  WorkflowStepItem,
} from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

// Konfigurasi Animasi dengan Tipe Variants Eksplisit Bebas Error TypeScript
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ServicesPage() {
  const [filter, setFilter] = useState<"all" | "litigasi" | "korporasi">("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>("");

  // Konteks Bahasa Global (ID / EN)
  const { language, t } = useLanguage();

  // Terjemahan Dinamis Bidang Praktik Hukum (ID & EN)
  const translatedPracticeAreas: PracticeArea[] = PRACTICE_AREAS.map((area) => {
    if (language === "EN") {
      switch (area.id) {
        case "litigasi-pidana":
          return {
            ...area,
            title: "General & White-Collar Criminal Defense",
            shortDesc:
              "Strategic representation and constitutional rights protection from police investigation through Supreme Court trial proceedings.",
            deliverables: [
              "Witness & suspect representation before National Police & Prosecution",
              "Pre-trial motions challenging search, seizure, or suspect validity",
              "Corporate crime, anti-corruption (Tipikor), and banking offenses defense",
              "Drafting Demurrers (Eksepsi), Defense Pleas (Pledoi), & Cassation Briefs",
            ],
          };
        case "perdata-bisnis":
          return {
            ...area,
            title: "Civil & Commercial Breach of Contract Disputes",
            shortDesc:
              "Resolving commercial contract defaults, unlawful act (tort/PMH) litigation, and execution of fiduciary and mortgage securities.",
            deliverables: [
              "Formal Legal Demand Letters (Somasi) and Pre-Litigation Negotiations",
              "Breach of Contract and Tort Lawsuits before the District Court",
              "Petitions for Conservatoir Beslag (Precautionary Attachment) & Execution",
              "Appellate Advocacy before High Courts and the Supreme Court",
            ],
          };
        case "korporasi-ma":
          return {
            ...area,
            title: "Corporate Law, M&A & Cross-Border Contracts",
            shortDesc:
              "Comprehensive strategic advisory for corporate governance (GCG), equity restructuring, cross-border M&A, and foreign direct investment.",
            deliverables: [
              "Comprehensive Legal Due Diligence (LDD) Audits",
              "Drafting & Negotiation of Complex International Contracts",
              "Shareholder Restructuring, Joint Ventures & Acquisitions",
              "Risk-Based Business Licensing & Compliance (OSS-RBA)",
            ],
          };
        case "ketenagakerjaan-phi":
          return {
            ...area,
            title: "Labor Law & Industrial Relations Disputes",
            shortDesc:
              "Employment risk audits and courtroom advocacy before the Industrial Relations Court (PHI) regarding rights disputes and termination.",
            deliverables: [
              "Drafting Company Regulations (PP) & Collective Labor Agreements (PKB)",
              "Bipartite Negotiation & Ministry of Manpower Tripartite Mediation",
              "Employment Termination (PHK) Litigation before PHI Tribunals",
              "Expatriate Work Permit (TKA) Compliance & Employment Audits",
            ],
          };
        case "pertanahan-properti":
          return {
            ...area,
            title: "Agrarian, Real Estate & Land Title Litigation",
            shortDesc:
              "Legal advocacy on overlapping land title certificates, administrative revocations at PTUN, and commercial real estate acquisition.",
            deliverables: [
              "Petitions to Revoke Administrative Decrees (BPN) at PTUN",
              "Freehold (SHM) and Building Rights (HGB) Ownership Defense",
              "Legal Clearance for Industrial Estate Land Acquisition",
              "Commercial Real Estate & Developer-Consumer Dispute Resolution",
            ],
          };
        case "kepailitan-pkpu":
          return {
            ...area,
            title: "Bankruptcy & Debt Restructuring (PKPU)",
            shortDesc:
              "Debtor and creditor representation in Suspension of Debt Payment Obligations (PKPU) and Bankruptcy petitions before Commercial Courts.",
            deliverables: [
              "Filing PKPU and Involuntary Bankruptcy Petitions at Commercial Courts",
              "Drafting Restructuring Composition Plans (Rencana Perdamaian)",
              "Claim Reconciliation for Secured, Preferred, & Unsecured Creditors",
              "Insolvency Estate Advocacy & Representation before Court-Appointed Receivers",
            ],
          };
        default:
          return area;
      }
    }
    return area;
  });

  const filteredAreas = translatedPracticeAreas.filter((area: PracticeArea) => {
    if (filter === "all") return true;
    return area.category === filter;
  });

  // Terjemahan Dinamis Alur SOP 4 Tahap (ID & EN)
  const translatedWorkflowSteps: WorkflowStepItem[] = WORKFLOW_STEPS.map((wf) => {
    if (language === "EN") {
      switch (wf.step) {
        case "01":
          return {
            step: "01",
            title: "Legal Fact & Evidence Analysis",
            desc: "Comprehensive timeline auditing, evidentiary document authentication, and preliminary legal standing mapping.",
          };
        case "02":
          return {
            step: "02",
            title: "In-Depth Judicial Research",
            desc: "Statutory basis formulation, Supreme Court precedent analysis, expert doctrine reviews, and sector regulatory review.",
          };
        case "03":
          return {
            step: "03",
            title: "Strategic Legal Formulation",
            desc: "Independent Legal Opinion (LO) drafting, litigation vs. alternative dispute evaluation, and Special Power of Attorney execution.",
          };
        case "04":
          return {
            step: "04",
            title: "Execution & Active Trial Advocacy",
            desc: "Formal legal measures before law enforcement or court bodies accompanied by periodic progress reporting through final binding judgment.",
          };
        default:
          return wf;
      }
    }
    return wf;
  });

  // Terjemahan Dinamis Studi Kasus Representatif (ID & EN)
  const translatedCaseStudies: CaseStudy[] = CASE_STUDIES.map((cs) => {
    if (language === "EN") {
      switch (cs.id) {
        case "cs-1":
          return {
            id: "cs-1",
            title: "Commercial Receivables Asset Recovery for Automotive Manufacturer",
            clientType: "Multinational Automotive Corporation",
            practiceArea: "Civil & Commercial Litigation",
            challenge:
              "Primary distributor defaulted on Rp 48.5 Billion distribution receivables accompanied by asset dissipation indicators.",
            strategy:
              "Filing demand letters grounded in forensic contract audits, followed by Conservatoir Beslag (Precautionary Attachment) petitions and notarized debt restructuring.",
            result:
              "Court settlement reached prior to final judgment (Dading). Client recovered 100% of principal debt backed by real property collateral and structured installments.",
            valueOrImpact: "Rp 48.500.000.000,- Successfully Recovered",
          };
        case "cs-2":
          return {
            id: "cs-2",
            title: "Homologation of Syndicated PKPU Debt Restructuring",
            clientType: "National Maritime & Logistics Enterprise",
            practiceArea: "Bankruptcy & PKPU",
            challenge:
              "Client faced bankruptcy petitions from 14 syndicated banking creditors and vendors with maturing obligations of Rp 185 Billion.",
            strategy:
              "Formulating a comprehensive composition plan and leading negotiations with secured and unsecured creditors.",
            result:
              "Reorganization proposal unanimously approved in creditor voting and ratified (Homologated) by Commercial Court judges.",
            valueOrImpact: "Restructuring Approved — Corporate Operations Preserved",
          };
        default:
          return cs;
      }
    }
    return cs;
  });

  // Terjemahan Dinamis Tanya Jawab Layanan & Biaya (ID & EN)
  const translatedFaqs: FAQItem[] = FAQS.map((faq, idx) => {
    if (language === "EN") {
      switch (idx) {
        case 0:
          return {
            question: "What is the fee arrangement and legal fee structure at SBL Law Firm?",
            answer:
              "We enforce transparent fee billing documented in a written Legal Services Agreement (SPJH), covering Monthly Retainers, Lump-Sum milestone arrangements per court tier, and Legal Due Diligence audits.",
            category: "Billing & Agreement",
          };
        case 1:
          return {
            question: "What documents are required for an initial case consultation?",
            answer:
              "Official corporate identification/corporate charter, a chronological timeline of events, and copies of relevant evidence (contracts, bank transfers, summons letters, or demand notices).",
            category: "Consultation Procedure",
          };
        case 2:
          return {
            question: "How does the firm safeguard document and evidentiary confidentiality?",
            answer:
              "All information and records are protected by Advocate Statutory Immunity and professional secrecy obligations under Article 19 of the Advocates Act (Law No. 18/2003) and the Indonesian Advocates Code of Ethics.",
            category: "Ethics & Secrecy",
          };
        default:
          return faq;
      }
    }
    return faq;
  });

  const handleConsultService = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setModalOpen(true);
  };

  const renderServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert {...props} />;
      case "Scale":
        return <Scale {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "Users":
        return <Users {...props} />;
      case "Building2":
        return <Building2 {...props} />;
      case "FileSpreadsheet":
        return <FileSpreadsheet {...props} />;
      default:
        return <Scale {...props} />;
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-[#1E232A] min-h-screen selection:bg-[#B87333] selection:text-white">
      {/* =========================================================================
          1. LUXURY PAGE BANNER & INTERACTIVE FILTER BUTTONS
      ========================================================================= */}
      <section className="relative bg-[#121316] text-white overflow-hidden py-24 sm:py-32 border-b-2 border-[#C5A880]">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#121316]/95 to-[#121316]/80 pointer-events-none" />
        <div className="absolute top-1/4 right-8 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-4"
          >
            {/* Navigasi Breadcrumb */}
            <motion.nav
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B1D22] border border-[#C5A880]/50 rounded-sm text-xs text-[#C5A880] font-semibold uppercase tracking-widest"
            >
              <Landmark className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <span className="text-[#6B7280]">/</span>
              <span className="text-white">{t.servicesPage.breadcrumb}</span>
            </motion.nav>

            {/* Judul Halaman Otoritatif */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            >
              {t.servicesPage.heroTitleStart}
              <span className="text-[#C5A880] italic font-normal block sm:inline">
                {t.servicesPage.heroTitleHighlight}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal max-w-2xl pt-2"
            >
              {t.servicesPage.heroDesc}
            </motion.p>
          </motion.div>

          {/* Filter Interaktif Bidang Praktik */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3 mt-10 pt-6 border-t border-[#C5A880]/30"
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                filter === "all"
                  ? "bg-[#C5A880] text-[#121316] font-bold shadow-[0_4px_15px_rgba(197,168,128,0.35)]"
                  : "bg-[#1B1D22] text-[#D1D5DB] hover:text-[#C5A880] border border-[#C5A880]/40"
              }`}
            >
              {t.servicesPage.filterAll} ({PRACTICE_AREAS.length})
            </button>
            <button
              onClick={() => setFilter("litigasi")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                filter === "litigasi"
                  ? "bg-[#C5A880] text-[#121316] font-bold shadow-[0_4px_15px_rgba(197,168,128,0.35)]"
                  : "bg-[#1B1D22] text-[#D1D5DB] hover:text-[#C5A880] border border-[#C5A880]/40"
              }`}
            >
              {t.servicesPage.filterLitigation}
            </button>
            <button
              onClick={() => setFilter("korporasi")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                filter === "korporasi"
                  ? "bg-[#C5A880] text-[#121316] font-bold shadow-[0_4px_15px_rgba(197,168,128,0.35)]"
                  : "bg-[#1B1D22] text-[#D1D5DB] hover:text-[#C5A880] border border-[#C5A880]/40"
              }`}
            >
              {t.servicesPage.filterCorporate}
            </button>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. KATALOG BIDANG PRAKTIK UTAMA DENGAN RUANG LINGKUP DELIVERABLES
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredAreas.map((area: PracticeArea) => (
                <motion.div
                  key={area.id}
                  id={area.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#FAF9F6] p-8 rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Header Kartu */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-sm bg-[#121316] text-[#C5A880] flex items-center justify-center border border-[#C5A880]/50 group-hover:bg-[#121316] group-hover:border-[#C5A880] transition-colors duration-300 shadow-sm">
                        {renderServiceIcon(area.iconName)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white text-[#121316] border border-[#C5A880]/60 rounded-sm">
                        {area.category === "litigasi"
                          ? language === "EN"
                            ? "Litigation Chamber"
                            : "Kamar Litigasi"
                          : language === "EN"
                          ? "Corporate Chamber"
                          : "Kamar Korporasi"}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#121316] mb-3 group-hover:text-[#9A7B3E] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#4B5563] leading-relaxed mb-6 font-normal">
                      {area.shortDesc}
                    </p>

                    {/* Ruang Lingkup Deliverables Advokasi */}
                    <div className="space-y-2.5 pt-4 border-t border-[#E5E7EB] mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#121316] block mb-2">
                        {t.servicesPage.scopeLabel}
                      </span>
                      {area.deliverables.map((deliv: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1E232A]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tombol Konsultasi Perkara Spesifik */}
                  <button
                    type="button"
                    onClick={() => handleConsultService(area.title)}
                    className="w-full py-3 bg-white hover:bg-[#121316] text-[#121316] hover:text-[#C5A880] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 border-2 border-[#E5E7EB] hover:border-[#C5A880] flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#C5A880]" />
                    <span>{t.servicesPage.consultBtn}</span>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ALAT DIAGNOSTIK KESIAPAN HUKUM (LEGAL HEALTH CHECK INTERAKTIF)
      ========================================================================= */}
      <section className="py-20 bg-[#FAF9F6] border-y-2 border-[#C5A880]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalHealthCheck />
        </div>
      </section>

      {/* =========================================================================
          4. METODOLOGI ALUR PENANGANAN PERKARA (STANDAR OPERASIONAL BAKU)
      ========================================================================= */}
      <section className="py-24 bg-[#121316] text-white border-b border-[#2A2E37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
              {t.servicesPage.workflowBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              {t.servicesPage.workflowHeading}
            </h2>
            <p className="text-xs text-[#9CA3AF] mt-2 max-w-xl mx-auto font-normal">
              {t.servicesPage.workflowDesc}
            </p>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {translatedWorkflowSteps.map((wf: WorkflowStepItem, idx: number) => (
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
          5. REKAM JEJAK KASUS PILIHAN (REPRESENTATIVE MATTERS)
      ========================================================================= */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {t.servicesPage.casesBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {t.servicesPage.casesHeading}
            </h2>
            <p className="text-xs text-[#6B7280] mt-2">
              {t.servicesPage.casesDisclaimer}
            </p>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {translatedCaseStudies.map((cs: CaseStudy, idx: number) => (
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
                    <strong>{t.servicesPage.clientProfileLabel}</strong> {cs.clientType}
                  </div>

                  <div className="space-y-3.5 pt-4 text-xs border-t border-[#E5E7EB]">
                    <div>
                      <span className="font-bold text-[#121316] block mb-1">
                        {t.servicesPage.challengeLabel}
                      </span>
                      <p className="text-[#4B5563] leading-relaxed font-normal">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#121316] block mb-1">
                        {t.servicesPage.strategyLabel}
                      </span>
                      <p className="text-[#4B5563] leading-relaxed font-normal">{cs.strategy}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#121316] block mb-1">
                        {t.servicesPage.resultLabel}
                      </span>
                      <p className="text-[#121316] leading-relaxed font-semibold">{cs.result}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E7EB] bg-white p-4 rounded-sm border border-[#C5A880]/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[11px] uppercase font-bold text-[#9A7B3E]">
                    {t.servicesPage.impactLabel}
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
          6. TANYA JAWAB STRUKTUR BIAYA & INFORMASI LAYANAN (FAQ ACCORDION)
      ========================================================================= */}
      <section className="py-24 bg-[#FAF9F6] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B3E]">
              {t.servicesPage.faqBadge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mt-2">
              {t.servicesPage.faqHeading}
            </h2>
            <p className="text-xs text-[#6B7280] mt-2">
              {t.servicesPage.faqDesc}
            </p>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {translatedFaqs.map((faq: FAQItem, index: number) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-[#121316] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#121316] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#9A7B3E]" : ""
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
                        className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB] bg-white overflow-hidden"
                      >
                        {faq.answer}
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
          7. PRE-FOOTER CALL TO ACTION BANNER
      ========================================================================= */}
      <section className="py-20 bg-[#FFFFFF] border-t-2 border-[#C5A880]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121316] p-10 sm:p-14 rounded-sm border-2 border-[#C5A880] text-center max-w-4xl mx-auto shadow-2xl text-white relative">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.servicesPage.prefooterTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              {t.servicesPage.prefooterDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedServiceForModal("");
                  setModalOpen(true);
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C5A880]"
              >
                <CalendarCheck className="w-4 h-4 text-[#121316]" />
                <span>{t.servicesPage.prefooterBtn1}</span>
              </button>
              <Link
                href="/kontak"
                className="w-full sm:w-auto px-8 py-4 bg-[#1B1D22] hover:bg-[#2A2E37] border border-[#C5A880] text-[#C5A880] font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors text-center"
              >
                {t.servicesPage.prefooterBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog Reservasi Perkara Spesifik */}
      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedLawyer={
          selectedServiceForModal
            ? `${language === "EN" ? "Practice Area" : "Kategori Layanan"}: ${selectedServiceForModal}`
            : undefined
        }
      />
    </div>
  );
}