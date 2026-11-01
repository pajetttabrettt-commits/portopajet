/**
 * ==============================================================================
 * 🌟 PUSAT EDIT DATA PORTOFOLIO LENGKAP (EASY CONFIG)
 * ==============================================================================
 * Semua teks, foto, link sosmed, riwayat sekolah/kerja, Spotify, hingga proyek
 * bisa Anda ubah langsung di file ini tanpa perlu membongkar file kode lainnya!
 *
 * CARA PAKAI:
 * 1. Ubah teks di dalam tanda kutip "..." sesuai data Anda.
 * 2. Simpan file ini (Ctrl + S).
 * 3. Buka atau Refresh browser Anda (F5 atau Ctrl + Shift + R).
 * ==============================================================================
 */

window.MY_PORTFOLIO = {
  // --------------------------------------------------------------------------
  // 1. BRAND & IDENTITAS DIRI
  // --------------------------------------------------------------------------
  name: "Fajar Maulana", // Nama lengkap Anda
  brand: "PajetDev.", // Nama brand di Navbar & Footer (contoh: "FajarDev.", "PajetDev.")
  role: "Junior Developer", // Posisi / Profesi utama Anda
  pageTitle: "Fajar Maulana | Portofolio", // Judul tab di browser

  // --------------------------------------------------------------------------
  // 2. HERO SECTION (BAGIAN ATAS / BERANDA)
  // --------------------------------------------------------------------------
  // Teks animasi mengetik (typewriter) yang berganti-ganti di bawah nama Anda
  typewriter: [
    "3D Creative Developer",
    "React & Three.js Enthusiast",
    "Junior Developer",
    "Teknik Komputer",
    "Web Development"
  ],

  // Paragraf deskripsi pengenalan diri di hero section
  heroDescription:
    "Berawal dari rasa penasaran, sekarang jadi passion. Aku suka bereksperimen dengan kode, mengeksplorasi teknologi baru, dan mengubah ide menjadi sesuatu yang nyata. Dari tampilan web yang menarik sampai interaksi 3D yang seru, aku selalu berusaha bikin sesuatu yang bukan cuma keren dilihat, tapi juga nyaman digunakan.",

  // Label teks di samping tombol sosial media (Hero section)
  findMeLabel: "Find me",

  // --------------------------------------------------------------------------
  // 3. MEDIA SOSIAL & KONTAK (Hero Section, Contact Section & Footer)
  // --------------------------------------------------------------------------
  socials: {
    // GitHub
    github: "https://github.com",
    githubHandle: "@fajarmaulana",

    // Instagram
    instagram: "https://www.instagram.com/sayezarr_/",
    instagramHandle: "@sayezarr_",

    // TikTok
    tiktok: "https://www.tiktok.com/@pajetttabretaaa",
    tiktokHandle: "@pajetttabretaaa"
  },

  // --------------------------------------------------------------------------
  // 4. FOTO PROFIL & KARTU 3D LANYARD
  // --------------------------------------------------------------------------
  // (File gambar berada di dalam folder assets/)
  avatarImage: "./assets/me2-zChDs4ox.png", // Foto profil normal di section About
  spiderImage: "./assets/PhotoSpiderman-SN9X5pZn.png", // Foto efek hover Spiderman di section About
  frontCard: "./assets/frontCard-B_vIkGBe.png", // Kartu ID Card 3D bagian depan
  backCard: "./assets/backCard-BGPpqBds.png", // Kartu ID Card 3D bagian belakang
  strapCard: "./assets/bandd-aEExZUcs.png", // Tekstur tali lanyard 3D

  // --------------------------------------------------------------------------
  // 5. TENTANG SAYA (ABOUT ME SECTION)
  // --------------------------------------------------------------------------
  aboutTitle: "About Me",
  aboutGreeting: "Hi, I'm",
  // Paragraf 1 di halaman About Me
  aboutBio:
    "Saya adalah Junior Developer yang berfokus pada pengembangan teknologi yang fungsional sekaligus menarik. Saya senang memadukan kode, desain, dan pengalaman 3D untuk membangun produk digital yang berkesan.",
  // Paragraf 2 di halaman About Me
  aboutBio2:
    "Dengan React, Three.js, dan teknologi web modern, saya mengubah ide menjadi pengalaman digital yang intuitif, responsif, dan berkinerja tinggi.",

  // --------------------------------------------------------------------------
  // 6. RIWAYAT PENDIDIKAN (EDUCATION)
  // --------------------------------------------------------------------------
  // Anda bisa menambah, mengedit, atau menghapus daftar sekolah/kampus di bawah:
  education: [
    {
      title: "Institut Prima Bangsa",
      desc: "Teknik Komputer",
      date: "2024 – Sekarang",
      logo: "./assets/logo-institut-prima-bangsa.png"
    },
    {
      title: "SMK Nasional Kota Cirebon",
      desc: "Teknik Kendaraan Ringan Otomotif",
      date: "2019 – 2021",
      logo: "./assets/logo-smk-cirebon.png"
    }
  ],

  // --------------------------------------------------------------------------
  // 7. PENGALAMAN KERJA / ORGANISASI (EXPERIENCE)
  // --------------------------------------------------------------------------
  experience: [
    {
      title: "Freeport",
      desc: "Kadang Free Kadang Repot",
      date: "2021",
      logo: "./assets/logo-freshgrade.png"
    }
  ],

  // --------------------------------------------------------------------------
  // 8. STATISTIK PENCAPAIAN (KARTU KECIL DI SECTION EXPERIENCE)
  // --------------------------------------------------------------------------
  stats: [
    { label: "Projects", detail: "Karya yang dibuat", value: "3" },
    { label: "Certificates", detail: "Skill yang divalidasi", value: "2" },
    { label: "Awards", detail: "Pencapaian diraih", value: "3" }
  ],

  // --------------------------------------------------------------------------
  // DAFTAR SERTIFIKAT (CERTIFICATES)
  // --------------------------------------------------------------------------
  certificates: [
    {
      id: "desain-grafis-abasca",
      title: "Pelatihan Desain Grafis - LKP Abasca",
      image: "./assets/sertifikat-desain-grafis-abasca.jpg",
      mobileImage: "./assets/sertifikat-desain-grafis-abasca.webp"
    },
    {
      id: "apresiasi-lemahtamba",
      title: "Certificate of Appreciation - Liga Lemahtamba Piala Mada Jabar",
      image: "./assets/piagam-lemahtamba-mada-jabar.jpg",
      mobileImage: "./assets/piagam-lemahtamba-mada-jabar.webp"
    }
  ],

  // --------------------------------------------------------------------------
  // DAFTAR PENGHARGAAN & PRESTASI (AWARDS / ACHIEVEMENTS)
  // --------------------------------------------------------------------------
  awards: [
    {
      id: "juara1-lodaya-2019",
      title: "Juara I Friendly Game Lodaya Bersahabat U16 Brebes",
      image: "./assets/piagam-juara1-lodaya-brebes-2019.jpg",
      mobileImage: "./assets/piagam-juara1-lodaya-brebes-2019.webp"
    },
    {
      id: "juara1-bintang-putra-2017",
      title: "Juara I Friendly Game U-14 Bintang Putra Cup Brebes",
      image: "./assets/piagam-juara1-bintang-putra-2017.jpg",
      mobileImage: "./assets/piagam-juara1-bintang-putra-2017.webp"
    },
    {
      id: "apresiasi-lemahtamba-award",
      title: "Penghargaan & Apresiasi Liga Lemahtamba Piala Mada Jabar",
      image: "./assets/piagam-lemahtamba-mada-jabar.jpg",
      mobileImage: "./assets/piagam-lemahtamba-mada-jabar.webp"
    }
  ],

  // --------------------------------------------------------------------------
  // 9. PLAYLIST SPOTIFY
  // --------------------------------------------------------------------------
  spotify: {
    title: "A little music.",
    subtitle: "A lot of ideas.",
    description:
      "Musik yang menemani proses saya mengubah ide menjadi sesuatu yang nyata. Intip playlist yang sedang sering saya putar.",
    btnText: "Daily Rotation di Spotify",
    playlistUrl: "https://open.spotify.com/playlist/3XXwLc91K6JYhtotQO98S4",
    embedUrl:
      "https://open.spotify.com/embed/playlist/3XXwLc91K6JYhtotQO98S4?utm_source=generator&theme=0&si=8159cd1856464587"
  },

  // --------------------------------------------------------------------------
  // 10. DAFTAR PROYEK (PORTFOLIO PROJECTS)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "web-sekolah",
      title: "Web Portal SMK Nasional Kota Cirebon",
      category: "web",
      categoryLabel: "Web Portal",
      gradient: "linear-gradient(135deg, #091e3a 0%, #0d9488 50%, #10b981 100%)",
      image: "./assets/webSekolah-cirebon.png",
      mobileImage: "./assets/webSekolah-cirebon.webp",
      description:
        "Website portal informasi sekolah dan sistem SPMB (Penerimaan Peserta Didik Baru) online SMK Nasional Kota Cirebon.",
      longDesc:
        "Platform portal resmi SMK Nasional Kota Cirebon yang dirancang modern, interaktif, dan responsif. Menyediakan informasi lengkap seputar profil sekolah, jurusan keahlian, berita kegiatan, testimoni, direktori alumni, serta sistem pendaftaran peserta didik baru (SPMB/PPDB) secara digital untuk memudahkan calon siswa dan wali murid.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "VScode"]
    },
    {
      id: "siabsen",
      title: "SIABSEN - Absensi Siswa QR & Notifikasi WhatsApp",
      category: "web",
      categoryLabel: "Sistem Absensi QR",
      image: "./assets/siabsen-cirebon.png",
      mobileImage: "./assets/siabsen-cirebon.webp",
      gradient: "linear-gradient(135deg, #092c28 0%, #0d9488 50%, #14b8a6 100%)",
      description:
        "Sistem absensi siswa berbasis pemindaian QR Code real-time yang terintegrasi langsung dengan notifikasi WhatsApp orang tua/wali murid.",
      longDesc:
        "SIABSEN adalah platform manajemen kehadiran dan absensi siswa berbasis QR Code untuk SMK Nasional Cirebon. Sistem ini menyediakan pemindaian kehadiran real-time, rekapitulasi data akademik terpadu, serta pengiriman pesan notifikasi otomatis via WhatsApp kepada orang tua saat siswa melakukan presensi, memberikan rasa aman dan transparansi kehadiran siswa.",
      tags: ["PHP", "Laravel", "JavaScript", "MySQL", "QR Code", "WhatsApp API", "Tailwind CSS", "VScode"]
    },
    {
      id: "sakuku",
      title: "SAKUKU - Dompet & Pusat Kendali Berbasis AI",
      category: "web",
      categoryLabel: "Fintech & AI Productivity",
      image: "./assets/sakuku-app.png",
      mobileImage: "./assets/sakuku-app.webp",
      gradient: "linear-gradient(135deg, #0b1a2e 0%, #1e40af 50%, #f97316 100%)",
      description:
        "Aplikasi pengelola keuangan cerdas berbasis AI yang terintegrasi dengan Habit Tracker, manajemen jadwal, dan scan struk otomatis.",
      longDesc:
        "SAKUKU adalah aplikasi dompet digital dan pusat kendali produktivitas pribadi yang mengintegrasikan kecerdasan buatan (AI). Dilengkapi dengan asisten keuangan cerdas, pemindaian struk otomatis (Scan Struk AI), pemantauan saldo kas real-time, pencatatan piutang, hingga Habit Tracker harian dan kalender jadwal terpadu dalam satu dashboard yang intuitif dan elegan.",
      tags: ["React", "Next.js", "Tailwind CSS", "AI / OCR", "Gemini AI", "Node.js", "PostgreSQL", "VScode"]
    }
  ],

  // --------------------------------------------------------------------------
  // 11. SECTION HUBUNGI SAYA (CONTACT)
  // --------------------------------------------------------------------------
  contactTitle: "Hubungi saya",
  contactCardTitle: "Hubungi",
  contactSubtitle: "Ada yang mau didiskusikan? Langsung kirim pesan aja ya...",

  // --------------------------------------------------------------------------
  // 12. FOOTER (BAGIAN PALING BAWAH)
  // --------------------------------------------------------------------------
  footerTagline:
    "Membangun pengalaman web modern dengan presisi kode, tipografi tajam, dan dimensi 3D interaktif.",

  // --------------------------------------------------------------------------
  // 13. KONEKSI SUPABASE (FORM KONTAK & KOMENTAR)
  // --------------------------------------------------------------------------
  supabase: {
    // URL Project Supabase Anda
    url: "https://dvmidvfssfxjzihztcsi.supabase.co",
    // Publishable API Key Supabase Anda
    publishableKey: "sb_publishable_oS_8DctxII2FjwFa0oAphQ_3pf_vtiF"
  }
};

// Sinkronkan judul tab browser secara otomatis
if (typeof document !== "undefined" && window.MY_PORTFOLIO.pageTitle) {
  document.title = window.MY_PORTFOLIO.pageTitle;
}

