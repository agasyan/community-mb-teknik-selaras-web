---
name: MB Teknik Selaras Design System
description: Sistem desain landing page jasa teknisi AC panggilan MB Teknik Selaras di Cileungsi, Jonggol, dan Narogong. Mobile-first, output statis, tanpa framework JS di client (hanya CSS + dua skrip inline kecil).
colors:
  # Tema terang, Calm Craftsman, nyaman di mata.
  light:
    bg: "#F8F9FA"            # Latar utama, off-white zinc, anti-silau.
    surface: "#FFFFFF"       # Kartu, dengan border 1px.
    border: "#E4E4E7"        # Garis netral halus.
    text: "#18181B"          # Teks utama, 16.8:1 di latar, AAA.
    text-muted: "#52525B"    # Teks sekunder, 7.3:1 di latar, AA/AAA.
    primary: "#8A6512"       # Emas gelap untuk teks/ikon, 5.0:1 di latar, AA.
    primary-content: "#FFFFFF" # Konten di tombol emas, 5.3:1, AA.
    primary-soft: "#FDF8E7"  # Krem aksen lembut.
    whatsapp: "#15803D"      # Hijau WhatsApp, 5.0:1 dengan konten putih, AA.
    whatsapp-content: "#FFFFFF"
  # Tema gelap, Slate Charcoal, sejuk di malam hari.
  dark:
    bg: "#121417"            # Slate pekat turunan logo, bukan hitam pekat.
    surface: "#1A1D24"       # Kartu, dengan border 1px.
    border: "#2D323F"
    text: "#F4F4F5"          # 16.8:1 di latar, AAA.
    text-muted: "#A1A1AA"    # 7.2:1 di latar, AA.
    primary: "#E5BE57"       # Emas metalik, 10.4:1 di latar, AAA.
    primary-content: "#18181B" # Konten di tombol emas dark, 10.0:1, AAA.
    primary-soft: "#2A2412"
    whatsapp: "#22C55E"
    whatsapp-content: "#052E16"
typography:
  heading: { fontFamily: "Outfit, system-ui, sans-serif", fontSize: "28px", fontWeight: 700, lineHeight: 1.25 }
  subheading: { fontFamily: "Outfit, system-ui, sans-serif", fontSize: "18px", fontWeight: 600, lineHeight: 1.35 }
  body: { fontFamily: "Geist, system-ui, sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: "Geist, system-ui, sans-serif", fontSize: "13px", fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: "Geist Mono, ui-monospace, monospace", fontSize: "14px", fontWeight: 500, lineHeight: 1.5 }
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "64px"
components:
  button-primary: { backgroundColor: "{colors.light.primary}", textColor: "{colors.light.primary-content}", rounded: "{rounded.md}", padding: "12px 20px" }
  button-whatsapp: { backgroundColor: "{colors.light.whatsapp}", textColor: "{colors.light.whatsapp-content}", rounded: "{rounded.md}", padding: "12px 20px" }
  badge-terfavorit: { backgroundColor: "{colors.light.primary}", textColor: "{colors.light.primary-content}", rounded: "{rounded.sm}", padding: "4px 8px" }
  card-service: { backgroundColor: "{colors.light.surface}", border: "1px solid {colors.light.border}", rounded: "{rounded.lg}", padding: "20px" }
  card-workshop: { backgroundColor: "{colors.light.surface}", border: "1px solid {colors.light.border}", rounded: "{rounded.lg}", padding: "20px" }
  sticky-mobile-bar: { backgroundColor: "{colors.light.surface}", borderTop: "1px solid {colors.light.border}", height: "64px" }
---

# Design System: MB Teknik Selaras

## Overview
Reading this as: landing page jasa teknisi AC panggilan untuk pemilik rumah, ruko, dan kantor di Cileungsi, Jonggol, dan Narogong, dengan bahasa craftsman yang jujur dan tepercaya.

Tiga dial:
- `DESIGN_VARIANCE: 6/10`. Tata letak ritmis; hero dan rincian servis boleh asimetris, tidak kaku seperti template.
- `MOTION_INTENSITY: 2/10`. Transisi CSS mikro 150 sampai 200 ms saat sentuh tombol. Tanpa animasi melayang.
- `VISUAL_DENSITY: 5/10`. Target sentuh jempol minimal 44 px. Teks jelas. Tombol WhatsApp selalu mudah dijangkau.

Fakta produk (jam kerja, nomor, alamat, status bengkel, dan jaminan) hidup di `src/data/site.ts`, bukan di sini. Dokumen ini hanya berisi sistem visual.

## Colors
Satu aksen, terkunci: emas merek. Aksen hanya untuk aksi utama, pilihan, dan status. Bukan dekorasi. Netral memakai skala zinc/slate.

Rasio di tabel ini dihitung dengan rumus kontras WCAG 2.1 terhadap latar yang benar-benar dipakai.

| Peran | Light | Dark | Kontras |
|---|---|---|---|
| Latar (base-200) | `#F8F9FA` | `#121417` | - |
| Kartu (base-100) | `#FFFFFF` | `#1A1D24` | - |
| Border (base-300) | `#E4E4E7` | `#2D323F` | - |
| Teks utama | `#18181B` | `#F4F4F5` | 16.8:1 (AAA) |
| Teks sekunder | `#52525B` | `#A1A1AA` | 7.3:1 / 7.2:1 (AA+) |
| Emas aksen | `#8A6512` | `#E5BE57` | 5.0:1 / 10.4:1 (AA/AAA) |
| Konten di atas emas | `#FFFFFF` | `#18181B` | 5.3:1 / 10.0:1 (AA/AAA) |
| WhatsApp | `#15803D` | `#22C55E` | konten `#FFFFFF` 5.0:1 / `#052E16` 6.5:1 (AA) |

Aturan kontras:
- Warna isi tombol (`*-content`) dihitung per tema. Jangan selalu putih. Emas terang dark `#E5BE57` dan hijau terang `#22C55E` butuh teks gelap.
- Emas `#946E14` gagal AA sebagai teks di latar light (4.43:1). Jangan dipakai untuk teks; pakai `#8A6512`.
- Nyaman di mata: hindari `#000000` pekat di dark dan `#FFFFFF` penuh di light.

Pemeriksaan kontras akhir dilakukan di audit build, bukan saat menulis komponen.

## Typography
Dua keluarga, peran jelas. Hindari "Inter untuk semuanya".
- **Judul:** `Outfit` (geometris, bobot 600 dan 700).
- **Isi & label:** `Geist` (bobot 400 dan 500).
- **Angka teknis:** `Geist Mono` untuk nomor WhatsApp, jam `09:00 - 17:00`, dan kode pos `16820`.
- Skala tetap rasio 1.125 sampai 1.2. Panjang baris isi maksimal 65 ch.

## Layout
Mobile-first 360 px sampai 430 px, rapi saat desktop.
1. **Header:** logo PNG transparan; status jam `Buka Sabtu - Kamis 09.00 - 17.00 WIB (Jumat Libur)`; toggle tema ikon Tabler; tombol WhatsApp.
2. **Hero:** badge bukti (satu baris, bukan eyebrow kecil), headline, subjudul area layanan, dua tombol: WhatsApp dan "Lihat Layanan & Alamat".
3. **4 layanan inti:** Cuci AC, Servis AC (badge TERFAVORIT), Pasang Baru, Bongkar Pasang. Susun asimetris, jangan empat kartu identik berjajar.
4. **Form WhatsApp:** pilih layanan, jumlah unit, keluhan, area. Tombol "Kirim Pesan ke WhatsApp 0878-8401-8182".
5. **Galeri dokumentasi asli:** 5 foto lapangan lewat `astro:assets`, dengan keterangan teknis singkat. Grid rapi, rasio foto asli.
6. **Dua bengkel & peta:** klarifikasi transparan status bengkel; dua kartu cabang dengan peta facade (muat saat interaksi) dan tombol buka rute; daftar area prioritas.
7. **SOP & garansi:** terpal pelindung, pengukuran manifold terbuka, garansi pengerjaan.
8. **Sticky mobile bar (< 768px):** WhatsApp `0878-8401-8182` (ikon Tabler).

## Elevation & Depth
Kedalaman dari border 1 px dan tint latar, bukan bayangan tebal. Satu tingkat bayangan (`shadow-sm`) hanya untuk sticky mobile bar.

## Shapes
- Kontrol (tombol, input): `rounded-lg` (10 px).
- Kartu (layanan, alamat): `rounded-xl` (16 px).
- Badge dan label: `rounded-full`.
- Satu skala radius per halaman. Jangan campur siku dan bulat.

## Components
Dibangun dari **Tailwind CSS v4 + DaisyUI v5**, dikonfigurasi CSS-first di `global.css`. Tanpa `tailwind.config.js`.

```css
@import "tailwindcss";
@plugin "daisyui" { themes: false; }
@plugin "daisyui/theme" {
  name: "mb-light";
  default: true;
  color-scheme: light;
  --color-base-100: #FFFFFF;
  --color-base-200: #F8F9FA;
  --color-base-300: #E4E4E7;
  --color-base-content: #18181B;
  --color-primary: #8A6512;
  --color-primary-content: #FFFFFF;
  --color-success: #15803D;
  --color-success-content: #FFFFFF;
  --radius-selector: 9999px;
  --radius-field: 0.625rem;
  --radius-box: 1rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
@plugin "daisyui/theme" {
  name: "mb-dark";
  prefersdark: true;
  color-scheme: dark;
  --color-base-100: #1A1D24;
  --color-base-200: #121417;
  --color-base-300: #2D323F;
  --color-base-content: #F4F4F5;
  --color-primary: #E5BE57;
  --color-primary-content: #18181B;
  --color-success: #22C55E;
  --color-success-content: #052E16;
  --radius-selector: 9999px;
  --radius-field: 0.625rem;
  --radius-box: 1rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}
```

- **Ikon:** SVG inline Tabler Icons. Tidak ada emoji di UI.
- **Tombol:** `btn btn-primary`, `btn btn-success` (WhatsApp), `btn btn-outline`. Tinggi minimal 44 px.
- **Kartu layanan:** `card bg-base-100 border border-base-300`. Badge TERFAVORIT: `badge` dengan `bg-primary text-primary-content` (emas saja).
- **Form:** `select`, `input`, `textarea` (DaisyUI v5 sudah memberi border secara default), label di atas, pesan error di bawah.
- **Toggle tema:** `btn btn-ghost btn-circle btn-sm`; ubah `data-theme` pada `<html>`. Skrip anti-FOUC ada di `src/layouts/BaseLayout.astro`.
- **Peta:** facade dengan rasio tetap; iframe interaktif dimuat hanya saat pengguna berinteraksi.

Setiap kontrol punya state default, hover, focus, active, dan disabled. Formulir memvalidasi saat submit dan menyimpan semua input.

## Do's and Don'ts
- **DO** pakai Bahasa Indonesia yang alami dan jelas untuk warga lokal.
- **DO** pakai satu aksen emas yang sama di setiap bagian.
- **DO** arahkan semua tombol pesan ke WhatsApp `+62 878-8401-8182`.
- **DO** sebutkan "Pekerjaan Bergaransi" secara transparan.
- **DO** pakai `astro:assets` untuk semua gambar agar format modern dan CLS = 0.
- **DON'T** pakai framework JavaScript berat. Astro statis sudah cukup.
- **DON'T** pakai gradasi ungu-biru, glow neon, kartu bersarang, atau empat kartu fitur identik.
- **DON'T** pakai emoji di UI. Ganti dengan ikon Tabler.
- **DON'T** pakai tanda pisah panjang. Pakai titik, koma, atau tanda kurung.
- **DON'T** pakai kata korporat palsu seperti "Elevate", "Seamless", atau "solusi terdepan".
- **DON'T** pakai putih sebagai warna isi tombol di dark mode. Periksa tiap pasangan kontras.
