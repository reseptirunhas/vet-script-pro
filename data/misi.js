/*
  BANK MISI VET-SCRIPT  (versi contoh 0.3, 8 kasus)
  ------------------------------------------------------------
  PERHATIAN: DRAF. Setiap kasus dan kuncinya WAJIB ditelaah tim dan
  divalidasi pakar sebelum dipakai mahasiswa.
  Kasus berasal dari arsip yang identitasnya DISAMARKAN.
  Jangan pernah menulis nama pemilik asli, nomor rekam medis, atau data pribadi.

  Isi "kunci":
    obatWajib : semua obat di daftar ini harus ada di resep
    salahSatu : cukup salah satu obat di daftar ini ada di resep
    pesanWajib: pesan kuning bila obat kunci belum diresepkan
    hindari   : { idObat: "alasan" } obat yang tidak tepat untuk kasus ini
    hint      : pertanyaan pemandu (dibuka dengan menukar 20 XP)
  ------------------------------------------------------------
*/
window.MISI = [
  {
    id: "L01-M01", level: 1, topik: "Dermatologi: pioderma",
    judul: "Bruno yang terus menggaruk",
    narasi: "Pak Arman membawa Bruno, anjing lokal jantan 3 tahun, 12 kg. Sudah dua minggu Bruno menggaruk perut dan ketiaknya. Tampak papula, pustula, dan kerak melingkar. Sitologi memperlihatkan kokus dalam jumlah banyak. Nafsu makan baik.",
    pasien: { nama: "Bruno", spesies: "anjing", umur: "3 tahun", bb: 12 },
    kunci: {
      salahSatu: ["sefaleksin", "amoksiklav", "klindamisin"],
      pesanWajib: "Antibiotik sistemik lini pertama untuk pioderma superfisial belum diresepkan.",
      hint: "Antibiotik lini pertama apa yang dipakai untuk pioderma superfisial pada anjing, dan berapa minggu lamanya?",
      catatanDosen: "Fokus debrief: lama terapi pioderma dan alasan fluorokuinolon tidak menjadi pilihan pertama."
    },
    cpmk: ["CPMK-2"], lencana: ["Antimikroba Bijak"]
  },
  {
    id: "L02-M01", level: 2, topik: "Gastrointestinal: muntah akut",
    judul: "Kiko muntah sejak semalam",
    narasi: "Kiko, anjing Pomeranian betina 4 tahun, 3,5 kg, muntah lima kali sejak semalam setelah memakan sisa gorengan. Kiko masih mau minum, tidak diare, dan palpasi abdomen tidak menemukan benda asing. Dehidrasi ringan.",
    pasien: { nama: "Kiko", spesies: "anjing", umur: "4 tahun", bb: 3.5 },
    kunci: {
      salahSatu: ["maropitant", "ondansetron", "metoklopramid"],
      pesanWajib: "Antiemetik belum diresepkan.",
      hint: "Antiemetik mana yang aman bila obstruksi sudah disingkirkan, dan berapa lama boleh diberikan?",
      catatanDosen: "Fokus debrief: menyingkirkan obstruksi sebelum memberi prokinetik."
    },
    cpmk: ["CPMK-2"], lencana: ["Dosis Akurat"]
  },
  {
    id: "L03-M01", level: 3, topik: "Respirasi: flu kucing",
    judul: "Luna bersin dan matanya berair",
    narasi: "Luna, kucing betina 8 bulan, 2,4 kg, baru diadopsi dari penampungan. Tiga hari ini Luna bersin, matanya berair dan merah, dan muncul ulkus kecil di kornea. Suhu 39,6 °C dan nafsu makan menurun.",
    pasien: { nama: "Luna", spesies: "kucing", umur: "8 bulan", bb: 2.4 },
    kunci: {
      salahSatu: ["famsiklovir", "doksisiklin", "amoksiklav"],
      pesanWajib: "Terapi untuk infeksi saluran napas atas (antivirus FHV-1 atau antibiotik untuk infeksi sekunder) belum diresepkan.",
      hint: "Bila memilih tablet doksisiklin untuk kucing, pesan apa yang wajib disampaikan kepada pemilik?",
      catatanDosen: "Fokus debrief: risiko esofagitis akibat tablet doksisiklin pada kucing."
    },
    cpmk: ["CPMK-2", "CPMK-3"], lencana: ["Sahabat Kucing"]
  },
  {
    id: "L04-M01", level: 4, topik: "Obat berbahaya per spesies",
    judul: "Mochi dan tablet demam",
    narasi: "Bu Rina datang panik. Mochi, kucing betina 2 tahun, 3,2 kg, semalam diberi setengah tablet parasetamol karena demam. Pagi ini Mochi lemas, mukosanya kecokelatan, dan wajahnya bengkak.",
    pasien: { nama: "Mochi", spesies: "kucing", umur: "2 tahun", bb: 3.2 },
    kunci: {
      obatWajib: ["nac"],
      pesanWajib: "Antidotum keracunan parasetamol belum diresepkan.",
      hindari: {
        meloksikam: "NSAID dihindari pada pasien ini karena hati dan ginjalnya sedang terbebani."
      },
      hint: "Sudahkah setiap obat dalam resep ini aman untuk kucing? Antidotum apa yang menggantikan glutation?",
      catatanDosen: "Fokus debrief: mengapa kucing rentan terhadap parasetamol, dan mengapa NSAID juga dihindari pada pasien ini."
    },
    cpmk: ["CPMK-2", "CPMK-3"], lencana: ["Sahabat Kucing", "Dosis Akurat"]
  },
  {
    id: "L04-M02", level: 4, topik: "Ektoparasit pada kucing",
    judul: "Oyen dan telinga berkerak",
    narasi: "Oyen, kucing jantan 1 tahun, 3 kg, gatal hebat. Tepi telinga dan wajahnya berkerak tebal. Kerokan kulit menemukan tungau Notoedres cati. Pemiliknya bertanya apakah obat kutu anjing di rumah boleh dipakai.",
    pasien: { nama: "Oyen", spesies: "kucing", umur: "1 tahun", bb: 3 },
    kunci: {
      salahSatu: ["ivermektin", "selamektin", "moksidektin"],
      pesanWajib: "Antiparasit untuk skabies kucing belum diresepkan.",
      hint: "Obat kutu anjing di rumah pemilik mengandung apa, dan mengapa itu penting untuk kucing?",
      catatanDosen: "Fokus debrief: toksisitas permetrin pada kucing dan komunikasi kepada pemilik."
    },
    cpmk: ["CPMK-2", "CPMK-3"], lencana: ["Sahabat Kucing", "Komunikator Klien"]
  },
  {
    id: "L05-M01", level: 5, topik: "Parasit darah",
    judul: "Rocky lesu dan urinnya gelap",
    narasi: "Rocky, anjing Golden Retriever jantan 5 tahun, 28 kg, lesu, demam 40,1 °C, mukosa pucat, dan urinnya berwarna cokelat tua. Banyak caplak di sela jari. Ulas darah menemukan Babesia sp.",
    pasien: { nama: "Rocky", spesies: "anjing", umur: "5 tahun", bb: 28 },
    kunci: {
      obatWajib: ["imidokarb"],
      pesanWajib: "Antiprotozoa untuk babesiosis belum diresepkan.",
      hint: "Obat apa yang diberikan 15–30 menit sebelum imidokarb, dan untuk mencegah apa?",
      catatanDosen: "Fokus debrief: premedikasi atropin dan pengendalian caplak."
    },
    cpmk: ["CPMK-2"], lencana: ["Dosis Akurat"]
  },
  {
    id: "L05-M02", level: 5, topik: "Toksikologi: rodentisida",
    judul: "Bella dan racun tikus",
    narasi: "Bella, anjing Beagle betina 2 tahun, 9 kg, dua hari lalu memakan umpan racun tikus antikoagulan di gudang. Hari ini gusinya berdarah dan muncul memar di perut. Waktu pembekuan darah memanjang.",
    pasien: { nama: "Bella", spesies: "anjing", umur: "2 tahun", bb: 9 },
    kunci: {
      obatWajib: ["vitamin_k1"],
      pesanWajib: "Antidotum rodentisida antikoagulan belum diresepkan.",
      hindari: {
        meloksikam: "NSAID memperberat perdarahan pada pasien dengan gangguan pembekuan.",
        karprofen: "NSAID memperberat perdarahan pada pasien dengan gangguan pembekuan."
      },
      hint: "Berapa minggu antidotum harus diberikan, dan mengapa tidak cukup beberapa hari?",
      catatanDosen: "Fokus debrief: lama terapi vitamin K1 dan rute pemberian yang aman."
    },
    cpmk: ["CPMK-2", "CPMK-3"], lencana: ["Dosis Akurat"]
  },
  {
    id: "L06-M01", level: 6, topik: "Ternak: endoparasit dan waktu henti",
    judul: "Kambing Pak Sudi kurus dan pucat",
    narasi: "Pak Sudi memelihara 12 ekor kambing kacang. Seekor betina dewasa 25 kg, tidak bunting dan tidak laktasi, tampak kurus, mukosa mata pucat, dan bengkak di bawah rahang. Pemeriksaan feses menemukan telur Haemonchus dalam jumlah banyak. Kambing ini rencananya dijual untuk dipotong bulan depan.",
    pasien: { nama: "Kambing betina", spesies: "kambing", umur: "dewasa", bb: 25 },
    kunci: {
      salahSatu: ["albendazol", "fenbendazol", "levamisol", "ivermektin"],
      pesanWajib: "Antelmintik belum diresepkan.",
      hint: "Kambing ini akan dipotong bulan depan. Informasi apa pada label obat yang wajib disampaikan kepada peternak?",
      catatanDosen: "Fokus debrief: waktu henti obat, penimbangan ternak, dan resistensi antelmintik."
    },
    cpmk: ["CPMK-2", "CPMK-3"], lencana: ["Waktu Henti Aman"]
  }
];
