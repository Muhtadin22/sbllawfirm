"use client";

import React, { useState } from "react";
import { X, Calendar, Lock, ShieldCheck, Send, AlertTriangle } from "lucide-react";
import { FIRM_CONFIG } from "@/data/lawFirmData";
import { useLanguage } from "@/context/LanguageContext";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedLawyer?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
  preselectedLawyer,
}: ReservationModalProps) {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    preferredDate: "",
    caseCategory: preselectedLawyer || "Litigasi Perdata & Bisnis",
    notes: "",
    // Honeypot field
    bot_honey_check: "",
    // UU PDP Checkbox
    pdpApproved: false,
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

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

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Anti-Bot Honeypot Validation
    if (formData.bot_honey_check.trim() !== "") {
      return;
    }

    // 2. UU PDP Mandatory Check
    if (!formData.pdpApproved) {
      setErrorMessage(
        language === "EN"
          ? "Please accept the personal data processing terms under PDP Law to proceed."
          : "Mohon setujui ketentuan pemrosesan data pribadi sesuai UU PDP sebelum melanjutkan."
      );
      return;
    }

    const ticketId = `RES-${new Date().getFullYear()}${String(
      new Date().getMonth() + 1
    ).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;

    const text =
`*PERMOHONAN RESERVASI KONSULTASI — SBL LAW FIRM*
*No. Tiket:* #${ticketId}
------------------------------------------------
• *Nama Klien:* ${formData.fullName.trim()}
• *No. WhatsApp:* ${formData.whatsapp.trim()}
• *Klasifikasi Perkara:* ${formData.caseCategory}
• *Preferensi Tanggal:* ${formData.preferredDate || "Sesuai Jadwal Firma"}
• *Ringkasan Masalah:* ${formData.notes.trim() || "-"}
------------------------------------------------
_Klien telah menyetujui pemrosesan data secara sah sesuai UU No. 27/2022 (UU PDP)._`;

    const encoded = encodeURIComponent(text);
    window.open(
      `https://wa.me/${FIRM_CONFIG.whatsappNumber}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121316]/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FFFFFF] rounded-sm shadow-2xl max-w-lg w-full border-2 border-[#C5A880] relative overflow-hidden">
        {/* Header Modal */}
        <div className="bg-[#121316] p-5 text-white border-b-2 border-[#C5A880] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#C5A880] hover:text-white p-1 border border-[#C5A880]/40 rounded-sm transition-colors cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-sm bg-[#1B1D22] border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880] block">
                Official Intake Channel
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                {language === "EN"
                  ? "Schedule Formal Legal Consultation"
                  : "Reservasi Jadwal Pertemuan Hukum"}
              </h3>
            </div>
          </div>
        </div>

        {/* Form Isi */}
        <div className="p-6 bg-[#FAF9F6] space-y-4">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-300 rounded-sm text-xs text-rose-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleReservationSubmit} className="space-y-4">
            {/* Honeypot Input */}
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
              <input
                type="text"
                name="bot_honey_check"
                tabIndex={-1}
                autoComplete="off"
                value={formData.bot_honey_check}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1">
                {language === "EN" ? "Full Name *" : "Nama Lengkap Pemohon *"}
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Contoh: Hendra Wijaya"
                className="w-full px-3.5 py-2.5 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-medium text-[#121316]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1">
                  {language === "EN" ? "WhatsApp Number *" : "No. WhatsApp Aktif *"}
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="0812 3456 7890"
                  className="w-full px-3.5 py-2.5 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-medium text-[#121316]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1">
                  {language === "EN" ? "Preferred Date" : "Pilihan Tanggal"}
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-medium text-[#121316]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1">
                {language === "EN" ? "Practice Area / Focus" : "Klasifikasi Perkara / Bidang Hukum"}
              </label>
              <input
                type="text"
                name="caseCategory"
                value={formData.caseCategory}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-medium text-[#121316]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1">
                {language === "EN" ? "Brief Matter Summary" : "Ringkasan Singkat Duduk Perkara"}
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Uraikan intisari perkara dan tujuan hukum yang diharapkan..."
                className="w-full px-3.5 py-2 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-normal text-[#121316] leading-relaxed"
              />
            </div>

            {/* UU PDP Consent Checkbox */}
            <div className="p-3 bg-white border border-[#C5A880] rounded-sm">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="pdpApproved"
                  checked={formData.pdpApproved}
                  onChange={handleChange}
                  className="mt-0.5 w-3.5 h-3.5 accent-[#C5A880] rounded-xs cursor-pointer shrink-0"
                />
                <span className="text-[11px] text-[#4B5563] leading-relaxed">
                  {language === "EN"
                    ? "I consent to the secure handling of my inquiry under Law No. 27/2022 (PDP Act) and Article 19 Advocates Act."
                    : "Saya menyetujui pemrosesan data identitas dan perkara ini sesuai ketentuan UU No. 27/2022 (UU PDP) dan Pasal 19 UU Advokat."}
                </span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#121316] hover:bg-[#1B1D22] text-[#C5A880] font-bold text-xs uppercase tracking-widest rounded-sm transition-all border-2 border-[#C5A880] flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {language === "EN"
                    ? "Confirm & Connect to WhatsApp Admin"
                    : "Konfirmasi & Lanjutkan ke WhatsApp Admin"}
                </span>
              </button>
            </div>
          </form>

          <div className="pt-1 text-center">
            <span className="text-[10px] text-[#6B7280] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
              <span>Kerahasiaan data dilindungi Hak Imunitas Profesi Advokat</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}