import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoPath = path.join(root, 'brand/logo-mb-teknik-selaras-transparent.png');
const resizedLogo = await sharp(logoPath)
  .resize({ width: 320, height: 320, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
const logoHref = `data:image/png;base64,${resizedLogo.toString('base64')}`;

const font = 'sans-serif';

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#121417"/>
      <stop offset="1" stop-color="#1a1d24"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#e5be57"/>
  <rect x="72" y="84" width="156" height="156" rx="30" fill="#f8f9fa"/>
  <image x="88" y="100" width="124" height="124" href="${logoHref}" xlink:href="${logoHref}" preserveAspectRatio="xMidYMid meet"/>
  <text x="268" y="150" font-family="${font}" font-size="60" font-weight="700" fill="#f4f4f5">MB Teknik Selaras</text>
  <text x="270" y="196" font-family="${font}" font-size="30" fill="#e5be57">Jasa Cuci, Servis &amp; Pasang AC Panggilan</text>
  <text x="270" y="232" font-family="${font}" font-size="26" fill="#a1a1aa">Cileungsi . Jonggol . Narogong . Pesona Kahuripan 10</text>
  <text x="72" y="404" font-family="${font}" font-size="40" font-weight="700" fill="#f4f4f5">Teknisi AC panggilan bergaransi sejak 2019</text>
  <text x="72" y="456" font-family="${font}" font-size="30" fill="#a1a1aa">Cuci . Servis bocor air . Isi freon . Pasang baru</text>
  <text x="72" y="560" font-family="${font}" font-size="36" font-weight="700" fill="#22c55e">WhatsApp 0878-8401-8182</text>
  <text x="560" y="560" font-family="${font}" font-size="28" fill="#a1a1aa">Buka Sabtu - Kamis, Jumat libur</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile(path.join(root, 'public/og-image.png'));

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#f8f9fa"/>
  <image x="28" y="28" width="124" height="124" href="${logoHref}" xlink:href="${logoHref}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;

await sharp(Buffer.from(iconSvg))
  .png()
  .toFile(path.join(root, 'public/apple-touch-icon.png'));

// Small logo for the header and footer so the page does not load the 3.6 MB master.
await sharp(logoPath)
  .resize({ width: 256, height: 256, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public/images/logo-mark.png'));

console.log(
  'Generated public/og-image.png, public/apple-touch-icon.png, public/images/logo-mark.png',
);
