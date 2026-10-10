# Manual Deploy - MB Teknik Selaras Web

Cara deploy ke Cloudflare Pages **lewat CLI saja** memakai `wrangler`. Tanpa integrasi
GitHub, tanpa CI, dan **tanpa membuka dashboard Cloudflare**: project dibuat, di-deploy,
dan dikelola dari terminal.

**Model satu branch:** deploy **hanya dari branch `main`**, selalu masuk sebagai
**production**.

```text
main  ->  npm run deploy  ->  npm run build  ->  dist/  ->  Cloudflare Pages (production)
```

> [!IMPORTANT]
> Dua nama yang beda, jangan tertukar:
> **`mb-teknik-selaras`** = nama **project Cloudflare Pages** (sekaligus subdomain
> `mb-teknik-selaras.pages.dev`), dan **`community-mb-teknik-selaras-web`** = nama
> **folder repo lokal**.
>
> Nama project Pages menjadi subdomain `.pages.dev` dan **tidak bisa diubah** setelah
> dibuat, jadi buat sekali dengan nama `mb-teknik-selaras`.

Live: https://mb-teknik-selaras.pages.dev

Konfigurasi project ada di [`wrangler.jsonc`](wrangler.jsonc):

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "mb-teknik-selaras",
  "pages_build_output_dir": "./dist"
}
```

`wrangler` sudah terpasang sebagai devDependency, jadi command di bawah memakai
`wrangler` lokal (bukan `npx`).

---

# FASE 1 - INIT (sekali saja)

Tujuan: login `wrangler` -> buat project Pages -> deploy pertama. Semuanya dari CLI,
**tidak perlu membuka dashboard Cloudflare**.

> [!NOTE]
> Lewati fase ini kalau project Pages `mb-teknik-selaras` sudah pernah dibuat.

## 1.1 Login wrangler

```bash
cd community-mb-teknik-selaras-web
npx wrangler login
```

Browser terbuka untuk OAuth Cloudflare. Kredensial tersimpan lokal di `~/.wrangler`.
Cek status login kapan saja dengan `npx wrangler whoami`.

## 1.2 Buat project Pages + deploy pertama

Project dibuat lewat CLI, bukan lewat dashboard. Pastikan repo di branch `main`, lalu:

```bash
git checkout main
npm run deploy:init
```

`deploy:init` melakukan tiga hal, semuanya via CLI:

1. buat project Pages **`mb-teknik-selaras`** dengan production branch `main`
   (`wrangler pages project create`; kalau project sudah ada, dilewati - aman diulang),
2. build (`npm run build`),
3. deploy ke production (`wrangler pages deploy --branch main`).

Ingin membuat project secara manual tanpa script:

```bash
npx wrangler pages project create mb-teknik-selaras --production-branch main
npm run deploy
```

## 1.3 Verifikasi

- Terminal mencetak URL deployment (`https://<hash>.mb-teknik-selaras.pages.dev`).
- Lihat daftar deployment: `npx wrangler pages deployment list --project-name mb-teknik-selaras`.
- Buka https://mb-teknik-selaras.pages.dev dari HP: cek tombol WhatsApp, form pesan,
  peta facade, dan toggle tema.

---

# FASE 2 - DEPLOY BERIKUTNYA (rutin)

Setiap ada perubahan konten atau kode:

```bash
git checkout main
git pull
npm run deploy
```

`npm run deploy` menjalankan `npm run build` lalu `wrangler pages deploy --branch main`
(memakai `name` dan `pages_build_output_dir` dari `wrangler.jsonc`).

| Aturan | Perilaku |
| :--- | :--- |
| Build gagal | Deploy berhenti sebelum upload |
| Sukses | Masuk ke **production** (`--branch main`) |
| Branch bukan `main` | Hindari; deploy dari `main` saja agar production konsisten |

> [!TIP]
> Alur aman: `git checkout main && git pull` -> `npm run deploy` -> cek URL production.
> Rollback tidak perlu rebuild, lihat [Rollback](#rollback--daftar-deployment).

---

# Referensi

## Yang dilakukan script

| Langkah | Detail |
| :--- | :--- |
| (init) Auth check | `wrangler whoami` - ingatkan `wrangler login` bila belum |
| (init) Create project | `wrangler pages project create mb-teknik-selaras --production-branch main` (idempotent, via CLI) |
| Build | `npm run build` - output ke `dist/` |
| Deploy | `wrangler pages deploy --branch main` |

Scriptnya ada di [`package.json`](package.json) (`deploy`, `deploy:init`).

## Rollback / daftar deployment

```bash
npx wrangler pages deployment list --project-name mb-teknik-selaras
```

Rollback tersedia di dashboard: **Pages -> mb-teknik-selaras -> Deployments -> pilih
deployment lama -> Rollback to this deployment**. Deployment lama tersimpan, jadi tanpa
rebuild. Ini satu-satunya langkah yang masih memakai dashboard.

## Domain kustom

Domain kustom disiapkan lewat dashboard: **Pages -> mb-teknik-selaras -> Custom domains
-> Set up a domain**. Jika domain berubah, jangan lupa ganti semua URL di
`astro.config.mjs`, `public/robots.txt`, `src/layouts/BaseLayout.astro`, dan
`src/data/site.ts`.

## Troubleshooting

| Gejala | Penyebab & solusi |
| :--- | :--- |
| `Belum login` / `Authentication error` | `npx wrangler login`, lalu ulangi. |
| `Project not found` | Nama project salah atau belum dibuat. Jalankan `npm run deploy:init`. |
| Build gagal | Perbaiki error dari `npm run build`, lalu `npm run deploy` lagi. |
| Halaman lama masih tampil | Cek URL deployment terbaru di output wrangler. Production hanya berubah saat deploy sukses. |
| Ingin batal pakai `wrangler` | Alternatif darurat: `npm run build`, lalu drag-and-drop isi folder `dist/` di dashboard **Create deployment -> Upload assets**. |

## Ringkasan command

```bash
# FASE 1 - sekali saja
npx wrangler login
git checkout main
npm run deploy:init

# FASE 2 - rutin
git checkout main && git pull
npm run deploy

# util
npx wrangler pages deployment list --project-name mb-teknik-selaras
npx wrangler whoami
```
