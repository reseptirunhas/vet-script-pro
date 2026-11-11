/*
  BANK MISI VET-SCRIPT  (versi contoh 0.1)
  Templat penulisan misi: misi/TEMPLAT_MISI.md
  Kasus berasal dari arsip RSH Unhas yang identitasnya DISAMARKAN.
  Jangan pernah menulis nama pemilik asli, nomor rekam medis, atau data pribadi.
*/
window.MISI = [
  {
    id: "L04-M01",
    level: 4,
    topik: "Obat berbahaya per spesies",
    judul: "Mochi dan tablet demam",
    narasi: "Bu Rina datang panik. Mochi, kucing betina 2 tahun, 3,2 kg, semalam diberi setengah tablet parasetamol karena demam. Pagi ini Mochi lemas, mukosanya kecokelatan, dan wajahnya bengkak.",
    pasien: { nama: "Mochi", spesies: "kucing", umur: "2 tahun", bb: 3.2 },
    kunci: {
      obatWajib: ["nac"],
      pesanWajib: "Antidotum keracunan parasetamol belum diresepkan.",
      catatanDosen: "Fokus debrief: mengapa kucing rentan terhadap parasetamol, dan mengapa NSAID juga dihindari pada pasien ini."
    },
    cpmk: ["CPMK-2", "CPMK-3"],
    lencana: ["Sahabat Kucing", "Dosis Akurat"]
  }
];
