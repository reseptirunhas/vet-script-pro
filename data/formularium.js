/*
  FORMULARIUM VET-SCRIPT  (draf 0.2, 57 obat)
  ------------------------------------------------------------
  PERHATIAN: DRAF. Setiap baris WAJIB diverifikasi tim (ketua + anggota 1)
  terhadap rujukan formularium veteriner terkini sebelum dipakai mahasiswa.
  Sumber kerja tim: formularium/Formularium_VET-SCRIPT_draf.xlsx
  Satuan dosis umumnya mg/kg; bila berbeda (IU/kg, ml/kg) tertulis di "satuan".
  Waktu henti hewan pangan: selalu ikuti label produk yang dipakai.
  ------------------------------------------------------------
*/
window.FORMULARIUM = [
  {
    "id": "maropitant",
    "nama": "Maropitant",
    "golongan": "Antiemetik (antagonis NK1)",
    "sediaan": "Injeksi 10 mg/ml; tablet 16, 24, 60 mg",
    "rute": "s.c.; p.o.",
    "spesies": {
      "anjing": {
        "min": 1,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "1 mg/kg s.c. atau 2 mg/kg p.o. tiap 24 jam, maks. 5 hari"
      },
      "kucing": {
        "min": 1,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "1 mg/kg s.c./p.o. tiap 24 jam, maks. 5 hari"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "ondansetron",
    "nama": "Ondansetron",
    "golongan": "Antiemetik (antagonis 5-HT3)",
    "sediaan": "Injeksi 2 mg/ml; tablet 4 mg, 8 mg",
    "rute": "i.v. pelan; p.o.",
    "spesies": {
      "anjing": {
        "min": 0.1,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      },
      "kucing": {
        "min": 0.1,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "metoklopramid",
    "nama": "Metoklopramid",
    "golongan": "Antiemetik/prokinetik",
    "sediaan": "Injeksi 5 mg/ml; tablet 10 mg",
    "rute": "s.c.; p.o.",
    "spesies": {
      "anjing": {
        "min": 0.2,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 6–8 jam"
      },
      "kucing": {
        "min": 0.2,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 6–8 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Kontraindikasi pada obstruksi atau perforasi saluran cerna dan epilepsi.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "omeprazol",
    "nama": "Omeprazol",
    "golongan": "Penghambat pompa proton",
    "sediaan": "Kapsul 20 mg; injeksi 40 mg",
    "rute": "p.o.; i.v.",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      },
      "kucing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "lansoprazol",
    "nama": "Lansoprazol",
    "golongan": "Penghambat pompa proton",
    "sediaan": "Kapsul 15 mg, 30 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.6,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam; data veteriner terbatas"
      },
      "kucing": {
        "min": 0.6,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam; data veteriner terbatas"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "famotidin",
    "nama": "Famotidin",
    "golongan": "Antagonis H2",
    "sediaan": "Tablet 20 mg, 40 mg; injeksi 10 mg/ml",
    "rute": "p.o.; i.v. pelan",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      },
      "kucing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "ursodiol",
    "nama": "Asam ursodeoksikolat",
    "golongan": "Koleretik/hepatoprotektor",
    "sediaan": "Tablet 250 mg; kapsul 300 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 10,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam, bersama makanan"
      },
      "kucing": {
        "min": 10,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam, bersama makanan"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Kontraindikasi pada obstruksi saluran empedu.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "amoksisilin",
    "nama": "Amoksisilin",
    "golongan": "Antibiotik beta-laktam",
    "sediaan": "Tablet 250, 500 mg; suspensi 125 mg/5 ml; injeksi LA 150 mg/ml",
    "rute": "p.o.; i.m.",
    "spesies": {
      "anjing": {
        "min": 10,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      },
      "kucing": {
        "min": 10,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      },
      "sapi": {
        "min": 7,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "sediaan injeksi; frekuensi sesuai label"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {
      "daging": "ikuti label produk yang dipakai",
      "susu": "ikuti label produk yang dipakai"
    },
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "amoksiklav",
    "nama": "Amoksisilin–klavulanat",
    "golongan": "Antibiotik beta-laktam + penghambat beta-laktamase",
    "sediaan": "Tablet 250 mg, 500 mg (dosis dihitung dari gabungan)",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 12.5,
        "max": 25,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam"
      },
      "kucing": {
        "min": 12.5,
        "max": 25,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "sefaleksin",
    "nama": "Sefaleksin",
    "golongan": "Antibiotik sefalosporin generasi 1",
    "sediaan": "Kapsul 250, 500 mg; sirup 125 mg/5 ml",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 22,
        "max": 30,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam; pioderma minimal 3 minggu"
      },
      "kucing": {
        "min": 22,
        "max": 30,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "doksisiklin",
    "nama": "Doksisiklin",
    "golongan": "Antibiotik tetrasiklin",
    "sediaan": "Kapsul/tablet 100 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      },
      "kucing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam; WAJIB diikuti air atau makanan"
      }
    },
    "kontra": {},
    "akibat": {
      "kucing": "Tablet yang tertahan di esofagus kucing dapat menyebabkan esofagitis dan striktur."
    },
    "waktuHenti": {},
    "catatan": "Pada kucing selalu bilas dengan 5–6 ml air setelah tablet.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "klindamisin",
    "nama": "Klindamisin",
    "golongan": "Antibiotik linkosamid",
    "sediaan": "Kapsul 75, 150, 300 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 5.5,
        "max": 11,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam"
      },
      "kucing": {
        "min": 5.5,
        "max": 11,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam; bilas dengan air"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "metronidazol",
    "nama": "Metronidazol",
    "golongan": "Antibakteri anaerob/antiprotozoa",
    "sediaan": "Tablet 250, 500 mg; suspensi 125 mg/5 ml",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 10,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam"
      },
      "kucing": {
        "min": 10,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam"
      }
    },
    "kontra": {},
    "akibat": {
      "anjing": "Dosis tinggi metronidazol: ataksia, nistagmus, dan kejang (neurotoksik).",
      "kucing": "Dosis tinggi metronidazol: ataksia dan kejang (neurotoksik)."
    },
    "waktuHenti": {
      "daging": "DILARANG untuk hewan penghasil pangan",
      "susu": "DILARANG",
      "telur": "DILARANG"
    },
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "marbofloksasin",
    "nama": "Marbofloksasin",
    "golongan": "Antibiotik fluorokuinolon",
    "sediaan": "Tablet 5, 20, 80 mg; injeksi 10 mg/ml",
    "rute": "p.o.; s.c.",
    "spesies": {
      "anjing": {
        "min": 2.75,
        "max": 5.5,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      },
      "kucing": {
        "min": 2.75,
        "max": 5.5,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Hindari pada anjing yang sedang tumbuh (risiko kerusakan kartilago).",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "enrofloksasin",
    "nama": "Enrofloksasin",
    "golongan": "Antibiotik fluorokuinolon",
    "sediaan": "Tablet 50 mg; injeksi 50 mg/ml; larutan oral 10% (unggas)",
    "rute": "p.o.; s.c.; air minum",
    "spesies": {
      "anjing": {
        "min": 5,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      },
      "kucing": {
        "min": 5,
        "max": 5,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam; JANGAN melebihi 5 mg/kg"
      },
      "ayam": {
        "min": 10,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "per hari lewat air minum, 3–5 hari"
      }
    },
    "kontra": {},
    "akibat": {
      "kucing": "Enrofloksasin di atas 5 mg/kg pada kucing dapat menyebabkan degenerasi retina dan kebutaan."
    },
    "waktuHenti": {
      "daging": "ikuti label produk yang dipakai",
      "telur": "Tidak untuk ayam petelur yang telurnya dikonsumsi"
    },
    "catatan": "Hindari pada anjing yang sedang tumbuh.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "tmps",
    "nama": "Trimetoprim–sulfametoksazol",
    "golongan": "Antibiotik potensiasi sulfonamid",
    "sediaan": "Tablet 480 mg (80 + 400 mg); suspensi",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 15,
        "max": 30,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam (dosis gabungan)"
      },
      "kucing": {
        "min": 15,
        "max": 30,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam (dosis gabungan)"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pantau keratokonjungtivitis sicca; hati-hati pada Doberman.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "oksitetrasiklin_la",
    "nama": "Oksitetrasiklin long acting",
    "golongan": "Antibiotik tetrasiklin",
    "sediaan": "Injeksi LA 200 mg/ml",
    "rute": "i.m. dalam",
    "spesies": {
      "sapi": {
        "min": 20,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal; maks. 10 ml per titik suntik"
      },
      "kambing": {
        "min": 20,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {
      "daging": "28 hari (contoh label; cek label produk)",
      "susu": "ikuti label produk yang dipakai"
    },
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "ivermektin",
    "nama": "Ivermektin",
    "golongan": "Antiparasit makrosiklik laktona",
    "sediaan": "Injeksi 1% (10 mg/ml)",
    "rute": "s.c.",
    "spesies": {
      "anjing": {
        "min": 0.2,
        "max": 0.4,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal, dapat diulang 14 hari; demodekosis memakai protokol khusus"
      },
      "kucing": {
        "min": 0.2,
        "max": 0.3,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      },
      "sapi": {
        "min": 0.2,
        "max": 0.2,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal s.c."
      },
      "kambing": {
        "min": 0.2,
        "max": 0.2,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      }
    },
    "kontra": {},
    "akibat": {
      "anjing": "Pada anjing ras Collie, Shetland, Australian Shepherd (mutasi MDR1) ivermektin dapat menyebabkan ataksia, kebutaan, koma."
    },
    "waktuHenti": {
      "daging": "35 hari pada sapi (contoh label; cek label)",
      "susu": "Tidak untuk sapi perah laktasi (sesuai label)"
    },
    "catatan": "Tanyakan ras anjing: hindari pada ras Collie dan kerabatnya (MDR1).",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "selamektin",
    "nama": "Selamektin",
    "golongan": "Antiparasit spot-on",
    "sediaan": "Pipet spot-on 6% dan 12%",
    "rute": "topikal",
    "spesies": {
      "anjing": {
        "min": 6,
        "max": 12,
        "satuan": "mg/kg",
        "catatan": "topikal tiap 30 hari"
      },
      "kucing": {
        "min": 6,
        "max": 12,
        "satuan": "mg/kg",
        "catatan": "topikal tiap 30 hari"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "moksidektin",
    "nama": "Imidakloprid–moksidektin",
    "golongan": "Antiparasit spot-on",
    "sediaan": "Pipet spot-on sesuai berat badan",
    "rute": "topikal",
    "spesies": {
      "anjing": {
        "min": 2.5,
        "max": 6.25,
        "satuan": "mg/kg",
        "catatan": "dihitung dari moksidektin; tiap 30 hari"
      },
      "kucing": {
        "min": 1,
        "max": 2.5,
        "satuan": "mg/kg",
        "catatan": "dihitung dari moksidektin; tiap 30 hari"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pilih pipet sesuai rentang berat badan pada label.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "fluralaner",
    "nama": "Fluralaner",
    "golongan": "Antiparasit isoksazolin",
    "sediaan": "Tablet kunyah anjing; spot-on kucing",
    "rute": "p.o. (anjing); topikal (kucing)",
    "spesies": {
      "anjing": {
        "min": 25,
        "max": 56,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal p.o., berlaku 12 minggu"
      },
      "kucing": {
        "min": 40,
        "max": 94,
        "satuan": "mg/kg",
        "catatan": "spot-on, berlaku 12 minggu"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Hati-hati pada hewan dengan riwayat kejang.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "permetrin",
    "nama": "Permetrin",
    "golongan": "Insektisida piretroid",
    "sediaan": "Spot-on/semprot khusus anjing",
    "rute": "topikal",
    "spesies": {},
    "kontra": {
      "kucing": "Kucing sangat sensitif terhadap permetrin; produk anjing tidak boleh dipakai pada kucing."
    },
    "akibat": {
      "kucing": "Simulasi: tremor, kedutan otot, hipersalivasi, dan kejang dalam beberapa jam."
    },
    "waktuHenti": {},
    "catatan": "Dosis anjing mengikuti pipet sesuai berat badan pada label.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "imidokarb",
    "nama": "Imidokarb dipropionat",
    "golongan": "Antiprotozoa (babesiosis)",
    "sediaan": "Injeksi 120 mg/ml",
    "rute": "s.c.; i.m.",
    "spesies": {
      "anjing": {
        "min": 6.6,
        "max": 6.6,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal, ulang setelah 14 hari"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Berikan atropin 0,02–0,04 mg/kg 15–30 menit sebelumnya untuk mencegah efek kolinergik.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "albendazol",
    "nama": "Albendazol",
    "golongan": "Antelmintik benzimidazol",
    "sediaan": "Suspensi 2,5%, 10%; bolus",
    "rute": "p.o.",
    "spesies": {
      "sapi": {
        "min": 10,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      },
      "kambing": {
        "min": 10,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {
      "daging": "27 hari pada sapi (contoh label; cek label)",
      "susu": "Tidak untuk ternak laktasi kecuali label mengizinkan"
    },
    "catatan": "TERATOGENIK: jangan diberikan pada 45 hari pertama kebuntingan.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "fenbendazol",
    "nama": "Fenbendazol",
    "golongan": "Antelmintik benzimidazol",
    "sediaan": "Tablet/granul 222 mg/g; suspensi 10%",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 50,
        "max": 50,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam selama 3–5 hari"
      },
      "kucing": {
        "min": 50,
        "max": 50,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam selama 3–5 hari"
      },
      "kambing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {
      "daging": "ikuti label produk yang dipakai",
      "susu": "ikuti label produk yang dipakai"
    },
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "pirantel",
    "nama": "Pirantel pamoat",
    "golongan": "Antelmintik",
    "sediaan": "Tablet 125 mg; suspensi 50 mg/ml",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal, ulang 2–3 minggu"
      },
      "kucing": {
        "min": 10,
        "max": 20,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal, ulang 2–3 minggu"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "prazikuantel",
    "nama": "Prazikuantel",
    "golongan": "Antelmintik (cestoda)",
    "sediaan": "Tablet 50 mg; injeksi 56,8 mg/ml",
    "rute": "p.o.; s.c.",
    "spesies": {
      "anjing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      },
      "kucing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "levamisol",
    "nama": "Levamisol",
    "golongan": "Antelmintik imidazotiazol",
    "sediaan": "Larutan/serbuk oral; injeksi",
    "rute": "p.o.; s.c.",
    "spesies": {
      "sapi": {
        "min": 7.5,
        "max": 8,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      },
      "kambing": {
        "min": 7.5,
        "max": 12,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal"
      },
      "ayam": {
        "min": 20,
        "max": 30,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal lewat air minum"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {
      "daging": "ikuti label produk yang dipakai",
      "susu": "ikuti label produk yang dipakai",
      "telur": "Ada residu pada telur; ikuti label (topik riset tim)"
    },
    "catatan": "Indeks terapi sempit: timbang ternak, jangan ditaksir. Kambing lebih sensitif terhadap dosis berlebih.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "toltrazuril",
    "nama": "Toltrazuril",
    "golongan": "Antikoksidia",
    "sediaan": "Larutan oral 2,5% (unggas); 5% (ruminansia)",
    "rute": "air minum; p.o.",
    "spesies": {
      "ayam": {
        "min": 7,
        "max": 7,
        "satuan": "mg/kg",
        "catatan": "per hari selama 2 hari berturut-turut lewat air minum"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {
      "daging": "ikuti label produk yang dipakai",
      "telur": "Tidak untuk ayam petelur yang telurnya dikonsumsi"
    },
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "meloksikam",
    "nama": "Meloksikam",
    "golongan": "NSAID (preferensial COX-2)",
    "sediaan": "Tablet 7,5 mg, 15 mg; suspensi oral 0,5 mg/ml dan 1,5 mg/ml; injeksi 5 mg/ml",
    "rute": "p.o.; s.c.",
    "spesies": {
      "anjing": {
        "min": 0.1,
        "max": 0.2,
        "satuan": "mg/kg",
        "catatan": "0,2 mg/kg hari pertama, lalu 0,1 mg/kg tiap 24 jam"
      },
      "kucing": {
        "min": 0.05,
        "max": 0.1,
        "satuan": "mg/kg",
        "catatan": "0,1 mg/kg hari pertama, lalu 0,05 mg/kg tiap 24 jam; hindari pada dehidrasi atau penyakit ginjal"
      },
      "sapi": {
        "min": 0.5,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "dosis tunggal s.c."
      }
    },
    "kontra": {},
    "akibat": {
      "kucing": "Dosis berlebih NSAID pada kucing: muntah, ulkus lambung, dan cedera ginjal akut.",
      "anjing": "Dosis berlebih NSAID pada anjing: muntah berdarah, ulkus, dan gangguan ginjal."
    },
    "waktuHenti": {
      "daging": "15 hari pada sapi (contoh label; cek label)",
      "susu": "5 hari pada sapi (contoh label; cek label)"
    },
    "catatan": "Tidak ada sediaan meloksikam 100 mg; dosis 5 mg/kg adalah 25–50 kali dosis anjing.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "karprofen",
    "nama": "Karprofen",
    "golongan": "NSAID",
    "sediaan": "Tablet 25, 50, 100 mg; injeksi 50 mg/ml",
    "rute": "p.o.; s.c.",
    "spesies": {
      "anjing": {
        "min": 2.2,
        "max": 4.4,
        "satuan": "mg/kg",
        "catatan": "2,2 mg/kg tiap 12 jam atau 4,4 mg/kg tiap 24 jam"
      }
    },
    "kontra": {},
    "akibat": {
      "anjing": "Dosis berlebih NSAID pada anjing: muntah berdarah, ulkus, dan gangguan ginjal."
    },
    "waktuHenti": {},
    "catatan": "Pada kucing hanya dosis tunggal perioperatif atas keputusan dokter hewan; tidak untuk terapi berulang.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "parasetamol",
    "nama": "Parasetamol",
    "golongan": "Analgesik-antipiretik",
    "sediaan": "Tablet 500 mg; sirup 120 mg/5 ml",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 10,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam; hati-hati pada gangguan hati"
      }
    },
    "kontra": {
      "kucing": "Kucing kekurangan enzim glukuronidasi; parasetamol menyebabkan methemoglobinemia dan cedera hati."
    },
    "akibat": {
      "kucing": "Simulasi: mukosa kecokelatan, sesak, wajah bengkak dalam beberapa jam. Pasien memburuk."
    },
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "buprenorfin",
    "nama": "Buprenorfin",
    "golongan": "Analgesik opioid",
    "sediaan": "Injeksi 0,3 mg/ml",
    "rute": "i.v.; i.m.; transmukosa oral (kucing)",
    "spesies": {
      "anjing": {
        "min": 0.01,
        "max": 0.02,
        "satuan": "mg/kg",
        "catatan": "tiap 6–8 jam"
      },
      "kucing": {
        "min": 0.01,
        "max": 0.02,
        "satuan": "mg/kg",
        "catatan": "tiap 6–8 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Obat golongan narkotika/psikotropika: penyimpanan dan pencatatan khusus.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "butorfanol",
    "nama": "Butorfanol",
    "golongan": "Analgesik opioid/antitusif",
    "sediaan": "Injeksi 10 mg/ml; tablet 1, 5, 10 mg",
    "rute": "i.v.; i.m.; p.o.",
    "spesies": {
      "anjing": {
        "min": 0.2,
        "max": 0.4,
        "satuan": "mg/kg",
        "catatan": "analgesik i.v./i.m. tiap 1–4 jam; antitusif p.o. 0,5–1 mg/kg tiap 6–12 jam"
      },
      "kucing": {
        "min": 0.2,
        "max": 0.4,
        "satuan": "mg/kg",
        "catatan": "analgesik i.v./i.m."
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Antitusif: jangan dipakai bila batuk produktif.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "tramadol",
    "nama": "Tramadol",
    "golongan": "Analgesik opioid lemah",
    "sediaan": "Tablet 50 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 2,
        "max": 5,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      },
      "kucing": {
        "min": 1,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Rasa pahit pada kucing; hindari bersama obat serotonergik.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "prednisolon",
    "nama": "Prednisolon",
    "golongan": "Glukokortikoid",
    "sediaan": "Tablet 5 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "antiinflamasi 0,5–1 mg/kg/hari; imunosupresi 2 mg/kg/hari, lalu diturunkan bertahap"
      },
      "kucing": {
        "min": 0.5,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "kucing umumnya butuh dosis lebih tinggi; turunkan bertahap"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Jangan dikombinasikan dengan NSAID. Hentikan secara bertahap.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "deksametason",
    "nama": "Deksametason",
    "golongan": "Glukokortikoid",
    "sediaan": "Injeksi 2 mg/ml, 5 mg/ml; tablet 0,5 mg",
    "rute": "i.v.; i.m.; p.o.",
    "spesies": {
      "anjing": {
        "min": 0.05,
        "max": 0.2,
        "satuan": "mg/kg",
        "catatan": "antiinflamasi tiap 24 jam"
      },
      "kucing": {
        "min": 0.05,
        "max": 0.2,
        "satuan": "mg/kg",
        "catatan": "antiinflamasi tiap 24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Dapat menginduksi abortus pada sapi bunting tua. Jangan dikombinasikan dengan NSAID.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "setirizin",
    "nama": "Setirizin",
    "golongan": "Antihistamin H1",
    "sediaan": "Tablet 10 mg; sirup 5 mg/5 ml",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      },
      "kucing": {
        "min": 1,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam (kira-kira 5 mg per ekor)"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "klorfeniramin",
    "nama": "Klorfeniramin maleat (CTM)",
    "golongan": "Antihistamin H1",
    "sediaan": "Tablet 4 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.2,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam (umumnya 4–8 mg per ekor)"
      },
      "kucing": {
        "min": 0.2,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam (1–2 mg per ekor)"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Efek samping sedasi. Dosis 1 mg/kg melebihi dosis lazim.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "difenhidramin",
    "nama": "Difenhidramin",
    "golongan": "Antihistamin H1",
    "sediaan": "Injeksi 10 mg/ml; kapsul 25 mg",
    "rute": "i.m.; p.o.",
    "spesies": {
      "anjing": {
        "min": 2,
        "max": 4,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      },
      "kucing": {
        "min": 1,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "itrakonazol",
    "nama": "Itrakonazol",
    "golongan": "Antijamur azol",
    "sediaan": "Kapsul 100 mg; larutan oral 10 mg/ml",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam bersama makanan"
      },
      "kucing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam; dermatofitosis dengan pola pulse"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pantau fungsi hati pada pemakaian lama.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "ketokonazol",
    "nama": "Ketokonazol",
    "golongan": "Antijamur azol",
    "sediaan": "Tablet 200 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam bersama makanan"
      },
      "kucing": {
        "min": 5,
        "max": 10,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam; lebih berisiko hepatotoksik"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Banyak interaksi obat (penghambat CYP3A4). Pada kucing lebih dianjurkan itrakonazol.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "terbinafin",
    "nama": "Terbinafin",
    "golongan": "Antijamur alilamin",
    "sediaan": "Tablet 250 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 30,
        "max": 40,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      },
      "kucing": {
        "min": 30,
        "max": 40,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "amlodipin",
    "nama": "Amlodipin",
    "golongan": "Penghambat kanal kalsium",
    "sediaan": "Tablet 5 mg, 10 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.1,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      },
      "kucing": {
        "min": 0.125,
        "max": 0.25,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam (0,625–1,25 mg per ekor)"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pada kucing, 0,625 mg adalah dosis PER EKOR (¼ tablet 2,5 mg), bukan per kg.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "benazepril",
    "nama": "Benazepril",
    "golongan": "Penghambat ACE",
    "sediaan": "Tablet 5 mg, 10 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.25,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      },
      "kucing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pantau kreatinin dan kalium setelah 1–2 minggu.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "enalapril",
    "nama": "Enalapril",
    "golongan": "Penghambat ACE",
    "sediaan": "Tablet 5 mg, 10 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      },
      "kucing": {
        "min": 0.25,
        "max": 0.5,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pantau fungsi ginjal dan kalium.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "furosemid",
    "nama": "Furosemid",
    "golongan": "Diuretik loop",
    "sediaan": "Tablet 40 mg; injeksi 10 mg/ml",
    "rute": "p.o.; i.v.; i.m.",
    "spesies": {
      "anjing": {
        "min": 1,
        "max": 4,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      },
      "kucing": {
        "min": 1,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pantau hidrasi dan elektrolit; kucing lebih mudah dehidrasi.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "spironolakton",
    "nama": "Spironolakton",
    "golongan": "Diuretik hemat kalium",
    "sediaan": "Tablet 25 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 1,
        "max": 2,
        "satuan": "mg/kg",
        "catatan": "tiap 12–24 jam"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "pimobendan",
    "nama": "Pimobendan",
    "golongan": "Inodilator",
    "sediaan": "Kapsul/tablet kunyah 1,25; 2,5; 5 mg",
    "rute": "p.o.",
    "spesies": {
      "anjing": {
        "min": 0.2,
        "max": 0.3,
        "satuan": "mg/kg",
        "catatan": "tiap 12 jam, 1 jam sebelum makan"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Pada kucing penggunaannya di luar label (0,625–1,25 mg per ekor tiap 12 jam) atas keputusan dokter hewan.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "insulin",
    "nama": "Insulin porcine lente (40 IU/ml)",
    "golongan": "Hormon (antidiabetes)",
    "sediaan": "Vial 40 IU/ml; WAJIB spuit U-40",
    "rute": "s.c.",
    "spesies": {
      "anjing": {
        "min": 0.25,
        "max": 0.5,
        "satuan": "IU/kg",
        "catatan": "tiap 12 jam bersama makan; isi kolom dosis dalam IU/kg"
      },
      "kucing": {
        "min": 0.25,
        "max": 0.5,
        "satuan": "IU/kg",
        "catatan": "tiap 12 jam (umumnya 1–2 IU per ekor)"
      }
    },
    "kontra": {},
    "akibat": {
      "anjing": "Dosis insulin berlebih: hipoglikemia, lemas, kejang.",
      "kucing": "Dosis insulin berlebih: hipoglikemia, lemas, kejang."
    },
    "waktuHenti": {},
    "catatan": "Spuit U-100 untuk insulin 40 IU/ml menyebabkan salah dosis. Ajarkan pemilik tanda hipoglikemia.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "famsiklovir",
    "nama": "Famsiklovir",
    "golongan": "Antivirus (FHV-1)",
    "sediaan": "Tablet 125, 250, 500 mg",
    "rute": "p.o.",
    "spesies": {
      "kucing": {
        "min": 40,
        "max": 90,
        "satuan": "mg/kg",
        "catatan": "tiap 8–12 jam selama 7–21 hari"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "remdesivir",
    "nama": "Remdesivir",
    "golongan": "Antivirus (FIP)",
    "sediaan": "Vial 100 mg",
    "rute": "s.c.; i.v.",
    "spesies": {
      "kucing": {
        "min": 10,
        "max": 15,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam; dosis lebih tinggi untuk FIP neurologis/okular; biasanya dilanjutkan GS-441524 oral"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Penggunaan di luar label; protokol mengikuti panduan FIP terkini.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "nac",
    "nama": "N-asetilsistein",
    "golongan": "Antidot (parasetamol)",
    "sediaan": "Injeksi 200 mg/ml; tablet/serbuk 200 mg",
    "rute": "i.v.; p.o.",
    "spesies": {
      "kucing": {
        "min": 140,
        "max": 140,
        "satuan": "mg/kg",
        "catatan": "dosis awal, lalu 70 mg/kg tiap 6 jam sampai 7 kali"
      },
      "anjing": {
        "min": 140,
        "max": 140,
        "satuan": "mg/kg",
        "catatan": "dosis awal, lalu 70 mg/kg tiap 6 jam sampai 7 kali"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "atropin",
    "nama": "Atropin sulfat",
    "golongan": "Antikolinergik/antidot organofosfat",
    "sediaan": "Injeksi 0,25 mg/ml",
    "rute": "s.c.; i.m.; i.v.",
    "spesies": {
      "anjing": {
        "min": 0.02,
        "max": 0.04,
        "satuan": "mg/kg",
        "catatan": "premedikasi; keracunan organofosfat 0,2–0,5 mg/kg"
      },
      "kucing": {
        "min": 0.02,
        "max": 0.04,
        "satuan": "mg/kg",
        "catatan": "premedikasi; keracunan organofosfat 0,2–0,5 mg/kg"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "diazepam",
    "nama": "Diazepam",
    "golongan": "Antikonvulsan benzodiazepin",
    "sediaan": "Injeksi 5 mg/ml; rektal",
    "rute": "i.v.; per rektal",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "i.v. untuk kejang; per rektal 1–2 mg/kg"
      },
      "kucing": {
        "min": 0.5,
        "max": 1,
        "satuan": "mg/kg",
        "catatan": "i.v. untuk kejang"
      }
    },
    "kontra": {},
    "akibat": {
      "kucing": "Diazepam oral berulang pada kucing dapat menyebabkan nekrosis hati akut."
    },
    "waktuHenti": {},
    "catatan": "Psikotropika. Hindari diazepam oral jangka panjang pada kucing.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "kalsium",
    "nama": "Kalsium glukonat 10% / kalsium borogluconat",
    "golongan": "Elektrolit (eklampsia, milk fever)",
    "sediaan": "Larutan 10% (anjing, kucing); borogluconat 20–40% (sapi)",
    "rute": "i.v. pelan",
    "spesies": {
      "anjing": {
        "min": 0.5,
        "max": 1.5,
        "satuan": "ml/kg",
        "catatan": "larutan 10%, i.v. pelan 20–30 menit sambil memantau jantung"
      },
      "kucing": {
        "min": 0.5,
        "max": 1.5,
        "satuan": "ml/kg",
        "catatan": "larutan 10%, i.v. pelan 20–30 menit sambil memantau jantung"
      }
    },
    "kontra": {},
    "akibat": {
      "anjing": "Infus kalsium terlalu cepat: bradikardia dan aritmia.",
      "kucing": "Infus kalsium terlalu cepat: bradikardia dan aritmia."
    },
    "waktuHenti": {},
    "catatan": "Hentikan infus bila muncul bradikardia. Sapi milk fever: dosis per ekor sesuai label.",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  },
  {
    "id": "vitamin_k1",
    "nama": "Vitamin K1 (fitomenadion)",
    "golongan": "Antidot rodentisida antikoagulan",
    "sediaan": "Tablet/kapsul 10 mg; injeksi 10 mg/ml",
    "rute": "p.o.; s.c.",
    "spesies": {
      "anjing": {
        "min": 2.5,
        "max": 5,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam selama 3–4 minggu, bersama makanan berlemak"
      },
      "kucing": {
        "min": 2.5,
        "max": 5,
        "satuan": "mg/kg",
        "catatan": "tiap 24 jam selama 3–4 minggu"
      }
    },
    "kontra": {},
    "akibat": {},
    "waktuHenti": {},
    "catatan": "Hindari pemberian i.v. (risiko anafilaksis).",
    "rujukan": "Plumb's Veterinary Drug Handbook (edisi terbaru); halaman diisi saat verifikasi",
    "status": "draf, belum diverifikasi"
  }
];
