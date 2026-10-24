"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Lock,
  Building2,
  FileSignature,
  UserCheck,
  Briefcase,
  Landmark,
  Users,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";
import { FIRM_CONFIG } from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    clientCategory: "Korporasi / Badan Usaha",
    fullName: "",
    entityName: "",
    email: "",
    whatsapp: "",
    practiceArea: "Litigasi Perdata & Wanprestasi Bisnis",
    urgencyLevel: "Terjadwal (Reguler)",
    consultationMode: "Tatap Muka di Kantor SCBD",
    preferredDate: "",
    caseChronology: "",
    // Lapisan Keamanan 1: Anti-Bot Honeypot Field
    honeypot_security_firm: "",
    // Lapisan Keamanan 2: Persetujuan Eksplisit UU PDP No. 27/2022
    pdpConsent: false,
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError(null);

    // 1. Eksekusi Anti-Bot Honeypot: Jika field jebakan terisi, batalkan proses tanpa notifikasi
    if (formData.honeypot_security_firm.trim() !== "") {
      console.warn("Automated bot submission prevented by Honeypot layer.");
      return;
    }

    // 2. Validasi Kepatuhan UU PDP No. 27 Tahun 2022
    if (!formData.pdpConsent) {
      setValidationError(
        language === "EN"
          ? "You must consent to the personal data processing terms under PDP Law No. 27/2022 to proceed."
          : "Anda wajib menyetujui pemrosesan data sesuai UU PDP No. 27/2022 sebelum menerbitkan tiket konsultasi."
      );
      return;
    }

    // 3. Pemformatan Tiket Perkara Formal
    const ticketId = `SBL-${new Date().getFullYear()}${String(
      new Date().getMonth() + 1
    ).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;

    const formattedMessage =
`*REGISTRASI KONSULTASI HUKUM RESMI — SBL LAW FIRM*
*No. Referensi Tiket:* #${ticketId}
*Kepatuhan Regulasi:* Tunduk pada UU PDP No. 27/2022 & Pasal 19 UU Advokat No. 18/2003
================================================
*I. IDENTITAS PEMOHON*
• *Kategori Klien:* ${formData.clientCategory}
• *Nama Lengkap:* ${formData.fullName.trim()}
${
  formData.entityName.trim()
    ? `• *Perusahaan / Entitas:* ${formData.entityName.trim()}\n`
    : ""
}• *WhatsApp:* ${formData.whatsapp.trim()}
• *Email:* ${formData.email.trim() || "-"}

*II. PARAMETER PERKARA & JADWAL*
• *Bidang Hukum:* ${formData.practiceArea}
• *Urgensi:* ${formData.urgencyLevel}
• *Mode Pertemuan:* ${formData.consultationMode}
• *Rencana Tanggal:* ${formData.preferredDate || "Menyesuaikan Jadwal Partner"}

*III. KRONOLOGI / DUDUK PERKARA*
${formData.caseChronology.trim()}
================================================
_Persetujuan PDP: Pemohon telah menyetujui pemrosesan data identitas dan resume perkara secara sah untuk telaah hukum awal._`;

    const encodedText = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${FIRM_CONFIG.whatsappNumber}?text=${encodedText}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] text-[#1E232A] min-h-screen selection:bg-[#C5A880] selection:text-[#121316]">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#121316] text-white overflow-hidden py-24 sm:py-32 border-b-4 border-[#C5A880]">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#121316]/95 to-[#121316]/80 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <nav className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1B1D22] border border-[#C5A880] rounded-sm text-xs text-[#C5A880] font-semibold uppercase tracking-widest">
              <Landmark className="w-3.5 h-3.5" />
              <Link href="/" className="hover:underline">
                {t.nav.home}
              </Link>
              <span>/</span>
              <span className="text-white">{t.contactPage.breadcrumb}</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {t.contactPage.heroTitleStart}
              <span className="text-[#C5A880] italic font-normal block sm:inline">
                {t.contactPage.heroTitleHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-normal max-w-2xl">
              {t.contactPage.heroDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-[#1B1D22]/90 border border-[#C5A880] p-4 rounded-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-sm bg-[#121316] border border-[#C5A880] flex items-center justify-center text-[#C5A880] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
                  {t.contactPage.guarantee1Title}
                </span>
                <span className="text-[11px] text-[#D1D5DB]">
                  {t.contactPage.guarantee1Desc}
                </span>
              </div>
            </div>

            <div className="bg-[#1B1D22]/90 border border-[#C5A880] p-4 rounded-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-sm bg-[#121316] border border-[#C5A880] flex items-center justify-center text-[#C5A880] shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
                  {t.contactPage.guarantee2Title}
                </span>
                <span className="text-[11px] text-[#D1D5DB]">
                  {t.contactPage.guarantee2Desc}
                </span>
              </div>
            </div>

            <div className="bg-[#1B1D22]/90 border border-[#C5A880] p-4 rounded-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-sm bg-[#121316] border border-[#C5A880] flex items-center justify-center text-[#C5A880] shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
                  {t.contactPage.guarantee3Title}
                </span>
                <span className="text-[11px] text-[#D1D5DB]">
                  {t.contactPage.guarantee3Desc}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROTOKOL PENERIMAAN PERKARA */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#C5A880]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7B3E]">
              {t.contactPage.protoBadge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121316] mt-1">
              {t.contactPage.protoHeading}
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: t.contactPage.proto1Step,
                title: t.contactPage.proto1Title,
                desc: t.contactPage.proto1Desc,
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              {
                step: t.contactPage.proto2Step,
                title: t.contactPage.proto2Title,
                desc: t.contactPage.proto2Desc,
                icon: <Briefcase className="w-5 h-5" />,
              },
              {
                step: t.contactPage.proto3Step,
                title: t.contactPage.proto3Title,
                desc: t.contactPage.proto3Desc,
                icon: <FileSignature className="w-5 h-5" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-6 rounded-sm border-2 border-[#C5A880] relative shadow-sm"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C5A880]/40">
                  <span className="px-2.5 py-1 bg-[#121316] text-[#C5A880] text-[10px] font-bold uppercase tracking-widest rounded-sm border border-[#C5A880]">
                    {item.step}
                  </span>
                  <div className="text-[#9A7B3E]">{item.icon}</div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#121316] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIREKTORI KANTOR & FORMULIR BERPENGAMAN */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Kolom Kiri: Informasi Kantor & Peta Sandboxed */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#FFFFFF] rounded-sm border-2 border-[#C5A880] shadow-xl overflow-hidden">
                <div className="bg-[#121316] px-6 py-4 border-b-2 border-[#C5A880] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                    {t.contactPage.officeBadge}
                  </span>
                  <Building2 className="w-4 h-4 text-[#C5A880]" />
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#121316]">
                      {t.contactPage.officeTitle}
                    </h3>
                    <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
                      {t.contactPage.officeDesc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-[#E5E7EB]">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-[#121316] text-[#C5A880] border border-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7B3E] block">
                          {t.contactPage.addressLabel}
                        </span>
                        <span className="text-xs text-[#121316] font-medium block mt-0.5">
                          {FIRM_CONFIG.address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-[#121316] text-[#C5A880] border border-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7B3E] block">
                          {t.contactPage.phoneLabel}
                        </span>
                        <span className="text-xs text-[#121316] font-semibold block mt-0.5">
                          {FIRM_CONFIG.phone}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-[#121316] text-[#C5A880] border border-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7B3E] block">
                          {t.contactPage.emailLabel}
                        </span>
                        <span className="text-xs text-[#121316] font-semibold block mt-0.5">
                          {FIRM_CONFIG.email}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-sm bg-[#121316] text-[#C5A880] border border-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7B3E] block">
                          {t.contactPage.hoursLabel}
                        </span>
                        <span className="text-xs text-[#121316] font-medium block mt-0.5">
                          {FIRM_CONFIG.operatingHours}
                        </span>
                        <span className="text-[11px] text-[#6B7280] italic block mt-0.5">
                          {t.contactPage.hoursNote}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotline 24 Jam */}
              <div className="bg-[#121316] text-white p-6 rounded-sm border-2 border-[#C5A880] shadow-xl relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-[#C5A880] text-[#121316] flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block px-2 py-0.5 bg-[#1B1D22] text-[#C5A880] border border-[#C5A880] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      {t.contactPage.emergencyTag}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      {t.contactPage.emergencyTitle}
                    </h4>
                    <p className="text-xs text-[#D1D5DB] leading-relaxed">
                      {t.contactPage.emergencyDesc}
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${FIRM_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                          "*HOTLINE DARURAT 24 JAM — SBL LAW FIRM*\nMohon bantuan kuasa hukum segera:"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A880] hover:text-white transition-colors"
                      >
                        <span>{t.contactPage.emergencyBtn}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lapisan Keamanan 3: Iframe Sandbox Hardening pada Google Maps */}
              <div className="bg-white p-3 rounded-sm border-2 border-[#C5A880] shadow-lg">
                <div className="bg-[#121316] px-4 py-2 mb-2 flex items-center justify-between border border-[#C5A880]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A880]">
                    Peta Lokasi Kantor SCBD
                  </span>
                  <span className="text-[10px] text-[#A3A7AF] font-mono">
                    Sandboxed Embed
                  </span>
                </div>
                <div className="h-64 w-full overflow-hidden rounded-sm">
                  <iframe
                    title="Lokasi Kantor SBL Law Firm SCBD"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.257626947278!2d106.80424531476899!3d-6.229729895490457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f151c8908fbf%3A0x6b4db94709d77f86!2sMenara%20Sudirman!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    // Isolasi izin skrip agar tidak dapat menyalahgunakan origin situs utama
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Formulir Registrasi Perkara */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] rounded-sm border-2 border-[#C5A880] shadow-xl relative overflow-hidden">
                <div className="bg-[#121316] p-6 sm:p-8 text-white border-b-2 border-[#C5A880]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-[#C5A880] text-[#121316] text-[10px] font-extrabold uppercase tracking-[0.2em] rounded-sm">
                      {t.contactPage.formTag}
                    </span>
                    <span className="text-[11px] text-[#C5A880] font-mono flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{t.contactPage.formEncrypted}</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                    {t.contactPage.formTitle}
                  </h3>
                  <p className="text-xs text-[#D1D5DB] mt-1.5 leading-relaxed">
                    {t.contactPage.formSub}
                  </p>
                </div>

                <div className="p-6 sm:p-10">
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-8 p-4 bg-[#121316] text-white border-2 border-[#C5A880] rounded-sm flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                        <div className="text-xs leading-relaxed">
                          <strong className="text-[#C5A880] block uppercase tracking-wider mb-0.5">
                            {language === "EN" ? "Ticket Generated Successfully" : "Tiket Konsultasi Berhasil Diformat"}
                          </strong>
                          {language === "EN"
                            ? "WhatsApp dialog has been opened in a new tab."
                            : "Jendela WhatsApp resmi telah dibuka di tab baru."}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Pesan Kesalahan Validasi UU PDP */}
                  {validationError && (
                    <div className="mb-6 p-3.5 bg-rose-50 border-2 border-rose-400 text-rose-900 rounded-sm text-xs flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Lapisan Keamanan 1: ANTI-BOT HONEYPOT FIELD (Tersembunyi total dari pandangan pengguna) */}
                    <div
                      aria-hidden="true"
                      style={{
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 0,
                        width: 0,
                        zIndex: -1,
                        pointerEvents: "none",
                      }}
                    >
                      <label htmlFor="firm_security_verification_code">Security Token</label>
                      <input
                        id="firm_security_verification_code"
                        type="text"
                        name="honeypot_security_firm"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot_security_firm}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2.5">
                        {t.contactPage.formClientCat} <span className="text-[#B87333]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: t.contactPage.catCorp, icon: <Building2 className="w-4 h-4" /> },
                          { id: t.contactPage.catIndiv, icon: <Users className="w-4 h-4" /> },
                        ].map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, clientCategory: cat.id }))
                            }
                            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-sm border-2 flex items-center justify-center gap-2 transition-all cursor-pointer ${
                              formData.clientCategory === cat.id
                                ? "bg-[#121316] text-[#C5A880] border-[#C5A880] shadow-md"
                                : "bg-[#FAF9F6] text-[#4B5563] border-[#E5E7EB] hover:border-[#C5A880]"
                            }`}
                          >
                            {cat.icon}
                            <span>{cat.id}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                          {t.contactPage.formFullName} <span className="text-[#B87333]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-medium text-[#121316]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                          {t.contactPage.formEntityName}
                        </label>
                        <input
                          type="text"
                          name="entityName"
                          value={formData.entityName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-medium text-[#121316]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                          {t.contactPage.formWa} <span className="text-[#B87333]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-medium text-[#121316]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                          {t.contactPage.formEmail}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-medium text-[#121316]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                          {t.contactPage.formArea} <span className="text-[#B87333]">*</span>
                        </label>
                        <select
                          name="practiceArea"
                          value={formData.practiceArea}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-semibold text-[#121316]"
                        >
                          <option value="Litigasi Perdata & Wanprestasi Bisnis">
                            Litigasi Perdata & Wanprestasi Bisnis
                          </option>
                          <option value="Litigasi Pidana Korporasi & Umum">
                            Litigasi Pidana Korporasi & Umum
                          </option>
                          <option value="Hukum Korporasi, M&A & Kontrak Komersial">
                            Hukum Korporasi, M&A & Kontrak Komersial
                          </option>
                          <option value="Kepailitan & PKPU">
                            Kepailitan & Restrukturisasi Utang (PKPU)
                          </option>
                          <option value="Sengketa Pertanahan & Real Estate">
                            Sengketa Pertanahan & Real Estate
                          </option>
                          <option value="Ketenagakerjaan & PHI">
                            Ketenagakerjaan & Hubungan Industrial (PHI)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                          {t.contactPage.formUrgency} <span className="text-[#B87333]">*</span>
                        </label>
                        <select
                          name="urgencyLevel"
                          value={formData.urgencyLevel}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-semibold text-[#121316]"
                        >
                          <option value="Terjadwal (Reguler)">Terjadwal (Reguler)</option>
                          <option value="Mendesak (Tenggat Waktu Somasi/Gugatan)">
                            Mendesak (Tenggat Somasi/Sidang)
                          </option>
                          <option value="Sangat Mendesak (Pemeriksaan Penyidik)">
                            Sangat Mendesak (Panggilan Penyidik/Upaya Paksa)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#121316] mb-2">
                        {t.contactPage.formChronology} <span className="text-[#B87333]">*</span>
                      </label>
                      <textarea
                        name="caseChronology"
                        required
                        rows={4}
                        value={formData.caseChronology}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FAF9F6] rounded-sm border border-[#C5A880]/70 focus:border-[#121316] focus:bg-white outline-none transition-all font-normal text-[#121316] leading-relaxed"
                      />
                    </div>

                    {/* Lapisan Keamanan 4: KLAUSUL INTEGRASI UU PDP NO. 27 TAHUN 2022 */}
                    <div className="p-4 bg-[#FAF9F6] border-2 border-[#C5A880] rounded-sm">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="pdpConsent"
                          checked={formData.pdpConsent}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 accent-[#C5A880] rounded-xs cursor-pointer shrink-0"
                        />
                        <div className="text-xs text-[#1E232A]/90 leading-relaxed">
                          <strong className="text-[#121316] font-bold block mb-0.5">
                            {language === "EN"
                              ? "Statutory Personal Data Protection Consent (Law No. 27/2022):"
                              : "Pernyataan Persetujuan Pemrosesan Data Pribadi (UU PDP No. 27/2022):"}
                          </strong>
                          {language === "EN"
                            ? "I hereby grant explicit consent to SBL Law Firm to process my identity and preliminary case chronology solely for legal assessment and conflict of interest check purposes, governed by the statutory professional secrecy under Article 19 Advocates Act (Law No. 18/2003)."
                            : "Saya memberikan persetujuan eksplisit kepada SBL Law Firm untuk memproses data identitas serta ringkasan duduk perkara ini semata-mata untuk kepentingan telaah hukum awal dan verifikasi bebas benturan kepentingan (Conflict Check), dengan jaminan perlindungan rahasia jabatan berdasarkan Pasal 19 UU No. 18 Tahun 2003 tentang Advokat."}
                        </div>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-[#121316] hover:bg-[#1B1D22] text-[#C5A880] font-extrabold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-200 border-2 border-[#C5A880] shadow-md flex items-center justify-center gap-3 cursor-pointer hover:-translate-y-0.5 active:scale-[0.99]"
                      >
                        <Send className="w-4 h-4 text-[#C5A880]" />
                        <span>{t.contactPage.formSubmit}</span>
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 p-5 bg-[#FAF9F6] rounded-sm border-2 border-[#C5A880] text-[11px] text-[#4B5563] leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 text-[#121316] font-extrabold uppercase tracking-wider">
                      <Scale className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span>{t.contactPage.disclaimerTitle}</span>
                    </div>
                    <p>{t.contactPage.disclaimerBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}