// LATIHAN PROTOYPE

// 1. Latihan 1 – Constructor & Prototype Dasar
// Buat constructor function Mahasiswa dengan properti:
// - nama
// - jurusan
// Tambahkan method di prototype:
// sayHello() → return "Halo, saya [nama] dari jurusan [jurusan]".
// ➡️ Tes dengan membuat beberapa instance mahasiswa.

// function Mahasiswa(nama, jurusan) {
//     this.nama = nama;
//     this.jurusan = jurusan;
// };

// Mahasiswa.prototype.sayHello = function() {
//     return `Halo, nama saya ${this.nama} dari jurusan ${this.jurusan}`
// };

// let mahasiswa1 = new Mahasiswa('Felix', 'Sistem Informasi');

// 2. Latihan 2 – Tambah Method Prototype
// Lanjutkan dari Mahasiswa, tambahkan method di prototype:
// gantiJurusan(jurusanBaru) → update jurusan.
// getJurusan() → return jurusan saat ini.

// Mahasiswa.prototype.gantiJurusan = function(jurusanBaru) {
//     this.jurusan = jurusanBaru;
//     return `Jurusan anda berhasil diperbarui`;
// };

// Mahasiswa.prototype.getJurusan = function() {
//     return `Jurusan anda saat ini adalah ${this.jurusan}`
// };

// 3. Latihan 3 – Pewarisan (Inheritance dengan Prototype)
// Buat constructor function Orang dengan properti nama dan method perkenalan().
// Lalu buat constructor function Dosen yang mewarisi dari Orang dengan tambahan properti mataKuliah.
// Tambahkan method di Dosen.prototype:
// mengajar() → return "Dosen [nama] sedang mengajar [mataKuliah]".
// Tes pewarisan: instance Dosen harus bisa akses method dari Orang.

// buat constructor Orang
function Orang(nama) {
    this.nama = nama;
};

// tambahkan method pada constructor Orang
Orang.prototype.perkenalan = function() {
    return `Halo anak-anak nama saya ${this.nama}`
};

// Buat constructor dosen
function Dosen(nama, mataKuliah) {
    Orang.call(this, nama);
    this.mataKuliah = mataKuliah;
}

// Buat object dosen
Dosen.prototype = Object.create(Orang.prototype);
// reset constructor agar nanti constructor dosen tidak mengarah ke function Orang
Dosen.prototype.constructor = Dosen;

// buat method pada constructor dosen
Dosen.prototype.mengajar = function() {
    return `Dosen ${this.nama} sedang mengajar ${this.mataKuliah}`
}

// LATIHAN OVERRIDE
function Mahasiswa(nama, jurusan) {
    this.nama = nama;
    this.jurusan = jurusan;
};

Mahasiswa.prototype = Object.create(Orang.prototype);
Mahasiswa.prototype.constructor = Mahasiswa;

Mahasiswa.prototype.perkenalan = function() {
    return `Halo, saya mahasiswa baru nama saya ${this.nama}, jurusan ${this.jurusan}`
};

// buat orang baru
let santosa = new Orang('Santosa');
// buat mahasiswa baru
let edna = new Mahasiswa('Edna', 'Arsitektur');
// buat dosen baru
let pakFelix = new Dosen('Felix', 'PPL');


// sistem perpustakaan

// constructor buku
function Buku(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
    this.status = 'tersedia';
}

// method pinjam buku
Buku.prototype.pinjam = function() {
    if(this.status == 'tersedia') {
        this.status = 'dipinjam';
        return `Buku ${this.judul} berhasil dipinjam`;
    } else {
        return `maaf, buku ${this.judul} sedang ${this.status}`;
    }
};

// method kembalikan buku
Buku.prototype.kembalikan = function() {
    if(this.status == 'dipinjam') {
        this.status = 'tersedia';
        return `terima kasih sudah mengembalikan buku ${this.judul}`
    } else {
        return `buku ${this.judul} masih tersedia di rak buku`
    }
}

// constructor perpustakaan
function Perpustakaan(nama) {
    this.nama = nama;
    this.koleksi = [];
};

Perpustakaan.prototype.tambahBuku = function(judul) {
    this.koleksi.push(this.judul);
    return `Buku "${this.judul}" berhasil ditambahkan ke koleksi.`;
};

// Cari buku berdasarkan judul
Perpustakaan.prototype.cariBuku = function(judul) {
    return this.koleksi.find(b => b.judul === judul) || null;
};

let perpus = new Perpustakaan("Perpustakaan Kampus");
let buku1 = new Buku("Belajar JavaScript", "Andi");
let buku2 = new Buku("Algoritma Dasar", "Budi");