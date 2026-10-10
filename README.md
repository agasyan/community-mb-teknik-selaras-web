# MB Teknik Selaras - Website

Website profil dan pemesanan WhatsApp untuk MB Teknik Selaras, jasa cuci, servis, dan pasang AC panggilan di Cileungsi, Jonggol, dan Narogong. Dikelola oleh Eko.

Live: https://mb-teknik-selaras.pages.dev

Stack: Astro 7, Tailwind CSS v4, DaisyUI v5. Output statis, tanpa framework JS di client (hanya CSS dan dua skrip inline kecil).

## Jalankan lokal

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output ke dist/
npm run preview  # pratinjau hasil build
```

Skrip tambahan:

```bash
npm run assets   # buat ulang public/og-image.png, apple-touch-icon.png, logo-mark.png
```

## Struktur

- `src/pages/index.astro` - halaman utama (satu halaman).
- `src/components` - Header, Hero, Services, Gallery, BookingForm, Locations, Guarantees, Footer, MobileStickyBar, MapFacade, Icon.
- `src/layouts/BaseLayout.astro` - `<head>`, SEO, OpenGraph, dan Schema JSON-LD.
- `src/data/site.ts` - satu sumber fakta bisnis: nomor, jam, alamat, layanan, galeri.
- `src/styles/global.css` - tema Tailwind + DaisyUI (`mb-light`, `mb-dark`).
- `src/assets/gallery` - foto lapangan, diproses `astro:assets`.
- `brand` - logo master, sumber untuk `npm run assets`.
- `public` - aset statis: logo, favicon, og-image, `robots.txt`, `site.webmanifest`.

## Fakta runtime

- WhatsApp: 0878-8401-8182
- Jam: Sabtu sampai Kamis 09.00 - 17.00 WIB (Jumat libur)
- Bengkel: Cabang 1 Narogong, Cabang 2 Pesona Kahuripan 10

Ubah jam, nomor, atau alamat hanya di `src/data/site.ts`. Halaman dan schema membaca dari file yang sama.

## Deploy (Cloudflare Pages, via wrangler)

Deploy manual dari mesin lokal, tanpa integrasi GitHub dan tanpa dashboard. Panduan
lengkap: [MANUAL-DEPLOY.md](MANUAL-DEPLOY.md).

```bash
npx wrangler login     # sekali
npm run deploy:init    # sekali: buat project Pages + deploy pertama
npm run deploy         # berikutnya
```

- Nama proyek ada di `wrangler.jsonc`: `mb-teknik-selaras`, hasilnya https://mb-teknik-selaras.pages.dev
- Output: `dist`

Nama proyek menjadi subdomain `.pages.dev` dan tidak bisa diubah tanpa membuat ulang proyek.

## SEO

- Sitemap otomatis lewat `@astrojs/sitemap` (`sitemap-index.xml`).
- `public/robots.txt` mereferensikan sitemap.
- Schema `HVACBusiness` multi-lokasi ada di `src/layouts/BaseLayout.astro`.
