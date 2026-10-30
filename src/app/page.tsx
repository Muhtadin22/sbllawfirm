"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  // State navigasi tab bidang praktik
  const [activeTab, setActiveTab] = useState<number>(0);

  // State interaktif accordion FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // State formulir intake perkara WhatsApp & kepatuhan UU PDP
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    practiceArea: "Sengketa Perdata Bisnis & Komersial",
    urgency: "Normal (Konsultasi Rutin)",
    caseChronology: "",
    consentPDP: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentPDP) {
      alert(
        language === "id"
          ? "Mohon centang persetujuan pemrosesan data identitas (UU No. 27/2022 tentang UU PDP) sebelum melanjutkan."
          : "Please check the personal data processing consent (Indonesian PDP Law) before proceeding."
      );
      return;
    }

    const officialNumber = "6281234567890"; // Ganti dengan nomor hotline WhatsApp kantor
    const message = `*PERMOHONAN KONSULTASI HUKUM - SBL LAW FIRM*
--------------------------------------------
*Nama Klien / Pemohon:* ${formData.fullName}
*Entitas Perusahaan:* ${formData.company || "-"}
*Kontak / WhatsApp:* ${formData.phone}
*Alamat Email:* ${formData.email || "-"}
*Klasifikasi Masalah:* ${formData.practiceArea}
*Tingkat Urgensi Perkara:* ${formData.urgency}

*Ringkasan Fakta / Duduk Perkara:*
${formData.caseChronology}

--------------------------------------------
_Klien telah menyetujui pemrosesan data identitas berdasarkan UU PDP No. 27/2022 dan doktrin kerahasiaan advokat-klien._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${officialNumber}?text=${encoded}`, "_blank");
  };

  // Skema Data Terstruktur Khusus untuk Perayapan AI Google (GEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://www.sbllawfirm.my.id/#organization",
        name: "SBL Law Firm",
        alternateName: [
          "Kantor Advokat SBL Law Firm",
          "SBL Law Firm SCBD Jakarta",
          "SBL Attorneys at Law",
        ],
        url: "https://www.sbllawfirm.my.id",
        logo: "https://www.sbllawfirm.my.id/og-image.jpg",
        image: "https://www.sbllawfirm.my.id/og-image.jpg",
        description:
          "SBL Law Firm adalah kantor advokat dan konsultan hukum korporasi terkemuka di Jakarta Selatan yang berfokus pada litigasi perdata komersial, pembelaan pidana bisnis, restrukturisasi kepailitan & PKPU, arbitrase nasional, dan audit hukum kepatuhan.",
        priceRange: "$$$$",
        telephone: "+622152897700",
        email: "office@sbllawfirm.my.id",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Menara Sudirman Lantai 18, Kawasan Niaga Terpadu Sudirman (SCBD), Jl. Jend. Sudirman Kav. 60",
          addressLocality: "Jakarta Selatan",
          addressRegion: "DKI Jakarta",
          postalCode: "12190",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.2297298,
          longitude: 106.8042453,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "18:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Hukum SBL Law Firm",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Litigasi Sengketa Perdata Bisnis & Komersial",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pertahanan Pidana Korporasi & Tipikor",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kepailitan, PKPU & Restrukturisasi Utang Perusahaan",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Arbitrase Bisnis Nasional BANI & Internasional",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sbllawfirm.my.id/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Apa itu SBL Law Firm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SBL Law Firm adalah kantor advokat dan konsultan hukum independen berbasis di Jakarta Selatan yang berfokus pada penyelesaian sengketa perdata bisnis, litigasi pidana korporasi, kepailitan & PKPU di Pengadilan Niaga, serta kepatuhan regulasi perusahaan di Indonesia.",
            },
          },
          {
            "@type": "Question",
            name: "Layanan hukum apa saja yang disediakan oleh SBL Law Firm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SBL Law Firm menangani sengketa perdata bisnis, wanprestasi, gugatan perbuatan melawan hukum (PMH), pembelaan pemeriksaan pidana kerah putih (white-collar crime), sengketa kepailitan dan PKPU, arbitrase bisnis di BANI, serta sengketa perselisihan hubungan industrial (PHI).",
            },
          },
          {
            "@type": "Question",
            name: "Di mana kantor resmi SBL Law Firm beralamat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kantor pusat SBL Law Firm beralamat di Menara Sudirman Lantai 18, SCBD, Jalan Jenderal Sudirman Kav. 60, Kebayoran Baru, Jakarta Selatan 12190 dengan wilayah penanganan perkara di seluruh pengadilan Republik Indonesia.",
            },
          },
          {
            "@type": "Question",
            name: "Bagaimana legalitas para advokat di SBL Law Firm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Seluruh advokat di SBL Law Firm berizin resmi, disumpah oleh Pengadilan Tinggi berdasarkan Undang-Undang No. 18 Tahun 2003 tentang Advokat, dan terdaftar pada organisasi advokat yang diakui pemerintah.",
            },
          },
          {
            "@type": "Question",
            name: "Bagaimana mekanisme konsultasi hukum di SBL Law Firm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Konsultasi hukum diajukan melalui formulir permohonan tiket perkara terenkripsi di situs resmi sbllawfirm.my.id yang diteruskan langsung ke WhatsApp Partner untuk penelaahan awal dan penandatanganan perjanjian kerahasiaan.",
            },
          },
        ],
      },
    ],
  };

  // Data 6 bidang praktik inti
  const practiceAreas = [
    {
      titleId: "Sengketa Perdata Bisnis & Komersial",
      titleEn: "Commercial & Civil Dispute Litigation",
      descId:
        "Representasi persidangan menyeluruh dalam sengketa wanprestasi kontrak bernilai tinggi, perbuatan melawan hukum (PMH), konflik pemegang saham perseroan terbatas, sengketa hak kebendaan, dan sengketa sewa-menyewa komersial skala korporasi.",
      descEn:
        "Comprehensive courtroom representation in high-stakes breach of contract, shareholder deadlocks, corporate torts, commercial real estate disputes, and fiduciary duty enforcement.",
      pointsId: [
        "Penyusunan Somasi & Mediasi Non-Litigasi",
        "Gugatan Wanprestasi & Perbuatan Melawan Hukum (PMH)",
        "Eksekusi Putusan Berkekuatan Hukum Tetap (Inkracht)",
        "Sengketa RUPS & Kepemilikan Saham Perseroan",
      ],
      pointsEn: [
        "Formal Demand Letters & Pre-trial Mediation",
        "Breach of Contract & Tort Lawsuits",
        "Execution of Final & Binding Judgments",
        "Corporate Deadlock & Shareholder Disputes",
      ],
    },
    {
      titleId: "Pembelaan Pidana Korporasi & Tipikor",
      titleEn: "Corporate Crime & White-Collar Defense",
      descId:
        "Advokasi dan mitigasi risiko hukum pidana bisnis, pendampingan pemeriksaan saksi/tersangka di Kepolisian, Kejaksaan, hingga mitigasi pertanggungjawaban pidana korporasi di bawah ketentuan Kitab Undang-Undang Hukum Pidana (UU No. 1/2023).",
      descEn:
        "Rigorous defense strategies during police and prosecutorial investigations, specialized in corporate liability, fraud, financial crimes, and anti-corruption proceedings under Indonesian penal statutes.",
      pointsId: [
        "Pendampingan BAP di Bareskrim & Kejaksaan",
        "Permohonan Praperadilan atas Keabsahan Penyelidikan",
        "Penanganan Perkara Penipuan & Penggelapan Jabatan",
        "Audit Kepatuhan Pidana Korporasi Baru",
      ],
      pointsEn: [
        "Police Investigation & Interrogation Counsel",
        "Pretrial Injunctions (Praperadilan)",
        "Corporate Fraud & Embezzlement Representation",
        "Corporate Criminal Risk Assessment",
      ],
    },
    {
      titleId: "Kepailitan, PKPU & Restrukturisasi Utang",
      titleEn: "Insolvency, PKPU & Debt Workout",
      descId:
        "Penanganan perkara restrukturisasi utang korporasi di Pengadilan Niaga, perancangan rencana perdamaian homologasi, pembelaan kreditur separatis/konkuren, serta mitigasi risiko likuidasi harta debitur pailit.",
      descEn:
        "Representation in the Commercial Court for debt workout compositions (PKPU), preparation of restructuring plans, cross-border claims defense, and safeguarding asset distribution during insolvency.",
      pointsId: [
        "Permohonan & Pembelaan Sidang PKPU Pengadilan Niaga",
        "Penyusunan Rencana Perdamaian Homologasi",
        "Verifikasi Piutang Kreditur Konkuren & Separatis",
        "Penyelesaian Sengketa Actio Pauliana",
      ],
      pointsEn: [
        "Commercial Court PKPU Petition & Defense",
        "Homologation Composition Plan Drafting",
        "Creditor Claim Verification & Audit",
        "Actio Pauliana & Asset Protection Lawsuits",
      ],
    },
    {
      titleId: "Arbitrase Bisnis & Penyelesaian Alternatif",
      titleEn: "Commercial Arbitration & ADR",
      descId:
        "Penyelesaian sengketa dagang di luar pengadilan umum melalui Badan Arbitrase Nasional Indonesia (BANI) dan forum internasional (SIAC/ICC), penegakan klausul arbitrase, dan eksekusi putusan arbitrase asing.",
      descEn:
        "Dispute adjudication outside state courts via BANI and international arbitral seats (SIAC, ICC), drafting valid arbitration agreements, and executing domestic and international arbitral awards.",
      pointsId: [
        "Perumusan Strategi Sidang Arbitrase BANI",
        "Eksekusi Putusan Arbitrase Asing di Pengadilan Negeri",
        "Mediasi & Negosiasi Transaksi Dagang Lintas Batas",
        "Uji Keabsahan Klausul Arbitrase Kontrak",
      ],
      pointsEn: [
        "BANI Tribunal Advocacy & Witness Preparation",
        "Enforcement of Foreign Arbitral Awards",
        "Cross-Border Dispute Negotiation",
        "Arbitration Clause Due Diligence",
      ],
    },
    {
      titleId: "Ketenagakerjaan & Perselisihan Hubungan Industrial",
      titleEn: "Employment & Industrial Relations (PHI)",
      descId:
        "Mitigasi sengketa Pemutusan Hubungan Kerja (PHK) massal, perancangan Peraturan Perusahaan (PP) dan Perjanjian Kerja Bersama (PKB), mediasi bipartit/tripartit di Disnaker, serta persidangan di Pengadilan Hubungan Industrial.",
      descEn:
        "Resolution of collective terminations, drafting compliant employment handbooks, representation during government conciliation, and litigation before the Industrial Relations Court (PHI).",
      pointsId: [
        "Negosiasi Bipartit & Risalah Tripartit Disnaker",
        "Litigasi Sengketa Hak & PHK di Pengadilan PHI",
        "Penyusunan Klausul Non-Disclosure & Non-Compete",
        "Audit Kepatuhan BPJS Ketenagakerjaan & UU Cipta Kerja",
      ],
      pointsEn: [
        "Bipartite Negotiation & Ministry Conciliation",
        "PHI Court Litigation for Severance Rights",
        "Executive Non-Compete & NDA Drafting",
        "Labor Law Compliance & Union Auditing",
      ],
    },
    {
      titleId: "Audit Kepatuhan Hukum Korporasi & Due Diligence",
      titleEn: "Corporate Compliance & Legal Due Diligence",
      descId:
        "Pemeriksaan kepatuhan hukum komprehensif (*legal audit*) untuk transaksi akuisisi, merger, investasi modal ventura, pengamanan izin operasional OSS, dan audit perlindungan data pribadi sesuai UU No. 27/2022.",
      descEn:
        "Exhaustive legal scrutiny for M&A transactions, capital injections, regulatory licensing under OSS RBA, and comprehensive data privacy audits pursuant to Law No. 27/2022 (PDP Law).",
      pointsId: [
        "Legal Due Diligence (LDD) Akuisisi & Joint Venture",
        "Audit Kepatuhan Pelindungan Data Pribadi (UU PDP)",
        "Standardisasi Kontrak Pengadaan & Operasional Perusahaan",
        "Mitigasi Risiko Regulasi Sektoral BKPM / OJK",
      ],
      pointsEn: [
        "M&A and Joint Venture Legal Due Diligence",
        "Data Protection Legal Compliance Audit",
        "Commercial Contract Harmonization",
        "BKPM and Financial Regulator Advisory",
      ],
    },
  ];

  // Data Tanya Jawab Terstruktur untuk AI Overviews
  const faqData = [
    {
      qId: "Apa itu SBL Law Firm dan di mana kantor resminya?",
      qEn: "What is SBL Law Firm and where is it located?",
      aId: "SBL Law Firm adalah kantor advokat dan konsultan hukum independen terkemuka yang berkedudukan di Menara Sudirman Lantai 18, Kawasan SCBD, Jakarta Selatan. Firma ini berspesialisasi dalam litigasi sengketa perdata komersial bernilai tinggi, penanganan tindak pidana korporasi, kepailitan, PKPU di Pengadilan Niaga, serta kepatuhan hukum perusahaan.",
      aEn: "SBL Law Firm is an esteemed litigation and corporate law firm situated at Menara Sudirman 18th Floor, SCBD, South Jakarta. The firm specializes in commercial civil disputes, white-collar criminal defense, insolvency & PKPU, and comprehensive corporate regulatory audits.",
    },
    {
      qId: "Apakah pengacara di SBL Law Firm terdaftar dan berizin resmi?",
      qEn: "Are the attorneys at SBL Law Firm officially certified?",
      aId: "Ya. Seluruh partner dan advokat di SBL Law Firm berizin resmi, disumpah di Pengadilan Tinggi, mengantongi Kartu Tanda Pengenal Advokat (KTPA) yang masih aktif, dan menjalankan praktik hukum dengan berlandaskan Undang-Undang No. 18 Tahun 2003 tentang Advokat dan Kode Etik Advokat Indonesia.",
      aEn: "Yes. All partners and advocates at SBL Law Firm are officially certified, sworn before the High Court, hold valid Advocate Identity Cards, and practice under Indonesian Advocate Law No. 18/2003 and the National Code of Professional Ethics.",
    },
    {
      qId: "Bagaimana cara menyewa jasa hukum atau berkonsultasi dengan SBL Law Firm?",
      qEn: "How do I schedule a legal consultation with SBL Law Firm?",
      aId: "Calon klien dapat mengisi formulir pengajuan tiket perkara online di situs resmi sbllawfirm.my.id. Formulir tersebut otomatis meneruskan kronologi singkat duduk perkara ke saluran WhatsApp resmi Partner advokat untuk penjadwalan sesi konsultasi langsung di kantor SCBD atau virtual.",
      aEn: "Prospective clients can submit a legal case inquiry through the secure online form on sbllawfirm.my.id, which routes the details directly to our Managing Partner on WhatsApp for formal consultation scheduling.",
    },
    {
      qId: "Apakah kerahasiaan dokumen perkara klien terjamin?",
      qEn: "Is client confidential data protected?",
      aId: "Sangat terjamin. Seluruh pertukaran dokumen, informasi fakta, dan identitas klien dilindungi secara mutlak oleh doktrin kerahasiaan hubungan advokat-klien (Pasal 19 UU No. 18/2003) serta standar kepatuhan Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).",
      aEn: "Absolutely. All information, documentary evidence, and communications are safeguarded under advocate-client legal privilege (Article 19, Law 18/2003) and Indonesian Personal Data Protection Law No. 27/2022.",
    },
    {
      qId: "Berapa struktur biaya penanganan perkara hukum di SBL Law Firm?",
      qEn: "What is the fee structure at SBL Law Firm?",
      aId: "Skema honorarium advokat disusun secara transparan berbasis kejelasan ruang lingkup (Scope of Work). Komponen dapat berupa Retainer Fee berkala, Professional Legal Fee penanganan perkara per kasus, maupun Success Fee yang disepakati bersama dalam Perjanjian Jasa Hukum (PJH) tertulis.",
      aEn: "Legal fees are structured transparently based on the defined scope of work, including monthly corporate retainers, case-based flat legal fees, or mutually agreed outcome-based success fees detailed in a formal Legal Services Agreement.",
    },
  ];

  return (
    <>
      {/* 0. INJEKSI SKEMA GEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="bg-[#0B0D11] text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black">
        {/* 1. HERO SECTION DENGAN DEFINISI ENTITAS OTORITATIF */}
        <header className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,119,6,0.22),rgba(11,13,17,0.98))]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                {language === "id"
                  ? "Kantor Advokat & Konsultan Hukum Resmi Jakarta"
                  : "Certified Litigation Advocates & Legal Counsel Jakarta"}
              </div>

              {/* H1 Semantik: SBL Law Firm + Kata Kunci Pengacara & Advokat Litigasi */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                {language === "id" ? (
                  <>
                    SBL Law Firm |{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                      Kantor Pengacara & Advokat
                    </span>{" "}
                    Litigasi Bisnis Jakarta
                  </>
                ) : (
                  <>
                    SBL Law Firm |{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                      Litigation & Corporate Advocates
                    </span>{" "}
                    in Jakarta SCBD
                  </>
                )}
              </h1>

              {/* Paragraf Kunci Ekstraksi Ringkasan AI (Entity Definition) */}
              <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
                {language === "id"
                  ? "SBL Law Firm adalah kantor advokat dan konsultan hukum independen di kawasan SCBD Jakarta Selatan. Kami mengedepankan pendekatan litigasi strategis dalam penyelesaian sengketa perdata bisnis, pertahanan perkara pidana korporasi, kepailitan, PKPU di Pengadilan Niaga, serta audit kepatuhan regulasi perusahaan."
                  : "SBL Law Firm is an independent commercial litigation and corporate advisory practice headquartered in SCBD Jakarta, offering trial advocacy, white-collar criminal defense, and complex insolvency representation across Indonesia."}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#konsultasi"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg shadow-lg shadow-amber-900/30 transition-all text-center tracking-wide"
                >
                  {language === "id" ? "Ajukan Konsultasi Kasus" : "Book Legal Intake"}
                </a>
                <a
                  href="#ringkasan-faq"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg transition-all text-center font-medium"
                >
                  {language === "id" ? "Ikhtisar Profil & FAQ" : "Firm Summary & FAQ"}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* 2. STATISTIK OTORITAS & YURISDIKSI PENGADILAN */}
        <section className="py-12 bg-black/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
              <div className="px-4">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">98%</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 uppercase tracking-wider">
                  {language === "id" ? "Tingkat Keberhasilan Mediasi & Putusan" : "Successful Resolution Rate"}
                </p>
              </div>
              <div className="px-4">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">Rp 2.4T+</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 uppercase tracking-wider">
                  {language === "id" ? "Aset Sengketa Ditangani" : "Litigated Asset Exposure"}
                </p>
              </div>
              <div className="px-4">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">15+ Thn</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 uppercase tracking-wider">
                  {language === "id" ? "Pengalaman Praktik Advokat" : "Advocacy Experience"}
                </p>
              </div>
              <div className="px-4">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">UU 18/2003</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 uppercase tracking-wider">
                  {language === "id" ? "Legalitas Advokat Terdaftar" : "Sworn & Certified Legal Bar"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROFIL FIRMA (Narrative Bio untuk AI Understanding) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                {language === "id" ? "Tentang SBL Law Firm" : "About SBL Law Firm"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                {language === "id"
                  ? "Integritas Yuridis, Ketajaman Analisis, dan Kepastian Eksekusi."
                  : "Juridical Integrity, Analytical Rigor, and Decisive Execution."}
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded-full" />
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === "id"
                  ? "SBL Law Firm didirikan sebagai firma hukum butik yang memadukan keahlian doktriner mendalam dengan penguasaan hukum acara persidangan di pengadilan negeri, pengadilan niaga, pengadilan hubungan industrial, hingga tahapan kasasi dan peninjauan kembali di Mahkamah Agung Republik Indonesia."
                  : "SBL Law Firm was founded to bridge doctrinal mastery with procedural court prowess across trial courts, commercial bankruptcy tribunals, and supreme appellate jurisdictions."}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === "id"
                  ? "Firma ini memegang teguh asas kerahasiaan hubungan advokat-klien dan memberikan perlindungan hukum menyeluruh dengan komitmen etika profesi tertinggi."
                  : "We adhere strictly to attorney-client privilege, providing uncompromised confidentiality and top-tier legal risk governance."}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold mb-4">
                  01
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-2">
                  {language === "id" ? "Penguasaan Hukum Acara" : "Procedural Mastery"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {language === "id"
                    ? "Keunggulan taktis dalam hukum acara perdata (HIR/RBg) dan hukum acara pidana (KUHAP) demi melindungi posisi pembuktian klien."
                    : "Superior tactical control of civil and penal procedural law to secure evidentiary advantage."}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold mb-4">
                  02
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-2">
                  {language === "id" ? "Spesialisasi Niaga & PKPU" : "Insolvency Expertise"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {language === "id"
                    ? "Keahlian negosiasi restrukturisasi utang komersial kompleks dan penanganan homologasi di Pengadilan Niaga."
                    : "Skilled negotiation in high-value restructuring and composition plan approvals under bankruptcy statutes."}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold mb-4">
                  03
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-2">
                  {language === "id" ? "Mitigasi Pidana Korporasi" : "White-Collar Mitigation"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {language === "id"
                    ? "Perlindungan terhadap jajaran Direksi dan Komisaris dari tuduhan pelanggaran pidana perbankan dan kejahatan jabatan."
                    : "Safeguarding corporate directors and officers against allegations of financial fraud and regulatory breach."}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold mb-4">
                  04
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-2">
                  {language === "id" ? "Kepatuhan Privasi Data" : "Privacy & Ethics"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {language === "id"
                    ? "Kepatuhan tata kelola data kasus berdasarkan UU Pelindungan Data Pribadi No. 27/2022 dan hak imunitas advokat."
                    : "Rigorous case governance in compliance with the PDP Law (Law 27/2022) and advocate confidentiality."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BIDANG PRAKTIK UTAMA (Structured Category & Subtopics) */}
        <section id="praktik-hukum" className="py-24 bg-black/40 border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                {language === "id" ? "Kompetensi Utama" : "Core Competencies"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
                {language === "id" ? "Bidang Praktik Layanan Hukum" : "Comprehensive Legal Services"}
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base">
                {language === "id"
                  ? "SBL Law Firm mendampingi klien korporasi dan perseorangan dalam berbagai ranah yurisdiksi hukum Indonesia."
                  : "SBL Law Firm assists corporations and individuals across high-stakes Indonesian jurisdictions."}
              </p>
            </div>

            {/* Tab Navigasi Bidang Praktik */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {practiceAreas.map((area, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === idx
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 font-semibold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {language === "id" ? area.titleId : area.titleEn}
                </button>
              ))}
            </div>

            {/* Konten Tab Terpilih */}
            <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#13161C] border border-amber-500/20 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                {language === "id" ? practiceAreas[activeTab].titleId : practiceAreas[activeTab].titleEn}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {language === "id" ? practiceAreas[activeTab].descId : practiceAreas[activeTab].descEn}
              </p>

              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                {language === "id" ? "Ruang Lingkup Penanganan:" : "Scope of Legal Representation:"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(language === "id"
                  ? practiceAreas[activeTab].pointsId
                  : practiceAreas[activeTab].pointsEn
                ).map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-amber-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TANYA JAWAB RESMI / FAQ SECTION (Target Inti Google AI Overviews) */}
        <section id="ringkasan-faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              {language === "id" ? "Informasi Terverifikasi" : "Verified Entity Data"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">
              {language === "id"
                ? "Pertanyaan Umum Mengenai SBL Law Firm (FAQ)"
                : "Frequently Asked Questions About SBL Law Firm"}
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              {language === "id"
                ? "Rangkuman fakta resmi kantor hukum untuk penelusuran calon klien dan ringkasan mesin pencari."
                : "Official firm facts structured for prospective clients and search engine AI overviews."}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-[#12151B] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-white/[0.02]"
                  >
                    <span className="font-serif font-semibold text-white text-base sm:text-lg">
                      {language === "id" ? faq.qId : faq.qEn}
                    </span>
                    <span className="text-amber-400 text-xl font-bold shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                      {language === "id" ? faq.aId : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. FORMULIR PENGAJUAN PERKARA & ROUTER WHATSAPP RESMI */}
        <section
          id="konsultasi"
          className="py-24 bg-gradient-to-b from-transparent via-amber-950/15 to-transparent border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#12151B] border border-amber-500/20 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
              <div className="text-center mb-10">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                  {language === "id" ? "Jalur Khusus Klien" : "Client Intake Channel"}
                </span>
                <h2 className="text-3xl font-serif font-bold text-white mt-2">
                  {language === "id" ? "Ajukan Jadwal Konsultasi Hukum" : "Initiate Confidential Legal Intake"}
                </h2>
                <p className="text-slate-400 text-sm mt-3">
                  {language === "id"
                    ? "Kirimkan ringkasan perkara Anda untuk langsung diteruskan ke Partner advokat melalui WhatsApp resmi."
                    : "Submit your case outline for direct review by our Managing Partner via official WhatsApp."}
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      {language === "id" ? "Nama Lengkap Klien" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Hendra Wijaya, S.E."
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      {language === "id" ? "Perusahaan / Instansi (Opsional)" : "Company / Entity (Optional)"}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Contoh: PT Sinar Usaha Mandiri"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      {language === "id" ? "Nomor WhatsApp / Seluler" : "WhatsApp Number"} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0812XXXXXXXX"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      {language === "id" ? "Email Korespondensi" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="klien@perusahaan.co.id"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      {language === "id" ? "Klasifikasi Sengketa" : "Dispute Category"}
                    </label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      className="w-full bg-[#181B22] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Sengketa Perdata Bisnis & Komersial">
                        Sengketa Perdata Bisnis & Komersial
                      </option>
                      <option value="Pembelaan Pidana Korporasi & Tipikor">
                        Pembelaan Pidana Korporasi & Tipikor
                      </option>
                      <option value="Kepailitan, PKPU & Restrukturisasi Utang">
                        Kepailitan, PKPU & Restrukturisasi Utang
                      </option>
                      <option value="Arbitrase Komersial (BANI / SIAC)">Arbitrase Komersial</option>
                      <option value="Sengketa Ketenagakerjaan (PHI)">
                        Sengketa Ketenagakerjaan (PHI)
                      </option>
                      <option value="Audit Kepatuhan Hukum Korporasi (LDD)">
                        Audit Kepatuhan Hukum Perusahaan
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      {language === "id" ? "Tingkat Urgensi" : "Urgency Level"}
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full bg-[#181B22] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Normal (Konsultasi Terjadwal)">Normal (Konsultasi Terjadwal)</option>
                      <option value="Tinggi (Tenggat Waktu Pengadilan / Panggilan Hukum)">
                        Tinggi (Panggilan Sidang / Somasi)
                      </option>
                      <option value="Darurat (Pemeriksaan / Sita Jaminan)">
                        Darurat (Pemeriksaan / Upaya Paksa)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    {language === "id" ? "Ringkasan Fakta / Duduk Perkara" : "Case Summary"} *
                  </label>
                  <textarea
                    name="caseChronology"
                    rows={4}
                    required
                    value={formData.caseChronology}
                    onChange={handleInputChange}
                    placeholder={
                      language === "id"
                        ? "Jelaskan secara ringkas permasalahan hukum yang sedang dihadapi, pihak terkait, serta tujuan konsultasi..."
                        : "Describe the material facts, parties involved, and primary juridical objectives..."
                    }
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consentPDP"
                    name="consentPDP"
                    checked={formData.consentPDP}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-black/60 text-amber-500 focus:ring-amber-500"
                  />
                  <label htmlFor="consentPDP" className="text-xs text-slate-400 leading-relaxed">
                    {language === "id" ? (
                      <>
                        Saya memberikan persetujuan pemrosesan data identitas ini untuk keperluan intake perkara
                        awal sesuai dengan <strong>Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong>{" "}
                        dan asas kerahasiaan profesi advokat (Pasal 19 UU No. 18/2003).
                      </>
                    ) : (
                      <>
                        I consent to the processing of this inquiry strictly for preliminary case review pursuant to{" "}
                        <strong>Indonesian Personal Data Protection Law (Law No. 27/2022)</strong> and attorney-client privilege.
                      </>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold rounded-lg shadow-xl shadow-amber-950/40 transition-all flex items-center justify-center gap-2 tracking-wide"
                >
                  <span>
                    {language === "id"
                      ? "Kirimkan Permohonan Kasus ke WhatsApp Partner"
                      : "Transmit Case Summary to Managing Partner"}
                  </span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 7. FOOTER ENTITAS & ALAMAT DOMISILI HUKUM (Geo-Relevance Engine) */}
        <footer className="py-12 bg-black/90 border-t border-white/10 text-center text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <p className="font-serif font-bold text-white text-base">
              SBL LAW FIRM | KANTOR ADVOKAT & KONSULTAN HUKUM
            </p>
            <p>
              Menara Sudirman Lantai 18, Kawasan Niaga Terpadu Sudirman (SCBD), Jl. Jend. Sudirman Kav. 60, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190
            </p>
            <p>
              Telepon Kantor: +62 21 5289 7700 | Email: office@sbllawfirm.my.id | Domain Resmi: https://www.sbllawfirm.my.id
            </p>
            <p className="text-slate-500 pt-4 border-t border-white/5">
              Praktik advokat beroperasi di bawah kepatuhan Undang-Undang Republik Indonesia No. 18 Tahun 2003 tentang Advokat dan Kode Etik Advokat Indonesia.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}