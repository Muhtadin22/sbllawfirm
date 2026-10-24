"use client";

import React, { useState } from "react";
import { X, Lock, ShieldCheck, KeyRound, Server, AlertCircle, ArrowRight } from "lucide-react";

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [clientId, setClientId] = useState("");
  const [passkey, setPasskey] = useState("");
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  if (!isOpen) return null;

  const handleLoginDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDemoNotice(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121316]/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FFFFFF] rounded-sm shadow-2xl max-w-md w-full border-2 border-[#C5A880] relative overflow-hidden">
        {/* Header Monolitik */}
        <div className="bg-[#121316] p-6 text-white border-b-2 border-[#C5A880] relative">
          <button
            onClick={() => {
              setShowDemoNotice(false);
              onClose();
            }}
            className="absolute top-4 right-4 text-[#C5A880] hover:text-white p-1 border border-[#C5A880]/30 rounded-sm transition-colors cursor-pointer"
            aria-label="Tutup Portal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#1B1D22] border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880] block">
                Terkoneksi Enkripsi AES-256
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Client Case Document Gateway
              </h3>
            </div>
          </div>
        </div>

        {/* Isi Form Login Gateway */}
        <div className="p-6 space-y-5 bg-[#FAF9F6]">
          <div className="p-3 bg-[#121316] text-[#FAF9F6] rounded-sm border border-[#C5A880]/50 text-xs flex items-start gap-2.5">
            <Server className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <span className="text-[11px] leading-relaxed text-[#D1D5DB]">
              Gerbang aman khusus Klien Aktif untuk meninjau *Legal Opinion*, berkas pembuktian peradilan, dan jadwal sidang secara *real-time*.
            </span>
          </div>

          {showDemoNotice && (
            <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-sm text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Mode Pratinjau Kredensial:</strong>
                Kunci akses enkripsi diterbitkan eksklusif bagi Klien setelah penandatanganan Surat Perjanjian Jasa Hukum (SPJH) resmi.
              </div>
            </div>
          )}

          <form onSubmit={handleLoginDemo} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1.5">
                Client Reference ID (Nomor Induk Klien)
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: CLT-SCBD-2026-089"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1.5">
                Encrypted Passkey / Kunci Enkripsi
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••••••"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-white rounded-sm border border-[#C5A880] focus:border-[#121316] outline-none font-mono"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#121316] hover:bg-[#1B1D22] text-[#C5A880] font-bold text-xs uppercase tracking-widest rounded-sm transition-all border-2 border-[#C5A880] flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <KeyRound className="w-4 h-4" />
                <span>Buka Berkas Perkara Terenkripsi</span>
              </button>
            </div>
          </form>

          <div className="pt-2 text-center">
            <span className="text-[10px] text-[#6B7280] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Otorisasi Hak Imunitas Dokumen UU Advokat No. 18/2003</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}