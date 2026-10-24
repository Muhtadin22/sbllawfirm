"use client";

import React, { useState } from "react";
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck, Send, RotateCcw, ArrowRight } from "lucide-react";
import { FIRM_CONFIG } from "@/data/lawFirmData";

interface Question {
  id: number;
  title: string;
  options: { label: string; score: number; note: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    title: "Apakah terdapat kontrak tertulis resmi yang mendasari hubungan hukum Anda dengan pihak lawan?",
    options: [
      { label: "Ya, ada Akta Notaris / Kontrak Standar Komersial lengkap bertanda tangan", score: 3, note: "Posisi pembuktian materiil sangat kuat." },
      { label: "Hanya bukti korespondensi digital (Surel, Chat WA, Invoice & Bukti Transfer)", score: 2, note: "Memerlukan audit keabsahan alat bukti elektronik (UU ITE)." },
      { label: "Perjanjian lisan tanpa dokumen tertulis yang tegas", score: 1, note: "Tingkat risiko tinggi; pembuktian bertumpu pada saksi dan pengakuan." },
    ],
  },
  {
    id: 2,
    title: "Bagaimana pengaturan klausul penyelesaian sengketa (Dispute Resolution Clause) dalam perjanjian Anda?",
    options: [
      { label: "Tegas memilih domisili Pengadilan Negeri tertentu", score: 3, note: "Yurisdiksi peradilan umum jelas dan siap dieksekusi." },
      { label: "Menyepakati klausul Arbitrase (BANI / SIAC)", score: 3, note: "Kompetensi absolut berada di majelis arbitrase, bukan pengadilan negeri." },
      { label: "Tidak diatur secara eksplisit dalam dokumen", score: 1, note: "Rentan terjadi perdebatan eksepsi kompetensi relatif pihak lawan." },
    ],
  },
  {
    id: 3,
    title: "Apakah Anda telah menerima atau mengirimkan Surat Peringatan Hukum (Somasi)?",
    options: [
      { label: "Sudah menerima somasi resmi dengan batas waktu (tenggat) aktif", score: 2, note: "Perlu jawaban somasi segera guna mencegah default hukum." },
      { label: "Sudah mengirim somasi namun pihak lawan tidak beritikad baik", score: 3, note: "Syarat wanprestasi telah terpenuhi; siap melangkah ke gugatan." },
      { label: "Belum pernah ada somasi; baru terjadi perdebatan lisan/informal", score: 1, note: "Langkah mediasi non-litigasi dan somasi pertama sangat disarankan." },
    ],
  },
  {
    id: 4,
    title: "Berapa estimasi nilai eksposur risiko atau kerugian finansial yang dipertaruhkan?",
    options: [
      { label: "Di atas Rp 1 Miliar / Aset Strategis Korporasi", score: 3, note: "Kategori Perkara Kompleks bernilai tinggi (High-Value Dispute)." },
      { label: "Rp 100 Juta – Rp 1 Miliar", score: 2, note: "Kategori Sengketa Komersial Menengah." },
      { label: "Di bawah Rp 100 Juta", score: 1, note: "Kategori Gugatan Sederhana atau Mediasi Konsolidasi." },
    ],
  },
];

export default function LegalHealthCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (score: number) => {
    const updated = [...selectedAnswers, score];
    setSelectedAnswers(updated);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  const totalScore = selectedAnswers.reduce((a, b) => a + b, 0);

  // Kategori Hasil Asesmen
  const getAssessmentResult = () => {
    if (totalScore >= 10) {
      return {
        level: "Kesiapan Yuridis Tinggi (High Legal Standing)",
        summary: "Dokumen bukti dan yurisdiksi Anda memiliki posisi tawar yang solid untuk menempuh somasi tegas maupun gugatan di peradilan/arbitrase.",
        color: "text-emerald-700 bg-emerald-50 border-emerald-300",
      };
    } else if (totalScore >= 7) {
      return {
        level: "Kesiapan Menengah — Memerlukan Mitigasi Bukti",
        summary: "Hubungan hukum Anda memiliki dasar yang cukup, namun memerlukan eksaminasi bukti elektronik dan somasi terukur guna menutup celah eksepsi pihak lawan.",
        color: "text-amber-800 bg-amber-50 border-amber-300",
      };
    } else {
      return {
        level: "Kesiapan Rentan — Tindakan Preventif Mendesak",
        summary: "Posisi pembuktian Anda memiliki kerentanan formal. Sangat disarankan menempuh negosiasi terikat akta notarial atau pendampingan audit dokumen darurat.",
        color: "text-rose-800 bg-rose-50 border-rose-300",
      };
    }
  };

  const result = getAssessmentResult();

  const handleSendToWhatsApp = () => {
    const msg =
`*HASIL ASESMEN KESIAPAN SENGKETA — SBL LAW FIRM*
------------------------------------------------
• *Skor Kesiapan:* ${totalScore} / 12 Poin
• *Status Indikasi:* ${result.level}
• *Catatan Awal:* ${result.summary}
------------------------------------------------
_Mohon jadwalkan penelaahan bukti perkara bersama Kuasa Hukum SBL Law Firm._`;

    const url = `https://wa.me/${FIRM_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#C5A880] rounded-sm p-6 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#C5A880]/40 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-[#121316] text-[#C5A880] border border-[#C5A880] flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B87333]">
              Alat Diagnostik Interaktif
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316]">
              Kalkulator Kesiapan Sengketa (Legal Health Check)
            </h3>
          </div>
        </div>

        {!isCompleted && (
          <span className="text-xs font-mono font-bold text-[#C5A880] bg-[#121316] px-3 py-1 rounded-sm border border-[#C5A880]">
            Pertanyaan {currentStep + 1} / {questions.length}
          </span>
        )}
      </div>

      {!isCompleted ? (
        <div className="space-y-6">
          <h4 className="font-serif text-base sm:text-lg font-bold text-[#121316] leading-relaxed">
            {questions[currentStep].title}
          </h4>

          <div className="grid grid-cols-1 gap-3.5">
            {questions[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(opt.score)}
                className="text-left p-4 rounded-sm border-2 border-[#E5E7EB] hover:border-[#C5A880] bg-[#FAF9F6] hover:bg-white transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-[#121316] group-hover:text-[#B87333] transition-colors">
                    {opt.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                </div>
                <span className="text-[11px] text-[#6B7280] block mt-1">
                  Catatan Prosedural: {opt.note}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className={`p-5 rounded-sm border-2 ${result.color}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-1">
              Hasil Diagnosis Posisi Hukum Awal:
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold mb-2">
              {result.level} (Skor Kesiapan: {totalScore} dari 12)
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {result.summary}
            </p>
          </div>

          <div className="p-4 bg-[#121316] text-[#FAF9F6] rounded-sm border border-[#C5A880] text-xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <span className="text-[11px] text-[#D1D5DB] leading-relaxed">
              Hasil asesmen ini didasarkan pada kalkulasi algoritma bukti awal dan tidak menggantikan telaah dokumen menyeluruh dalam Surat Pendapat Hukum (Legal Opinion) formal.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full sm:w-auto flex-1 py-3.5 px-6 bg-[#C5A880] hover:bg-[#b09268] text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm transition-all border border-[#C5A880] flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Hasil Diagnosis ke WhatsApp Partner</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto py-3.5 px-5 bg-[#FAF9F6] hover:bg-white text-[#121316] font-bold text-xs uppercase tracking-widest rounded-sm border border-[#E5E7EB] flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#C5A880]" />
              <span>Ulangi Asesmen</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}