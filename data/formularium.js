/*
  FORMULARIUM VET-SCRIPT  (versi contoh 0.1)
  ------------------------------------------------------------
  PERHATIAN: angka di bawah ini CONTOH untuk uji coba aplikasi.
  Setiap baris WAJIB diverifikasi tim (ketua + anggota 1) terhadap
  rujukan formularium veteriner terkini sebelum dipakai mahasiswa.
  Sumber kerja tim: formularium/formularium_template.csv
  ------------------------------------------------------------
  Struktur tiap obat:
    id        : kode unik (huruf kecil, tanpa spasi)
    nama      : nama generik
    sediaan   : sediaan yang tersedia
    rute      : rute yang lazim
    spesies   : { namaSpesies: { min, max, satuan, catatan } }  -> dosis per kgBB
    kontra    : { namaSpesies: "alasan" }                       -> dilarang pada spesies itu
    akibat    : { namaSpesies: "konsekuensi yang ditampilkan simulator" }
    rujukan   : sumber yang dipakai tim
*/
window.FORMULARIUM = [
  {
    id: "nac",
    nama: "N-asetilsistein",
    sediaan: "Larutan injeksi 200 mg/ml",
    rute: "i.v.",
    spesies: {
      kucing: { min: 140, max: 140, satuan: "mg/kg", catatan: "Dosis awal; dilanjutkan 70 mg/kg tiap 6 jam" },
      anjing: { min: 140, max: 140, satuan: "mg/kg", catatan: "Dosis awal; dilanjutkan 70 mg/kg tiap 6 jam" }
    },
    kontra: {},
    akibat: {},
    rujukan: "[isi: rujukan formularium, edisi, halaman]"
  },
  {
    id: "meloksikam",
    nama: "Meloksikam",
    sediaan: "Tablet 7,5 mg; suspensi oral 0,5 mg/ml",
    rute: "p.o.",
    spesies: {
      kucing: { min: 0.05, max: 0.1, satuan: "mg/kg", catatan: "0,1 mg/kg hari pertama, lalu 0,05 mg/kg/hari" },
      anjing: { min: 0.1, max: 0.2, satuan: "mg/kg", catatan: "0,2 mg/kg hari pertama, lalu 0,1 mg/kg/hari" }
    },
    kontra: {},
    akibat: {
      kucing: "Dosis berlebih NSAID pada kucing: muntah, ulkus lambung, dan cedera ginjal akut.",
      anjing: "Dosis berlebih NSAID pada anjing: muntah berdarah dan gangguan ginjal."
    },
    rujukan: "[isi: rujukan formularium, edisi, halaman]"
  },
  {
    id: "parasetamol",
    nama: "Parasetamol",
    sediaan: "Tablet 500 mg; sirup 120 mg/5 ml",
    rute: "p.o.",
    spesies: {
      anjing: { min: 10, max: 15, satuan: "mg/kg", catatan: "Tiap 8–12 jam; hati-hati pada gangguan hati" }
    },
    kontra: {
      kucing: "Kucing kekurangan enzim glukuronidasi; parasetamol menyebabkan methemoglobinemia dan cedera hati."
    },
    akibat: {
      kucing: "Simulasi: mukosa kecokelatan, sesak, wajah bengkak dalam beberapa jam. Pasien memburuk."
    },
    rujukan: "[isi: rujukan formularium, edisi, halaman]"
  },
  {
    id: "amoksisilin",
    nama: "Amoksisilin",
    sediaan: "Tablet 250 mg; suspensi 125 mg/5 ml",
    rute: "p.o.",
    spesies: {
      kucing: { min: 10, max: 20, satuan: "mg/kg", catatan: "Tiap 12 jam" },
      anjing: { min: 10, max: 20, satuan: "mg/kg", catatan: "Tiap 12 jam" }
    },
    kontra: {},
    akibat: {},
    rujukan: "[isi: rujukan formularium, edisi, halaman]"
  },
  {
    id: "maropitant",
    nama: "Maropitant",
    sediaan: "Injeksi 10 mg/ml",
    rute: "s.c.",
    spesies: {
      kucing: { min: 1, max: 1, satuan: "mg/kg", catatan: "Sekali sehari" },
      anjing: { min: 1, max: 1, satuan: "mg/kg", catatan: "Sekali sehari" }
    },
    kontra: {},
    akibat: {},
    rujukan: "[isi: rujukan formularium, edisi, halaman]"
  }
];
