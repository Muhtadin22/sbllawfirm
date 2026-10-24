export interface PracticeArea {
  id: string;
  title: string;
  category: "litigasi" | "korporasi";
  shortDesc: string;
  iconName: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  practiceArea: string;
  challenge: string;
  strategy: string;
  result: string;
  valueOrImpact: string;
}

export interface Attorney {
  id: string;
  name: string;
  role:
    | "Managing Partner"
    | "Senior Partner"
    | "Partner"
    | "Of Counsel"
    | "Senior Associate"
    | "Associate"
    | "Senior Paralegal"
    | "Paralegal & Legal Researcher";
  degree: string;
  peradiNia: string;
  specialization: string[];
  education: string[];
  bio: string;
  casesHandled: string[];
  imageUrl: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface CoreValueItem {
  title: string;
  desc: string;
  icon: string;
}

export interface WorkflowStepItem {
  step: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FIRM_CONFIG = {
  name: "SBL LAW FIRM",
  tagline: "Advocates & Legal Consultants",
  whatsappNumber: "6281234567890",
  phone: "+62 21 5289 7700",
  email: "info@sbllawfirm.com",
  emergencyHotline: "+62 811 9876 5432 (24/7 Kuasa Khusus Pidana)",
  address: "Menara Sudirman, Lantai 24, SCBD, Jakarta Selatan 12190",
  operatingHours: "Senin – Jumat: 08.30 – 17.30 WIB",
  metrics: [
    { label: "Tahun Dedikasi Hukum", value: "15+" },
    { label: "Perkara Terselesaikan", value: "650+" },
    { label: "Tingkat Keberhasilan Klien", value: "98.4%" },
    { label: "Aset Korporasi Terlindungi", value: "Rp 1.2T+" },
  ] as MetricItem[],
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "litigasi-pidana",
    title: "Litigasi Pidana Umum & Khusus",
    category: "litigasi",
    shortDesc: "Pendampingan dan pembelaan hak asasi serta kepentingan hukum klien dari tingkat penyelidikan di Kepolisian hingga persidangan Mahkamah Agung.",
    iconName: "ShieldAlert",
    deliverables: [
      "Pendampingan saksi dan tersangka di Kepolisian & Kejaksaan RI",
      "Praperadilan atas ketidaksahan penetapan tersangka atau penahanan",
      "Pembelaan tindak pidana korporasi, Tipikor, dan kejahatan perbankan",
      "Penyusunan Eksepsi, Pledoi, Memori Banding, dan Memori Kasasi",
    ],
  },
  {
    id: "perdata-bisnis",
    title: "Sengketa Perdata & Wanprestasi Bisnis",
    category: "litigasi",
    shortDesc: "Penyelesaian sengketa ingkar janji kontrak komersial, perbuatan melawan hukum (PMH), dan eksekusi jaminan fidusia/hak tanggungan.",
    iconName: "Scale",
    deliverables: [
      "Penyusunan Somasi Teguran Hukum dan Negosiasi Non-Litigasi",
      "Gugatan Wanprestasi dan Perbuatan Melawan Hukum di Pengadilan Negeri",
      "Permohonan Sita Jaminan (Conservatoir Beslag) & Eksekusi Putusan Berkekuatan Hukum Tetap",
      "Representasi pada Pengadilan Negeri, Pengadilan Tinggi, & Mahkamah Agung",
    ],
  },
  {
    id: "korporasi-ma",
    title: "Hukum Korporasi, M&A & Kontrak Bisnis",
    category: "korporasi",
    shortDesc: "Layanan penasihat hukum strategis untuk tata kelola perusahaan (GCG), restrukturisasi, merger & akuisisi, serta penanaman modal.",
    iconName: "Briefcase",
    deliverables: [
      "Uji Tuntas Hukum Komprehensif (Legal Due Diligence / LDD)",
      "Penyusunan & Pengkajian Kontrak Komersial Bisnis Multinasional",
      "Restrukturisasi Pemegang Saham, Joint Venture & Akuisisi",
      "Kepatuhan Perizinan Berusaha Berbasis Risiko (OSS RBA)",
    ],
  },
  {
    id: "ketenagakerjaan-phi",
    title: "Ketenagakerjaan & Hubungan Industrial",
    category: "korporasi",
    shortDesc: "Mitigasi risiko ketenagakerjaan dan advokasi pada Pengadilan Hubungan Industrial (PHI) terkait perselisihan hak, pemutusan hubungan kerja (PHK), dan bipartit/tripartit.",
    iconName: "Users",
    deliverables: [
      "Penyusunan Peraturan Perusahaan (PP) & Perjanjian Kerja Bersama (PKB)",
      "Advokasi Negosiasi Bipartit dan Mediasi Tripartit Disnaker",
      "Litigasi Perselisihan PHK di Pengadilan Hubungan Industrial (PHI)",
      "Audit Kepatuhan Hukum Ketenagakerjaan & Tenaga Kerja Asing (TKA)",
    ],
  },
  {
    id: "pertanahan-properti",
    title: "Sengketa Pertanahan & Real Estate",
    category: "litigasi",
    shortDesc: "Advokasi legal atas tumpang tindih sertifikat hak atas tanah, pembatalan sertifikat di PTUN, pengadaan tanah, dan sengketa sewa-beli komersial.",
    iconName: "Building2",
    deliverables: [
      "Gugatan Pembatalan Keputusan Pejabat Tata Usaha Negara (BPN) di PTUN",
      "Penyelesaian Sengketa Kepemilikan Hak Milik (SHM) & Hak Guna Bangunan (HGB)",
      "Legal Clearance Pembebasan Lahan Kawasan Industri",
      "Penanganan Sengketa Konsumen Apartemen & Pengembang Properti",
    ],
  },
  {
    id: "kepailitan-pkpu",
    title: "Kepailitan & Restrukturisasi Utang (PKPU)",
    category: "litigasi",
    shortDesc: "Representasi kreditor maupun debitor dalam permohonan Penundaan Kewajiban Pembayaran Utang (PKPU) dan Kepailitan di Pengadilan Niaga.",
    iconName: "FileSpreadsheet",
    deliverables: [
      "Pengajuan Permohonan PKPU / Pailit di Pengadilan Niaga",
      "Penyusunan Rencana Perdamaian (Composition Plan) & Restrukturisasi Utang",
      "Pencocokan dan Verifikasi Piutang Kreditor Konkuren/Separatis",
      "Pengawasan dan Advokasi Tahap Insolvensi Bersama Tim Kurator",
    ],
  },
];

export const ATTORNEYS: Attorney[] = [
  {
    id: "surya-bintang-laksana",
    name: "Dr. Surya Bintang Laksana, S.H., M.H., C.L.A.",
    role: "Managing Partner",
    degree: "Doktor Ilmu Hukum (S3 - UNPAD), Magister Hukum (S2 - UGM), Sarjana Hukum (S1 - UI)",
    peradiNia: "08.14209/ADV-PERADI",
    specialization: ["Litigasi Komersial", "Pidana Korporasi", "Kepailitan & PKPU"],
    education: [
      "Doktor Ilmu Hukum — Universitas Padjadjaran (Cum Laude)",
      "Magister Hukum Bisnis — Universitas Gadjah Mada",
      "Sarjana Hukum — Universitas Indonesia",
      "Certified Legal Auditor (C.L.A.) — Asosiasi Auditor Hukum Indonesia",
    ],
    bio: "Berpengalaman lebih dari 18 tahun memimpin penanganan sengketa komersial bernilai tinggi di hadapan Pengadilan Negeri, Pengadilan Niaga, hingga tingkat Kasasi di Mahkamah Agung. Mengedepankan ketajaman hukum formil dan integritas tanpa kompromi.",
    casesHandled: [
      "Ketua Tim Kuasa Hukum Sengketa Saham Lintas Negara Perusahaan Tambang",
      "Kuasa Hukum Restrukturisasi Utang Sindikasi Perbankan Rp 185 Miliar",
      "Penasihat Khusus Akuisisi Strategis Sektor Finansial & Infrastruktur",
    ],
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rahmat-hidayat",
    name: "Rahmat Hidayat, S.H., LL.M.",
    role: "Senior Partner",
    degree: "Master of Laws (LL.M. in Corporate Law - Leiden University), Sarjana Hukum (S1 - UI)",
    peradiNia: "11.20531/ADV-PERADI",
    specialization: ["Hukum Korporasi & M&A", "Hukum Perbankan", "Pasar Modal"],
    education: [
      "Master of Laws (LL.M.) — Leiden University, Belanda",
      "Sarjana Hukum (S.H.) — Universitas Indonesia",
      "Konsultan Hukum Pasar Modal Terdaftar (HKHPM / OJK)",
    ],
    bio: "Pakar dalam transaksi merger & akuisisi multinasional, kepatuhan pasar modal, dan penanaman modal asing (PMA). Membimbing korporasi melalui restrukturisasi kompleks dengan standar tata kelola internasional.",
    casesHandled: [
      "Legal Due Diligence Akuisisi Mayoritas Saham Institusi Perbankan Swasta",
      "Penyusunan Kontrak EPC Pembangkit Tenaga Listrik Senilai Rp 800 Miliar",
    ],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "clara-stephanie-putri",
    name: "Clara Stephanie Putri, S.H., M.Kn.",
    role: "Partner",
    degree: "Magister Kenotariatan (S2 - Undip), Sarjana Hukum (S1 - Unair)",
    peradiNia: "14.39821/ADV-PERADI",
    specialization: ["Agraria & Properti", "Hubungan Industrial", "Kontrak Komersial"],
    education: [
      "Magister Kenotariatan (M.Kn.) — Universitas Diponegoro",
      "Sarjana Hukum (S.H.) — Universitas Airlangga",
    ],
    bio: "Berfokus pada perlindungan kepemilikan aset tak bergerak skala industri, audit kepatuhan hukum agraria, serta mediasi perselisihan hubungan industrial strategis.",
    casesHandled: [
      "Advokasi Pengadaan Lahan Kawasan Industri Terpadu 120 Hektar",
      "Penyelesaian Negosiasi Bipartit PHK Efisiensi Massal Industri Manufaktur",
    ],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prof-hartono-kartohadiprodjo",
    name: "Prof. Dr. Hartono, S.H., M.S.",
    role: "Of Counsel",
    degree: "Guru Besar Hukum Acara Perdata & Arbitrase Komersial",
    peradiNia: "Senior Legal Advisor (Akademisi)",
    specialization: ["Pendapat Hukum Ahli (Expert Opinion)", "Arbitrase BANI", "Eksaminasi Perkara"],
    education: [
      "Doktor Ilmu Hukum — Universitas Indonesia",
      "Magister Sains — Universitas Gadjah Mada",
      "Sarjana Hukum — Universitas Diponegoro",
    ],
    bio: "Pakar hukum terkemuka yang kerap memberikan keterangan keahlian di Mahkamah Konstitusi serta majelis Badan Arbitrase Nasional Indonesia (BANI). Memberikan arahan doktrinal independen bagi perkara-perkara strategis.",
    casesHandled: [
      "Saksi Ahli Sengketa Arbitrase Dagang Internasional Sektor Energi",
      "Penyusun Keterangan Ahli dalam Uji Materiil Regulasi Komersial",
    ],
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dimas-anggoro",
    name: "Dimas Anggoro, S.H.",
    role: "Senior Associate",
    degree: "Sarjana Hukum (S1 Hukum Pidana - Universitas Brawijaya)",
    peradiNia: "17.55120/ADV-PERADI",
    specialization: ["Litigasi Pidana", "Gugatan PTUN", "Penyelidikan Kriminal Khusus"],
    education: ["Sarjana Hukum (S1) — Universitas Brawijaya Malang"],
    bio: "Advokat berdaya juang tinggi dengan jam terbang ekstensif dalam pendampingan di tingkat kepolisian, kejaksaan, serta persidangan peradilan pidana umum dan tindak pidana korupsi.",
    casesHandled: [
      "Pendampingan Saksi Kunci & Tersangka Dugaan Pelanggaran Rahasia Dagang",
      "Eksaminasi dan Praperadilan Kasus Dugaan Maladministrasi Aparatur",
    ],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nadia-safitri",
    name: "Nadia Safitri, S.H.",
    role: "Associate",
    degree: "Sarjana Hukum (S1 Hukum Bisnis - Universitas Sebelas Maret)",
    peradiNia: "21.68412/ADV-PERADI",
    specialization: ["Perancangan Kontrak", "Uji Tuntas Hukum", "Kepatuhan Regulasi HKI"],
    education: ["Sarjana Hukum (S1) — Universitas Sebelas Maret (UNS) Surakarta"],
    bio: "Berfokus pada penyusunan legal opinion, riset regulasi sektoral perlindungan data pribadi (UU PDP), serta pendaftaran dan audit portofolio Hak Kekayaan Intelektual.",
    casesHandled: [
      "Audit Kepatuhan Perlindungan Data Pribadi Perusahaan Teknologi Finansial",
      "Penyusunan Perjanjian Lisensi Merek Dagang & Hak Cipta Komersial",
    ],
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sabilul-muhtadin",
    name: "Sabilul Muhtadin, S.H.",
    role: "Senior Paralegal",
    degree: "Sarjana Ilmu Hukum (Spesialisasi Hukum Pidana & Perdata Bisnis)",
    peradiNia: "Divisi Paralegal & Litigasi Operasional",
    specialization: ["Analisis Anatomi Putusan MA", "Audit Alat Bukti", "Riset Yuridis Pidana & Perdata"],
    education: [
      "Sarjana Hukum (S.H.) — Program Studi Ilmu Hukum",
      "Pelatihan Khusus Profesi Advokat (PKPA)",
      "Sertifikasi Manajemen Berkas Perkara & Riset Yurisprudensi",
    ],
    bio: "Bertanggung jawab atas koordinasi operasional berkas perkara, penelusuran yurisprudensi Mahkamah Agung, verifikasi kronologi bukti litigasi, serta penyusunan draft dokumen hukum awal di bawah supervisi langsung para Partner.",
    casesHandled: [
      "Eksaminasi Dokumen Bukti & Kronologi Perkara Sengketa Wanprestasi Perdata",
      "Riset Yurisprudensi Putusan Kasasi MA Terkait Tindak Pidana Korporasi",
      "Penyusunan Berkas Uji Tuntas Legalitas Aset Tanah Skala Industri",
    ],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "faisal-azhari",
    name: "Faisal Azhari, S.H.",
    role: "Paralegal & Legal Researcher",
    degree: "Sarjana Ilmu Hukum (Fokus Hukum Korporasi & Kontrak)",
    peradiNia: "Divisi Riset Hukum & Hubungan Lembaga",
    specialization: ["Riset Regulasi OSS/BKPM", "Pengarsipan Yudisial", "Monitoring Kepatuhan Hukum"],
    education: [
      "Sarjana Hukum (S.H.) — Fakultas Hukum",
      "Pelatihan Penelusuran Regulasi Sektoral & Basis Data Peraturan Perundang-undangan",
    ],
    bio: "Mendukung divisi korporasi dalam penelusuran regulasi kementerian, kepatuhan perizinan berusaha OSS RBA, pengawasan jadwal persidangan pengadilan, serta koordinasi teknis ke instansi pemerintah.",
    casesHandled: [
      "Monitoring Kepatuhan Perizinan Berusaha Kawasan Berikat",
      "Kompilasi Dokumen Pembuktian Sengketa Hubungan Industrial di Disnaker",
    ],
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
];

export const CORE_VALUES: CoreValueItem[] = [
  {
    title: "Integritas Etik Tinggi",
    desc: "Menjunjung tinggi Kode Etik Advokat Indonesia dalam setiap tindakan legal guna melindungi marwah klien serta kehormatan profesi officium nobile.",
    icon: "ShieldCheck",
  },
  {
    title: "Ketajaman Strategi Hukum",
    desc: "Mengkombinasikan riset yuridis mendalam dengan kalkulasi taktis terukur untuk menghasilkan solusi hukum yang presisi dan teruji.",
    icon: "Target",
  },
  {
    title: "Transparansi Penanganan",
    desc: "Klien menerima laporan perkembangan perkara secara berkala dengan evaluasi peluang dan mitigasi risiko yang jujur dan objektif.",
    icon: "FileCheck2",
  },
  {
    title: "Responsivitas & Dedikasi",
    desc: "Menyadari bahwa krisis hukum memerlukan tindakan sigap. Tim kami siap merespons kebutuhan mendesak secara tepat waktu.",
    icon: "Clock",
  },
];

export const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    step: "01",
    title: "Analisis Fakta Hukum",
    desc: "Pemeriksaan kronologi komprehensif, verifikasi keaslian dokumen bukti, dan pemetaan posisi hukum para pihak.",
  },
  {
    step: "02",
    title: "Riset Yuridis Mendalam",
    desc: "Penyusunan dasar hukum, telaah yurisprudensi Mahkamah Agung, doktrin ahli hukum, dan regulasi sektoral terkait.",
  },
  {
    step: "03",
    title: "Formulasi Strategi Hukum",
    desc: "Penyusunan Legal Opinion (LO) independen, perumusan opsi litigasi vs non-litigasi, serta penandatanganan Surat Kuasa Khusus.",
  },
  {
    step: "04",
    title: "Eksekusi & Advokasi Penuh",
    desc: "Tindakan legal resmi di hadapan instansi peradilan atau penyidik dengan pelaporan periodik hingga berkekuatan hukum tetap.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Pemulihan Aset Piutang Korporasi Manufaktur",
    clientType: "Perusahaan Multinasional Sektor Otomotif",
    practiceArea: "Litigasi Perdata & Komersial",
    challenge: "Distributor utama mengalami gagal bayar tagihan distribusi senilai Rp 48,5 Miliar disertai indikasi pengalihan aset.",
    strategy: "Mengajukan somasi berbasis audit forensik kontrak, dilanjutkan permohonan Sita Jaminan (Conservatoir Beslag) di Pengadilan Negeri serta negosiasi restrukturisasi terikat akta notarial.",
    result: "Perdamaian dicapai sebelum pembacaan putusan (Dading). Klien memulihkan 100% pokok piutang melalui jaminan aset tanah dan pencairan bertahap.",
    valueOrImpact: "Rp 48.500.000.000,- Terselamatkan",
  },
  {
    id: "cs-2",
    title: "Homologasi Restrukturisasi Utang PKPU Sindikasi",
    clientType: "Perusahaan Logistik & Maritim Nasional",
    practiceArea: "Kepailitan & PKPU",
    challenge: "Klien menghadapi ancaman kepailitan dari 14 kreditor perbankan dan vendor dengan total kewajiban utang jatuh tempo sebesar Rp 185 Miliar.",
    strategy: "Menyusun skema restrukturisasi utang komprehensif serta memimpin negosiasi intensif bersama kreditor separatis dan konkuren.",
    result: "Proposal perdamaian disetujui secara aklamasi dalam voting kreditor dan disahkan (Homologasi) oleh Majelis Hakim Pengadilan Niaga.",
    valueOrImpact: "Restrukturisasi Berhasil — Operasional Klien Terselamatkan",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Bagaimana struktur skema honorarium (legal fee) di SBL Law Firm?",
    answer: "Kami menerapkan sistem fee yang transparan dan tertuang tertulis dalam Surat Perjanjian Jasa Hukum (SPJH), mencakup Retainer Bulanan, Lump Sum per tahapan perkara, serta penanganan uji tuntas hukum.",
    category: "Biaya & Perjanjian",
  },
  {
    question: "Dokumen apa saja yang perlu dipersiapkan untuk konsultasi perkara perdana?",
    answer: "Dokumen identitas resmi/legalitas badan usaha, kronologi kejadian tertulis secara urut tanggal, serta salinan dokumen bukti terkait (kontrak, bukti transfer, surat panggilan instansi, atau somasi).",
    category: "Prosedur Konsultasi",
  },
  {
    question: "Bagaimana jaminan kerahasiaan data dan dokumen yang kami serahkan?",
    answer: "Seluruh informasi dan berkas dilindungi penuh oleh Hak Imunitas Advokat dan Kewajiban Menjaga Rahasia Jabatan berdasarkan Pasal 19 UU No. 18 Tahun 2003 tentang Advokat serta Kode Etik Advokat Indonesia.",
    category: "Etika & Kerahasiaan",
  },
];
export interface LegalAlert {
  id: string;
  category: "Regulasi Korporasi" | "Hukum Acara & Arbitrase" | "Kepatuhan Digital & PDP";
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  tag: string;
}

export const LEGAL_ALERTS: LegalAlert[] = [
  {
    id: "alert-1",
    category: "Regulasi Korporasi",
    title: "Implikasi UU No. 1 Tahun 2023 terhadap Doktrin Pertanggungjawaban Pidana Korporasi",
    summary: "Telaah yuridis mengenai pengakuan subjek hukum korporasi dan mitigasi risiko pidana bagi Dewan Direksi dan Pengendali Korporasi dalam rezim KUHP baru.",
    date: "14 Oktober 2026",
    readTime: "6 Menit Baca",
    author: "Dr. Surya Bintang Laksana, S.H., M.H.",
    tag: "Pidana Korporasi",
  },
  {
    id: "alert-2",
    category: "Hukum Acara & Arbitrase",
    title: "Klausul Arbitrase BANI: Tantangan Eksekusi Putusan Asing dan Yurisdiksi Pengadilan Negeri",
    summary: "Analisis asas kompetensi absolut arbitrase serta batasan intervensi peradilan umum dalam pembatalan putusan arbitrase komersial.",
    date: "28 September 2026",
    readTime: "8 Menit Baca",
    author: "Prof. Dr. Hartono, S.H., M.S.",
    tag: "Arbitrase Komersial",
  },
  {
    id: "alert-3",
    category: "Kepatuhan Digital & PDP",
    title: "Kewajiban Audit Kepatuhan Mandatori UU PDP bagi Lembaga Keuangan dan Korporasi Multinasional",
    summary: "Pedoman teknis penunjukan Data Protection Officer (DPO), analisis transfer data lintas batas, dan sanksi denda administratif berbasis omzet.",
    date: "12 September 2026",
    readTime: "5 Menit Baca",
    author: "Nadia Safitri, S.H.",
    tag: "Perlindungan Data",
  },
];