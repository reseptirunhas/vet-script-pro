/* VET-SCRIPT · meja e-resep (versi uji 0.1)
   Logika: SCRIPT harus lengkap -> meja resep terbuka -> validator membaca formularium -> umpan balik merah/kuning/hijau + XP.
   Tidak ada data yang dikirim ke server. XP hanya disimpan di peramban mahasiswa. */
(function () {
  const F = window.FORMULARIUM || [];
  const misi = (window.MISI || [])[0];
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => Number(n).toLocaleString("id-ID", { maximumFractionDigits: 2 });

  const LANGKAH = [
    ["S", "Spesies dan situasi", "Spesies, umur, berat badan, status fisiologis, keadaan pemilik?"],
    ["C", "Cari masalah klinis", "Apa masalah utama dan mana yang paling mendesak?"],
    ["R", "Rencana terapi", "Obat apa yang dipilih, mengapa, dan apa alternatifnya?"],
    ["I", "Itung dosis", "Dosis per kgBB, dosis total, sediaan, dan volume?"],
    ["P", "Periksa keamanan", "Interaksi, kontraindikasi, toksisitas spesies, waktu henti?"],
    ["T", "Tulis dan tuturkan", "Pesan apa yang disampaikan kepada pemilik?"]
  ];

  /* ---------- XP (hanya di peramban; aman bila penyimpanan diblokir) ---------- */
  let xp = 0;
  try { xp = Number(localStorage.getItem("vetscript_xp")) || 0; } catch (e) {}
  function tambahXP(n) {
    xp += n;
    try { localStorage.setItem("vetscript_xp", String(xp)); } catch (e) {}
    tampilXP();
  }
  function tampilXP() {
    const level = Math.floor(xp / 200) + 1;
    $("lvlText").textContent = "Level " + level;
    $("xpText").textContent = xp + " XP · " + (200 - (xp % 200)) + " XP lagi ke level " + (level + 1);
    $("xpBar").style.width = ((xp % 200) / 2) + "%";
  }

  /* ---------- Misi ---------- */
  function tampilMisi() {
    $("misiTag").textContent = "Level " + misi.level + " · " + misi.topik;
    $("misiJudul").textContent = misi.judul;
    $("misiNarasi").textContent = misi.narasi;
    const p = misi.pasien;
    $("misiPasien").textContent = "Pasien: " + p.nama + " · " + p.spesies + " · " + p.umur + " · " + fmt(p.bb) + " kg";
  }

  /* ---------- SCRIPT ---------- */
  function buatScript() {
    const box = $("scriptBox");
    LANGKAH.forEach(([huruf, judul, tanya], i) => {
      const d = document.createElement("div");
      d.className = "step";
      d.innerHTML = '<label for="s' + i + '">' + huruf + " · " + judul + '</label><span class="q">' + tanya + '</span><textarea id="s' + i + '"></textarea>';
      box.appendChild(d);
      d.querySelector("textarea").addEventListener("input", cekScript);
    });
  }
  function cekScript() {
    let lengkap = true;
    LANGKAH.forEach((_, i) => {
      const t = $("s" + i), ok = t.value.trim().length >= 10;
      t.parentElement.classList.toggle("done", ok);
      if (!ok) lengkap = false;
    });
    $("btnBuka").disabled = !lengkap;
  }

  /* ---------- Baris resep ---------- */
  function tambahBaris() {
    const r = document.createElement("div");
    r.className = "row";
    const opsi = F.map((o) => '<option value="' + o.id + '">' + o.nama + "</option>").join("");
    r.innerHTML =
      '<div><label>R/ Obat</label><select class="obat"><option value="">— pilih —</option>' + opsi + "</select></div>" +
      '<div><label>Dosis (mg/kg)</label><input class="dosis" type="number" step="0.01" min="0"></div>' +
      '<div><label>Frekuensi</label><input class="frek" placeholder="tiap 12 jam"></div>' +
      '<div><label>Lama terapi</label><input class="lama" placeholder="5 hari"></div>' +
      '<div><label>Rute</label><input class="rute" placeholder="p.o."></div>' +
      '<button title="Hapus baris">×</button>' +
      '<div class="info"></div>';
    $("rows").appendChild(r);
    const upd = () => {
      const o = F.find((x) => x.id === r.querySelector(".obat").value);
      const dos = parseFloat(r.querySelector(".dosis").value);
      let t = "";
      if (o) t = "Sediaan: " + o.sediaan + ".";
      if (o && dos > 0) t += " Dosis total: " + fmt(dos) + " mg/kg × " + fmt(misi.pasien.bb) + " kg = " + fmt(dos * misi.pasien.bb) + " mg.";
      r.querySelector(".info").textContent = t;
      if (o && !r.querySelector(".rute").value) r.querySelector(".rute").value = o.rute;
    };
    r.querySelectorAll("select,input").forEach((el) => el.addEventListener("input", upd));
    r.querySelector("button").addEventListener("click", () => r.remove());
  }

  /* ---------- Validator ---------- */
  let pernahMerah = false;
  function periksa() {
    const sp = misi.pasien.spesies, out = [];
    const rows = [...document.querySelectorAll(".row")];
    const dipakai = [];
    if (!rows.length) out.push(["amber", "Belum ada R/ yang ditulis."]);
    rows.forEach((r, i) => {
      const o = F.find((x) => x.id === r.querySelector(".obat").value);
      const n = "R/ " + (i + 1);
      if (!o) { out.push(["amber", n + ": obat belum dipilih."]); return; }
      dipakai.push(o.id);
      if (o.kontra[sp]) {
        out.push(["red", n + " " + o.nama + ": DILARANG pada " + sp + ". " + o.kontra[sp] + (o.akibat[sp] ? " " + o.akibat[sp] : "")]);
        return;
      }
      const d = o.spesies[sp], dos = parseFloat(r.querySelector(".dosis").value);
      if (!d) out.push(["amber", n + " " + o.nama + ": data dosis untuk " + sp + " belum ada di formularium. Tanyakan dosen."]);
      else if (!(dos > 0)) out.push(["amber", n + " " + o.nama + ": dosis belum diisi."]);
      else if (dos > d.max * 1.5) {
        const kali = dos / d.max;
        out.push(["red", n + " " + o.nama + ": " + fmt(dos) + " mg/kg ≈ " + fmt(kali) + "× batas atas (" + fmt(d.max) + " mg/kg). " + (o.akibat[sp] || "Risiko toksisitas.")]);
      } else if (dos > d.max) out.push(["amber", n + " " + o.nama + ": sedikit di atas batas (" + fmt(d.min) + "–" + fmt(d.max) + " mg/kg). " + d.catatan]);
      else if (dos < d.min) out.push(["amber", n + " " + o.nama + ": di bawah dosis efektif (" + fmt(d.min) + "–" + fmt(d.max) + " mg/kg). " + d.catatan]);
      else out.push(["green", n + " " + o.nama + ": dosis sesuai (" + fmt(dos * misi.pasien.bb) + " mg). " + d.catatan]);
      if (!r.querySelector(".frek").value.trim() || !r.querySelector(".lama").value.trim())
        out.push(["amber", n + " " + o.nama + ": frekuensi atau lama terapi belum lengkap."]);
    });
    misi.kunci.obatWajib.forEach((id) => { if (!dipakai.includes(id)) out.push(["amber", misi.kunci.pesanWajib]); });

    const adaMerah = out.some((m) => m[0] === "red");
    const adaKuning = out.some((m) => m[0] === "amber");
    const yakin = Number($("yakin").value);
    if (adaMerah && yakin >= 4) out.push(["info", "Yakin tetapi salah. Catat kesalahan ini di jurnal: inilah yang paling berharga untuk dibahas saat Debrief."]);
    if (!adaMerah && !adaKuning) {
      let dapat = 50 + (pernahMerah ? 30 : 0);
      out.push(["green", "Resep aman dan lengkap. +" + dapat + " XP" + (pernahMerah ? " (termasuk +30 karena berhasil memperbaiki)" : "") + "."]);
      tambahXP(dapat);
      pernahMerah = false;
    } else if (adaMerah) {
      if (!pernahMerah) tambahXP(10);
      pernahMerah = true;
      out.push(["info", "Pasien memburuk di simulator. Periksa kembali langkah P (Periksa keamanan) pada SCRIPT, lalu perbaiki resep."]);
    }
    $("hasil").innerHTML = "";
    out.forEach(([c, t]) => { const m = document.createElement("div"); m.className = "msg " + c; m.textContent = t; $("hasil").appendChild(m); });
  }

  /* ---------- Mulai ---------- */
  if (!misi) { document.body.textContent = "Data misi tidak ditemukan."; return; }
  tampilMisi(); buatScript(); tambahBaris(); tampilXP();
  $("btnBuka").addEventListener("click", () => { $("resepCard").classList.remove("locked"); $("resepCard").scrollIntoView({ behavior: "smooth" }); });
  $("btnTambah").addEventListener("click", tambahBaris);
  $("btnPeriksa").addEventListener("click", periksa);
})();
