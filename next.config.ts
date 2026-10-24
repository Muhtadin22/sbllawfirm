import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://images.unsplash.com https://maps.gstatic.com https://*.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  frame-src 'self' https://www.google.com https://maps.google.com;
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://wa.me;
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

const securityHeaders = [
  // 1. Content Security Policy (CSP) untuk mitigasi serangan XSS dan injeksi skrip
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  // 2. Anti-Clickjacking: Melarang situs disematkan di dalam iframe domain lain
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // 3. Anti-MIME Sniffing: Mencegah interpretasi file berbahaya di luar format deklarasi
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 4. Referrer Policy: Menjaga kerahasiaan URL rujukan klien
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 5. Pembatasan akses hardware pengguna (Kamera, Mikrofon, Lokasi)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // 6. Strict Transport Security (HSTS): Memaksa protokol HTTPS selama 2 tahun
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 7. Filter XSS bawaan peramban
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;