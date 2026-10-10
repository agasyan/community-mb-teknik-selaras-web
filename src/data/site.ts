export const site = {
  name: 'MB Teknik Selaras',
  owner: 'Eko',
  url: 'https://mb-teknik-selaras.pages.dev',
  description:
    'Teknisi AC panggilan bergaransi di Cileungsi, Jonggol & Narogong sejak 2019. Cuci, servis bocor air & isi freon. WA 0878-8401-8182.',
  ogTitle: 'MB Teknik Selaras - Service, Cuci & Pasang AC Cileungsi & Jonggol',
  ogDescription:
    'Teknisi AC panggilan bergaransi sejak 2019. Pengerjaan rapi ke rumah, toko, dan kantor. Hubungi WhatsApp: 0878-8401-8182.',
  whatsapp: {
    display: '0878-8401-8182',
    e164: '6287884018182',
    full: '+62 878-8401-8182',
  },
  hours: {
    label: 'Buka Sabtu - Kamis 09.00 - 17.00 WIB',
    note: 'Jumat Libur',
    opens: '09:00',
    closes: '17:00',
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
  geo: {
    lat: -6.4024,
    lng: 106.989,
  },
  region: {
    locality: 'Cileungsi',
    region: 'Jawa Barat',
    postalCode: '16820',
    country: 'ID',
  },
  locations: [
    {
      id: 'narogong',
      branch: 'Cabang 1',
      name: 'MB Teknik Selaras - Narogong',
      shortName: 'Narogong',
      label: 'Workshop 1',
      streetAddress:
        'Jl. Raya Narogong (dekat Gang PT. Clairant / Jl. Pangkalan X), Limus Nunggal',
      address:
        'Jl. Raya Narogong (dekat Gang PT. Clairant / Jl. Pangkalan X), Limus Nunggal, Kec. Cileungsi, Kab. Bogor 16820',
      routeUrl:
        'https://www.google.com/maps?q=Jl.+Raya+Narogong+Pangkalan+X+Limus+Nunggal+Cileungsi',
      mapEmbed:
        'https://maps.google.com/maps?q=Jl.+Raya+Narogong+Pangkalan+X+Limus+Nunggal+Cileungsi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
    {
      id: 'pesona-kahuripan-10',
      branch: 'Cabang 2',
      name: 'MB Teknik Selaras 2 - Pesona Kahuripan 10',
      shortName: 'Pesona Kahuripan 10',
      label: 'Workshop 2',
      streetAddress:
        'Perumahan Pesona Kahuripan 10 blok G26, Jl. Raya Cileungsi - Jonggol, Gandoang',
      address:
        'Perumahan Pesona Kahuripan 10 blok G26, Jl. Raya Cileungsi - Jonggol, Gandoang, Kec. Cileungsi, Kab. Bogor 16820',
      routeUrl: 'https://share.google/jBfS9vOrk5B80sXag',
      mapEmbed:
        'https://maps.google.com/maps?q=MB+TEKNIK+SELARAS+2+Pesona+Kahuripan+10+Gandoang+Cileungsi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
  ],
  services: [
    {
      id: 'cuci-ac',
      title: 'Cuci AC',
      icon: 'wind',
      featured: false,
      tagline: 'Unit kembali dingin dan bersih.',
      points: [
        'Bersihkan unit indoor dan outdoor',
        'Semprot filter dan talang pembuangan',
        'Cek tekanan angin dan aliran drainase',
      ],
    },
    {
      id: 'servis-ac',
      title: 'Servis AC',
      icon: 'tool',
      featured: true,
      tagline: 'Penanganan AC bermasalah.',
      points: [
        'AC tidak dingin atau hanya keluar angin',
        'Bocor air, bunyi berisik, atau mati total',
        'Isi dan tambah freon R32, R410A, R22',
        'Perbaikan modul dan kompresor',
      ],
    },
    {
      id: 'pasang-baru',
      title: 'Pasang Baru',
      icon: 'plus',
      featured: false,
      tagline: 'Instalasi unit AC baru.',
      points: [
        'Untuk rumah, ruko, dan kantor',
        'Pipa rapi dan proses vakum',
      ],
    },
    {
      id: 'bongkar-pasang',
      title: 'Bongkar Pasang',
      icon: 'exchange',
      featured: false,
      tagline: 'Relokasi AC lama.',
      points: [
        'Pindah ruangan atau lokasi baru',
        'Pengamanan freon saat dilepas',
      ],
    },
  ],
  guarantees: [
    {
      icon: 'shield-check',
      title: 'Pekerjaan Bergaransi',
      text: 'Jika keluhan serupa berulang setelah pengerjaan, kami perbaiki kembali.',
    },
    {
      icon: 'spray',
      title: 'Rumah Tetap Bersih',
      text: 'Dinding dan lantai dilindungi terpal dan plastik cuci selama bekerja.',
    },
    {
      icon: 'gauge',
      title: 'Pengecekan Terbuka',
      text: 'Tekanan manifold dan ampere ditunjukkan langsung di depan pelanggan.',
    },
  ],
  areas: [
    { name: 'Pesona Kahuripan 10 (Tahap 1-9)', note: 'Prioritas, dekat Workshop 2' },
    { name: 'Limus Pratama Regency', note: 'Prioritas, dekat Workshop 1 Narogong' },
    { name: 'Kota Wisata Cibubur / Cileungsi', note: 'Layanan panggilan perumahan' },
    { name: 'Harvest City, Metland Transyogi, Grand Nusa Indah', note: '' },
    { name: 'Jonggol, Klapanunggal, Narogong Pangkalan 9-11', note: '' },
  ],
  gallery: [
    {
      file: 'flushing-ac-cassette',
      caption: 'Flushing AC cassette dan pengecekan manifold',
      alt: 'Teknisi MB Teknik Selaras melakukan flushing AC cassette di perumahan Cileungsi',
    },
    {
      file: 'las-pipa-outdoor',
      caption: 'Las pipa tembaga dan perbaikan kompresor unit outdoor',
      alt: 'Pengelasan pipa tembaga dan perbaikan kompresor AC oleh teknisi MB Teknik Selaras',
    },
    {
      file: 'servis-outdoor-ketinggian',
      caption: 'Servis unit outdoor di posisi dak dan ketinggian',
      alt: 'Teknisi MB Teknik Selaras servis unit outdoor AC di ketinggian dak',
    },
    {
      file: 'pengukuran-ampere-freon',
      caption: 'Pengukuran ampere dan tekanan freon',
      alt: 'Pengukuran ampere kelistrikan dan tekanan manifold freon AC oleh MB Teknik Selaras',
    },
    {
      file: 'bengkel-reparasi-kondensor',
      caption: 'Servis kondensor dan modul di bengkel resmi',
      alt: 'Pengerjaan servis kondensor dan modul AC di workshop bengkel resmi MB Teknik Selaras',
    },
  ],
} as const;

export type Site = typeof site;

export function waLink(text?: string): string {
  const base = `https://wa.me/${site.whatsapp.e164}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
