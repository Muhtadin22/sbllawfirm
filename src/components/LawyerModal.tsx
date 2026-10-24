"use client";

import React from "react";
import { X, GraduationCap, Award, Briefcase, CalendarCheck, ShieldCheck } from "lucide-react";
import { Attorney } from "@/data/lawFirmData";

interface LawyerModalProps {
  lawyer: Attorney | null;
  onClose: () => void;
  onBookConsultation: (lawyerName: string) => void;
}

export default function LawyerModal({
  lawyer,
  onClose,
  onBookConsultation,
}: LawyerModalProps) {
  if (!lawyer) return null;

  const isAdvocate =
    lawyer.role !== "Senior Paralegal" && lawyer.role !== "Paralegal & Legal Researcher";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121316]/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFFFF] rounded-sm shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#2A2E37] relative">
        {/* Header Bar Monolitik */}
        <div className="bg-[#121316] p-6 text-white relative border-b-2 border-[#B87333]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#B87333] p-1 transition-colors cursor-pointer"
            aria-label="Tutup Profil"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-sm border border-[#B87333]/40 shadow-md"
            />
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#1B1D22] text-[#B87333] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-1.5 border border-[#B87333]/30">
                {lawyer.role}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {lawyer.name}
              </h3>
              <p className="text-xs text-[#E8CBB3] mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" />
                <span>
                  {isAdvocate ? `Lisensi Resmi: ${lawyer.peradiNia}` : lawyer.peradiNia}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Konten Profil Lengkap */}
        <div className="p-6 space-y-6">
          {/* Biografi Eksekutif */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#121316] mb-2 border-b border-[#E5E7EB] pb-1">
              Biografi Profesional
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              {lawyer.bio}
            </p>
          </div>

          {/* Fokus Keahlian */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#121316] mb-2 border-b border-[#E5E7EB] pb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#B87333]" />
              <span>Keahlian & Fokus Praktik</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {lawyer.specialization.map((spec: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#F9FAFB] text-[#121316] text-xs font-medium rounded-sm border border-[#E5E7EB]"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Pendidikan Formal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#121316] mb-2 border-b border-[#E5E7EB] pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#B87333]" />
              <span>Latar Belakang Pendidikan Hukum</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#4B5563]">
              {lawyer.education.map((edu: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#B87333] font-bold">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pengalaman Penanganan Kasus / Portofolio Riset */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#121316] mb-2 border-b border-[#E5E7EB] pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#B87333]" />
              <span>
                {isAdvocate ? "Pengalaman Penanganan Perkara Pilihan" : "Dukungan Proyek & Riset Kasus"}
              </span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#4B5563]">
              {lawyer.casesHandled.map((caseItem: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#B87333] font-bold">✓</span>
                  <span>{caseItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onBookConsultation(lawyer.name);
              }}
              className="w-full py-3.5 bg-[#B87333] hover:bg-[#A06228] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>Jadwalkan Konsultasi Terkait Profil Ini</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}