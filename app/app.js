/* VET-SCRIPT · Klinik Saya (versi uji 0.3)
   Alur: pilih pasien di antrean -> isi SCRIPT berurutan -> kertas resep terbuka ->
   validator membaca formularium -> pasien membaik/memburuk + XP, reputasi, lencana.
   Tidak ada data yang dikirim ke server. Kemajuan hanya disimpan di peramban mahasiswa. */
(function () {
  "use strict";
  const F = window.FORMULARIUM || [];
  const MISI = window.MISI || [];
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  const fmt = (n) => Number(n).toLocaleString("id-ID", { maximumFractionDigits: 2 });
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const LANGKAH = [
    ["S", "Spesies dan situasi", "Spesies, umur, berat badan, status fisiologis, keadaan pemilik?"],
    ["C", "Cari masalah klinis", "Apa masalah utama dan mana yang paling mendesak?"],
    ["R", "Rencana terapi", "Obat apa yang dipilih, mengapa, dan apa alternatifnya?"],
    ["I", "Itung dosis", "Dosis per kgBB, dosis total, sediaan, dan volume?"],
    ["P", "Periksa keamanan", "Interaksi, kontraindikasi, toksisitas spesies, waktu henti?"],
    ["T", "Tulis dan tuturkan", "Pesan apa yang disampaikan kepada pemilik?"]
  ];
  const MIN_HURUF = 10;
  const YAKIN = ["menebak", "ragu", "cukup yakin", "yakin", "sangat yakin"];
  const PANGAN = ["sapi", "kambing", "ayam"];
  const SEMUA_LENCANA = ["Dosis Akurat", "Sahabat Kucing", "Waktu Henti Aman", "Antimikroba Bijak", "Komunikator Klien", "Siap Koas"];

  /* ---------- Kelompok obat (untuk formularium dan daftar pilih) ---------- */
  const KELOMPOK = [
    ["Antimikroba", /antibiotik|antibakteri/i],
    ["Antiparasit", /antiparasit|antelmintik|insektisida|antiprotozoa|antikoksidia/i],
    ["Analgesik dan antiradang", /nsaid|analgesik|opioid|glukokortikoid/i],
    ["Antialergi", /antihistamin/i],
    ["Saluran cerna", /antiemetik|pompa proton|antagonis h2|koleretik/i],
    ["Jantung dan ginjal", /kanal kalsium|ace|diuretik|inodilator/i],
    ["Antijamur dan antivirus", /antijamur|antivirus/i],
    ["Darurat dan antidot", /antidot|antikonvulsan|elektrolit|antikolinergik/i],
    ["Endokrin", /hormon/i]
  ];
  const kelompok = (o) => { const k = KELOMPOK.find(([, re]) => re.test(o.golongan || "")); return k ? k[0] : "Lain-lain"; };
  const URUT = KELOMPOK.map((k) => k[0]).concat("Lain-lain");
  const perKelompok = (list) => URUT.map((k) => [k, list.filter((o) => kelompok(o) === k)]).filter(([, l]) => l.length);

  /* ---------- Penyimpanan (aman bila diblokir) ---------- */
  const KUNCI = "vetscript_v03";
  const awal = () => ({ xp: 0, klinik: "", reputasi: 4, izin: 3, selesai: {}, coba: {}, lencana: {}, yakinSalah: [] });
  let S = awal();
  try {
    const raw = localStorage.getItem(KUNCI);
    if (raw) S = Object.assign(awal(), JSON.parse(raw));
    else { const lama = Number(localStorage.getItem("vetscript_xp")); if (lama > 0) S.xp = lama; }
  } catch (e) {}
  const simpan = () => { try { localStorage.setItem(KUNCI, JSON.stringify(S)); } catch (e) {} };

  /* ---------- Kepala: klinik, reputasi, izin, XP ---------- */
  function tampilKepala() {
    const nama = S.klinik || "Klinik Satwa (beri nama)";
    $("klinikNama").textContent = nama;
    const penuh = Math.round(S.reputasi);
    $("bintang").innerHTML = "★".repeat(penuh) + "<i>" + "★".repeat(5 - penuh) + "</i>";
    $("bintang").title = "Reputasi klinik " + fmt(S.reputasi) + " dari 5";
    $("izin").textContent = "Izin praktik " + S.izin + "/3";
    const level = Math.floor(S.xp / 200) + 1;
    $("lvlText").textContent = "Level " + level;
    $("xpText").textContent = S.xp + " XP";
    $("xpBar").style.width = ((S.xp % 200) / 2) + "%";
    $("xpBar").parentElement.title = (200 - (S.xp % 200)) + " XP lagi ke level " + (level + 1);
  }
  function tambahXP(n) { S.xp = Math.max(0, S.xp + n); simpan(); tampilKepala(); }
  function ubahNama() {
    const box = el("input"); box.value = S.klinik; box.maxLength = 40; box.placeholder = "Nama klinik, misalnya Klinik Satwa Andi";
    box.setAttribute("aria-label", "Nama klinik");
    const tombol = $("klinikNama"); tombol.hidden = true; tombol.after(box); box.focus();
    const selesai = () => { S.klinik = box.value.trim(); simpan(); box.remove(); tombol.hidden = false; tampilKepala(); isiKop(); };
    box.addEventListener("blur", selesai);
    box.addEventListener("keydown", (e) => { if (e.key === "Enter") box.blur(); });
  }

  /* ---------- Navigasi ---------- */
  const VIEWS = ["antrean", "meja", "formularium", "kemajuan"];
  function buka(v) {
    VIEWS.forEach((n) => { $("view-" + n).hidden = n !== v; });
    document.querySelectorAll(".tabs button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.view === v)));
    if (v === "antrean") tampilAntrean();
    if (v === "kemajuan") tampilKemajuan();
    if (v === "formularium") formularium($("formHost"), {});
    if (v === "meja" && !misi) mulaiMisi(berikutnya() || MISI[0]);
    window.scrollTo(0, 0);
  }
  const berikutnya = () => MISI.find((m) => !S.selesai[m.id]);

  /* ---------- Antrean pasien ---------- */
  function tampilAntrean() {
    const host = $("antreanList"); host.innerHTML = "";
    const beres = MISI.filter((m) => S.selesai[m.id]).length;
    $("antreanRingkas").textContent = beres + " dari " + MISI.length + " pasien selesai ditangani. Pilih pasien untuk membuka meja resep.";
    MISI.forEach((m, i) => {
      const b = el("button", "tiket");
      const done = S.selesai[m.id], coba = S.coba[m.id];
      const status = done ? '<span class="chip ok">Selesai · ' + done.xp + " XP</span>" : coba ? '<span class="chip ulang">Perlu diperbaiki</span>' : '<span class="chip">Menunggu</span>';
      b.innerHTML =
        '<div class="atas"><span class="no">No. ' + String(i + 1).padStart(2, "0") + " · Level " + m.level + "</span>" + status + "</div>" +
        '<div class="who"><span class="avatar">' + esc(m.pasien.nama.charAt(0)) + "</span><div><b>" + esc(m.judul) + '</b><div class="meta">' +
        esc(m.pasien.nama) + " · " + esc(m.pasien.spesies) + " · " + fmt(m.pasien.bb) + " kg</div></div></div>" +
        '<span class="meta">' + esc(m.topik) + "</span>";
      b.addEventListener("click", () => { mulaiMisi(m); buka("meja"); });
      host.appendChild(b);
    });
  }

  /* ---------- Misi dan meja resep ---------- */
  let misi = null, jawab = [], aktif = 0, yakin = 3, pernahMerah = false, hintDibuka = false;
  const draf = {};

  function mulaiMisi(m) {
    if (misi) draf[misi.id] = { jawab: jawab.slice() };
    misi = m; jawab = (draf[m.id] && draf[m.id].jawab) || LANGKAH.map(() => "");
    aktif = Math.max(0, jawab.findIndex((t) => t.trim().length < MIN_HURUF)); if (aktif < 0) aktif = 0;
    yakin = 3; pernahMerah = false; hintDibuka = false;
    $("misiTag").textContent = "Level " + m.level + " · " + m.topik;
    $("misiJudul").textContent = m.judul;
    $("misiNarasi").textContent = m.narasi;
    const p = m.pasien;
    $("misiPasien").innerHTML = [["Pasien", p.nama], ["Spesies", p.spesies], ["Umur", p.umur], ["Berat badan", fmt(p.bb) + " kg"]]
      .map(([a, b]) => "<dt>" + a + "</dt><dd>" + esc(b) + "</dd>").join("");
    $("hintBox").innerHTML = ""; $("btnHint").disabled = !(m.kunci && m.kunci.hint);
    $("rows").innerHTML = ""; tambahBaris();
    $("hasilCard").hidden = true;
    isiKop(); tampilPills(); tampilStep(); tampilYakin(); cekKunci();
  }
  function isiKop() {
    if (!misi) return;
    $("kopKlinik").textContent = S.klinik || "Klinik Saya";
    $("kopPasien").textContent = misi.pasien.nama + " · " + misi.pasien.spesies + " · " + fmt(misi.pasien.bb) + " kg";
  }
  const terisi = (i) => jawab[i].trim().length >= MIN_HURUF;
  const lengkap = () => LANGKAH.every((_, i) => terisi(i));

  function tampilPills() {
    const host = $("pills"); host.innerHTML = "";
    LANGKAH.forEach(([h, judul], i) => {
      const b = el("button", "pill" + (terisi(i) ? " done" : ""), h);
      b.setAttribute("role", "tab"); b.setAttribute("aria-selected", String(i === aktif)); b.title = judul;
      b.disabled = i > 0 && !terisi(i - 1) && !terisi(i);
      b.addEventListener("click", () => { aktif = i; tampilPills(); tampilStep(); });
      host.appendChild(b);
    });
    $("scriptHitung").textContent = LANGKAH.filter((_, i) => terisi(i)).length + " dari 6 terisi";
  }
  function tampilStep() {
    const [h, judul, tanya] = LANGKAH[aktif];
    const box = $("stepBox"); box.innerHTML = "";
    const lab = el("label", null, h + " · " + judul); lab.htmlFor = "stepTeks";
    const q = el("span", "q", tanya);
    const ta = el("textarea"); ta.id = "stepTeks"; ta.value = jawab[aktif];
    const hit = el("div", "hitung");
    const upd = () => {
      jawab[aktif] = ta.value;
      const n = ta.value.trim().length;
      hit.textContent = n >= MIN_HURUF ? "Terisi" : "Tulis minimal " + MIN_HURUF + " huruf (" + n + ")";
      $("btnNext").disabled = !terisi(aktif);
      tampilPills(); cekKunci();
    };
    ta.addEventListener("input", upd);
    box.append(lab, q, ta, hit);
    $("btnPrev").disabled = aktif === 0;
    $("btnNext").textContent = aktif === LANGKAH.length - 1 ? "Buka kertas resep" : "Berikutnya";
    upd();
  }
  function cekKunci() {
    const ok = lengkap();
    $("resepCard").classList.toggle("locked", !ok);
    $("kunciText").textContent = ok ? "Terbuka" : "Terkunci sampai SCRIPT lengkap";
  }
  function tampilYakin() {
    const host = $("yakinPilih"); host.innerHTML = "";
    YAKIN.forEach((t, i) => {
      const b = el("button"); b.type = "button"; b.setAttribute("role", "radio"); b.setAttribute("aria-checked", String(yakin === i + 1));
      b.innerHTML = (i + 1) + "<span>" + t + "</span>";
      b.addEventListener("click", () => { yakin = i + 1; tampilYakin(); });
      host.appendChild(b);
    });
  }

  /* ---------- Baris resep ---------- */
  function tambahBaris() {
    const sp = misi.pasien.spesies;
    const r = el("div", "row");
    const opsi = perKelompok(F).map(([k, l]) => '<optgroup label="' + esc(k) + '">' +
      l.map((o) => '<option value="' + esc(o.id) + '">' + esc(o.nama) + "</option>").join("") + "</optgroup>").join("");
    r.innerHTML =
      '<span class="rx" aria-hidden="true">R/</span>' +
      '<div class="fObat"><label>Obat</label><select class="obat"><option value="">— pilih obat —</option>' + opsi + "</select></div>" +
      '<div class="fDosis"><label class="lblDosis">Dosis (mg/kg)</label><input class="dosis" type="number" step="0.01" min="0" inputmode="decimal"></div>' +
      '<div class="fFrek"><label>Frekuensi</label><input class="frek" placeholder="tiap 12 jam"></div>' +
      '<div class="fLama"><label>Lama terapi</label><input class="lama" placeholder="5 hari"></div>' +
      '<div class="fRute"><label>Rute</label><input class="rute" placeholder="p.o."></div>' +
      '<button class="hapus" type="button" title="Hapus baris" aria-label="Hapus baris">×</button>' +
      '<div class="info"></div>';
    $("rows").appendChild(r);
    const q = (c) => r.querySelector(c);
    const upd = () => {
      const o = F.find((x) => x.id === q(".obat").value);
      const dos = parseFloat(q(".dosis").value);
      const d = o && o.spesies[sp];
      const sat = d ? d.satuan : "mg/kg";
      q(".lblDosis").textContent = "Dosis (" + sat + ")";
      let t = "";
      if (o) t = "Sediaan: " + o.sediaan + ".";
      if (o && dos > 0) t += " Dosis total: " + fmt(dos) + " " + sat + " × " + fmt(misi.pasien.bb) + " kg = " + fmt(dos * misi.pasien.bb) + " " + sat.replace("/kg", "") + ".";
      q(".info").textContent = t;
    };
    r.querySelectorAll("select,input").forEach((e) => e.addEventListener("input", upd));
    q(".obat").addEventListener("change", () => { const o = F.find((x) => x.id === q(".obat").value); if (o && !q(".rute").value) q(".rute").value = o.rute.split(";")[0].trim(); });
    q(".hapus").addEventListener("click", () => { r.remove(); if (!document.querySelector(".row")) tambahBaris(); });
  }

  /* ---------- Validator ---------- */
  function periksa() {
    const sp = misi.pasien.spesies, bb = misi.pasien.bb, K = misi.kunci || {}, out = [];
    const rows = [...document.querySelectorAll(".row")];
    const dipakai = [];
    rows.forEach((r, i) => {
      const o = F.find((x) => x.id === r.querySelector(".obat").value);
      const n = "R/ " + (i + 1);
      if (!o) { out.push(["amber", n + ": obat belum dipilih."]); return; }
      dipakai.push(o.id);
      if (o.kontra[sp]) {
        out.push(["red", n + " " + o.nama + ": DILARANG pada " + sp + ". " + o.kontra[sp] + (o.akibat[sp] ? " " + o.akibat[sp] : "")]);
        return;
      }
      if (K.hindari && K.hindari[o.id]) { out.push(["red", n + " " + o.nama + ": tidak tepat untuk pasien ini. " + K.hindari[o.id]]); return; }
      const d = o.spesies[sp], dos = parseFloat(r.querySelector(".dosis").value);
      if (!d) out.push(["amber", n + " " + o.nama + ": data dosis untuk " + sp + " belum ada di formularium. Tanyakan dosen."]);
      else if (!(dos > 0)) out.push(["amber", n + " " + o.nama + ": dosis belum diisi."]);
      else {
        const sat = d.satuan, rentang = fmt(d.min) + (d.max !== d.min ? "–" + fmt(d.max) : "") + " " + sat;
        if (dos > d.max * 1.5) out.push(["red", n + " " + o.nama + ": " + fmt(dos) + " " + sat + " ≈ " + fmt(dos / d.max) + "× batas atas (" + fmt(d.max) + " " + sat + "). " + (o.akibat[sp] || "Risiko toksisitas.")]);
        else if (dos > d.max) out.push(["amber", n + " " + o.nama + ": sedikit di atas rentang (" + rentang + "). " + d.catatan]);
        else if (dos < d.min) out.push(["amber", n + " " + o.nama + ": di bawah dosis efektif (" + rentang + "). " + d.catatan]);
        else {
          out.push(["green", n + " " + o.nama + ": dosis sesuai, total " + fmt(dos * bb) + " " + sat.replace("/kg", "") + ". " + d.catatan]);
          if (o.catatan) out.push(["info", o.nama + ": " + o.catatan]);
        }
      }
      if (!r.querySelector(".frek").value.trim() || !r.querySelector(".lama").value.trim() || !r.querySelector(".rute").value.trim())
        out.push(["amber", n + " " + o.nama + ": frekuensi, lama terapi, atau rute belum lengkap."]);
      if (PANGAN.includes(sp) && o.waktuHenti && Object.keys(o.waktuHenti).length)
        out.push(["info", o.nama + " · waktu henti: " + Object.entries(o.waktuHenti).map(([k, v]) => k + " " + v).join("; ") + ". Sampaikan kepada peternak."]);
    });
    const kurang = (K.obatWajib || []).some((id) => !dipakai.includes(id)) ||
      (K.salahSatu && K.salahSatu.length && !K.salahSatu.some((id) => dipakai.includes(id)));
    if (kurang) out.push(["amber", K.pesanWajib || "Obat utama untuk kasus ini belum diresepkan."]);

    const adaMerah = out.some((m) => m[0] === "red");
    const adaKuning = out.some((m) => m[0] === "amber");
    S.coba[misi.id] = (S.coba[misi.id] || 0) + 1;
    let status;
    if (adaMerah) {
      status = ["red", "!", misi.pasien.nama + " memburuk", "Ada keputusan berbahaya di resep. Perbaiki dulu sebelum pasien pulang."];
      S.reputasi = Math.max(1, S.reputasi - 0.3);
      if (yakin >= 4) {
        S.izin = Math.max(0, S.izin - 1);
        S.yakinSalah.unshift({ misi: misi.judul, teks: out.filter((m) => m[0] === "red").map((m) => m[1]).join(" "), yakin: yakin });
        S.yakinSalah = S.yakinSalah.slice(0, 20);
        out.push(["info", "Yakin tetapi salah. Catatan ini masuk ke tab Kemajuan untuk dibahas saat Debrief." + (S.izin === 0 ? " Izin praktik habis: konsultasikan kasus ini dengan dosen (pembinaan)." : "")]);
      }
      if (!pernahMerah) tambahXP(10);
      pernahMerah = true;
      out.push(["info", "Periksa kembali langkah P (Periksa keamanan) pada SCRIPT, lalu perbaiki resep. Menemukan dan memperbaiki kesalahan sendiri memberi tambahan XP."]);
    } else if (adaKuning) {
      status = ["amber", "…", misi.pasien.nama + " belum stabil", "Resep belum lengkap atau belum tepat. Lengkapi bagian yang ditandai."];
    } else {
      const ulang = !!S.selesai[misi.id];
      const dapat = ulang ? 10 : 50 + (pernahMerah ? 30 : 0) + (yakin >= 4 ? 10 : 0);
      status = ["green", "✓", misi.pasien.nama + " membaik", "Resep aman dan lengkap. +" + dapat + " XP" +
        (ulang ? " (latihan ulang)" : (pernahMerah ? ", termasuk +30 karena berhasil memperbaiki" : "") + (yakin >= 4 ? ", +10 karena yakin dan benar" : "")) + "."];
      S.reputasi = Math.min(5, S.reputasi + 0.2);
      if (S.izin < 3) S.izin = 3;
      if (!ulang) {
        S.selesai[misi.id] = { xp: dapat, coba: S.coba[misi.id], hint: hintDibuka };
        (misi.lencana || []).forEach((l) => { S.lencana[l] = (S.lencana[l] || 0) + 1; });
      }
      delete S.coba[misi.id];
      tambahXP(dapat);
      pernahMerah = false;
    }
    simpan(); tampilKepala();

    const st = $("statusPasien"); st.className = "status " + status[0];
    st.innerHTML = '<span class="ikon" aria-hidden="true">' + status[1] + "</span><span>" + esc(status[2]) + "<small>" + esc(status[3]) + "</small></span>";
    const h = $("hasil"); h.innerHTML = "";
    out.forEach(([c, t]) => h.appendChild(el("div", "msg " + c, t)));
    const aksi = $("hasilAksi"); aksi.innerHTML = "";
    if (status[0] === "green") {
      const nx = berikutnya();
      if (nx) { const b = el("button", null, "Pasien berikutnya: " + nx.pasien.nama); b.addEventListener("click", () => { mulaiMisi(nx); window.scrollTo(0, 0); }); aksi.appendChild(b); }
      else aksi.appendChild(el("div", "msg green", "Semua pasien hari ini sudah ditangani. Lihat tab Kemajuan."));
      const a = el("button", "ghost", "Kembali ke antrean"); a.addEventListener("click", () => buka("antrean")); aksi.appendChild(a);
    }
    $("hasilCard").hidden = false;
    $("hasilCard").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function mintaHint() {
    const K = misi.kunci || {};
    if (!K.hint || hintDibuka) return;
    if (S.xp < 20) { $("hintBox").innerHTML = ""; $("hintBox").appendChild(el("div", "msg amber", "XP belum cukup untuk membuka hint (perlu 20 XP).")); return; }
    hintDibuka = true; tambahXP(-20);
    $("hintBox").innerHTML = ""; $("hintBox").appendChild(el("div", "msg info", "Tutor: " + K.hint));
    $("btnHint").disabled = true;
  }

  /* ---------- Formularium (rujukan; mahasiswa tidak perlu menghafal) ---------- */
  function formularium(host, opt) {
    const st = { q: "", sp: opt.spesies || "", bb: opt.bb || "" };
    const spList = ["anjing", "kucing", "sapi", "kambing", "ayam"];
    host.innerHTML =
      '<div class="formAlat"><div class="formCari">' +
      '<input class="fq" type="search" placeholder="Cari nama obat atau golongan, misalnya amoksisilin atau NSAID" aria-label="Cari obat">' +
      '<input class="fbb" type="number" min="0" step="0.1" inputmode="decimal" placeholder="BB (kg)" aria-label="Berat badan pasien dalam kilogram">' +
      '</div><div class="saring" role="group" aria-label="Saring spesies"></div></div>' +
      '<p class="formJumlah"></p><div class="formList"></div>';
    const q = (c) => host.querySelector(c);
    q(".fbb").value = st.bb;
    const saring = q(".saring");
    [["", "Semua"]].concat(spList.map((s) => [s, s.charAt(0).toUpperCase() + s.slice(1)])).forEach(([v, t]) => {
      const b = el("button", null, t); b.type = "button"; b.dataset.sp = v;
      b.addEventListener("click", () => { st.sp = v; render(); });
      saring.appendChild(b);
    });
    function kartu(o) {
      const bb = parseFloat(st.bb);
      const baris = Object.entries(o.spesies).filter(([sp]) => !st.sp || sp === st.sp).map(([sp, d]) => {
        const rentang = fmt(d.min) + (d.max !== d.min ? "–" + fmt(d.max) : "") + " " + esc(d.satuan);
        const hit = bb > 0 ? '<br><span class="hit">' + fmt(bb) + " kg → " + fmt(d.min * bb) + (d.max !== d.min ? "–" + fmt(d.max * bb) : "") + " " + esc(d.satuan.replace("/kg", "")) + "</span>" : "";
        return "<tr><td>" + esc(sp) + "</td><td>" + rentang + hit + "<br>" + esc(d.catatan) + "</td></tr>";
      }).join("");
      const larang = Object.entries(o.kontra).map(([sp, a]) => '<div class="larang">Dilarang pada ' + esc(sp) + ": " + esc(a) + "</div>").join("");
      const wh = o.waktuHenti && Object.keys(o.waktuHenti).length ? "<p><b>Waktu henti.</b> " + Object.entries(o.waktuHenti).map(([k, v]) => esc(k) + ": " + esc(v)).join("; ") + "</p>" : "";
      const chips = Object.keys(o.spesies).map((s) => "<span>" + esc(s) + "</span>").concat(Object.keys(o.kontra).map((s) => '<span class="no">✕ ' + esc(s) + "</span>")).join("");
      return '<details class="obat"><summary><b>' + esc(o.nama) + '</b><span class="gol">' + esc(o.golongan || "") + '</span><div class="sp">' + chips + "</div></summary>" +
        '<div class="isi"><p><b>Sediaan.</b> ' + esc(o.sediaan) + " · " + esc(o.rute) + "</p>" +
        (baris ? "<table>" + baris + "</table>" : "") + larang + wh + (o.catatan ? '<div class="cat">' + esc(o.catatan) + "</div>" : "") + "</div></details>";
    }
    function render() {
      saring.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.sp === st.sp)));
      const k = st.q.trim().toLowerCase();
      const list = F.filter((o) => (!k || o.nama.toLowerCase().includes(k) || o.id.includes(k) || (o.golongan || "").toLowerCase().includes(k)) &&
        (!st.sp || o.spesies[st.sp] || o.kontra[st.sp]));
      q(".formJumlah").textContent = list.length + " dari " + F.length + " obat" + (st.sp ? " untuk " + st.sp : "") + (parseFloat(st.bb) > 0 ? " · dosis dihitung untuk " + fmt(st.bb) + " kg" : "");
      q(".formList").innerHTML = list.length
        ? perKelompok(list).map(([nm, l]) => '<div class="kelompok"><h3>' + esc(nm) + " (" + l.length + ')</h3><div class="obatGrid">' + l.map(kartu).join("") + "</div></div>").join("")
        : '<p class="small">Obat tidak ditemukan di formularium. Tanyakan dosen.</p>';
    }
    q(".fq").addEventListener("input", (e) => { st.q = e.target.value; render(); });
    q(".fbb").addEventListener("input", (e) => { st.bb = e.target.value; render(); });
    render();
  }
  function bukaLaci() {
    formularium($("laciHost"), { spesies: misi.pasien.spesies, bb: misi.pasien.bb });
    $("laci").hidden = false; $("btnTutupLaci").focus();
  }
  const tutupLaci = () => { $("laci").hidden = true; $("btnLaci").focus(); };

  /* ---------- Kemajuan ---------- */
  function butuh(l) {
    if (l === "Siap Koas") return MISI.length;
    return Math.min(2, MISI.filter((m) => (m.lencana || []).includes(l)).length) || 1;
  }
  function punya(l) { return l === "Siap Koas" ? MISI.filter((m) => S.selesai[m.id]).length : (S.lencana[l] || 0); }
  function tampilKemajuan() {
    const beres = MISI.filter((m) => S.selesai[m.id]).length;
    $("ringkasKemajuan").innerHTML = [
      [S.xp + " XP", "Level " + (Math.floor(S.xp / 200) + 1)],
      [beres + " / " + MISI.length, "Pasien selesai"],
      [fmt(S.reputasi) + " ★", "Reputasi klinik"],
      [S.izin + " / 3", "Izin praktik"]
    ].map(([a, b]) => '<div class="angka"><b>' + esc(a) + "</b><span>" + esc(b) + "</span></div>").join("");
    $("lencanaList").innerHTML = SEMUA_LENCANA.map((l) => {
      const n = punya(l), t = butuh(l), dapat = n >= t;
      return '<div class="lc' + (dapat ? " dapat" : "") + '"><div class="bulat">' + (dapat ? "✓" : esc(l.charAt(0))) + "</div><b>" + esc(l) + "</b><br>" + Math.min(n, t) + " / " + t + "</div>";
    }).join("");
    const rw = MISI.filter((m) => S.selesai[m.id]);
    $("riwayat").innerHTML = rw.length ? rw.map((m) => {
      const d = S.selesai[m.id];
      return '<div class="baris"><span>' + esc(m.pasien.nama) + " · " + esc(m.judul) + '</span><span class="small">' + d.coba + " kali periksa" + (d.hint ? " · hint" : "") + " · " + d.xp + " XP</span></div>";
    }).join("") : '<p class="small">Belum ada pasien yang selesai ditangani.</p>';
    $("yakinSalah").innerHTML = S.yakinSalah.length ? S.yakinSalah.map((y) =>
      '<div class="msg info"><b>' + esc(y.misi) + "</b> (keyakinan " + y.yakin + "/5): " + esc(y.teks) + "</div>").join("") : '<p class="small">Belum ada catatan.</p>';
  }
  let siapReset = false;
  function reset() {
    const b = $("btnReset");
    if (!siapReset) { siapReset = true; b.textContent = "Tekan sekali lagi untuk menghapus semua kemajuan"; setTimeout(() => { siapReset = false; b.textContent = "Hapus kemajuan di peramban ini"; }, 4000); return; }
    S = awal(); simpan(); siapReset = false; b.textContent = "Hapus kemajuan di peramban ini";
    tampilKepala(); tampilKemajuan();
  }

  /* ---------- Mulai ---------- */
  if (!MISI.length) { document.querySelector("main").textContent = "Data misi tidak ditemukan."; return; }
  tampilKepala(); tampilAntrean();
  document.querySelectorAll(".tabs button").forEach((b) => b.addEventListener("click", () => buka(b.dataset.view)));
  $("klinikNama").addEventListener("click", ubahNama);
  $("btnPrev").addEventListener("click", () => { if (aktif > 0) { aktif--; tampilPills(); tampilStep(); } });
  $("btnNext").addEventListener("click", () => {
    if (aktif < LANGKAH.length - 1) { aktif++; tampilPills(); tampilStep(); $("stepTeks").focus(); }
    else if (lengkap()) $("resepCard").scrollIntoView({ behavior: "smooth" });
  });
  $("btnTambah").addEventListener("click", tambahBaris);
  $("btnPeriksa").addEventListener("click", periksa);
  $("btnHint").addEventListener("click", mintaHint);
  $("btnLaci").addEventListener("click", bukaLaci);
  $("btnTutupLaci").addEventListener("click", tutupLaci);
  $("laci").addEventListener("click", (e) => { if (e.target === $("laci")) tutupLaci(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("laci").hidden) tutupLaci(); });
  $("btnReset").addEventListener("click", reset);
})();
