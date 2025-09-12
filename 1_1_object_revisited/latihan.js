// LATIHAN MEMBUAT OBJECT

// 1. OBJECT LITERAL
// Buat sebuah object mobil dengan properti: merk, tahun, warna
// buat method:
// - nyalakan() → menampilkan "Mobil merk <merk> dinyalakan"
// - info() → menampilkan "Mobil <merk> tahun <tahun> berwarna <warna>"
// Tugas: Buat object mobil1 dan mobil2 dengan data berbeda, lalu panggil semua methodnya.

let mobil1 = {
    merk: 'Honda Civic',
    tahun: '2020',
    warna: 'hitam',
    nyalakan: function() {
        console.log(`Mobil ${this.merk} dinyalakan`);
    },
    info: function() {
        console.log(`Mobil ${this.merk} tahun ${this.tahun} berwarna ${this.warna}`);
    }
}

let mobil2 = {
    merk: 'Bugati Chiron',
    tahun: '2023',
    warna: 'biru',
    nyalakan: function() {
        console.log(`Mobil ${this.merk} dinyalakan`);
    },
    info: function() {
        console.log(`Mobil ${this.merk} tahun ${this.tahun} berwarna ${this.warna}`);
    }
}

mobil1.nyalakan();
mobil1.info();
mobil2.nyalakan();
mobil2.info();

// 2. FUNCTION DECLARATION
// Buat function buatLaptop yang menerima parameter: merk, ram, processor
// Fungsi ini harus mengembalikan object dengan properti di atas + method:
// deskripsi() → menampilkan "Laptop <merk> dengan RAM <ram> dan prosesor <processor>"
// Tugas: Gunakan buatLaptop untuk membuat minimal 2 laptop berbeda.

function buatLaptop(merk, ram, processor) {
    return {
        merk,
        ram,
        processor,
        deskripsi() {
            return `Laptop ${this.merk} dengan RAM ${this.ram} dan prosesor ${this.processor}`;
        }
    };
}

let laptop1 = buatLaptop('Asus', '16gb', 'Intel 12450H');
let laptop2 = buatLaptop('Acer', '8gb', 'Intel 11400U');

laptop1.deskripsi();
laptop2.deskripsi();

// 3. CONSTRUCTOR FUNCTION
// Buat constructor function Mahasiswa dengan properti: nama, nim, jurusan
// dan method:
// perkenalan() → menampilkan "Halo, saya <nama>, NIM <nim>, dari jurusan <jurusan>"
// Tugas: Buat 3 object mahasiswa berbeda, lalu panggil method perkenalan() masing-masing.

function Mahasiswa(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;

    this.perkenalan = function() {
        return `Halo, saya ${this.nama}, NIM ${this.nim}, dari jurusan ${this.jurusan}`
    }
}

let mahasiswa1 = new Mahasiswa('Felix', '232410101050', 'Sistem Informasi');
let mahasiswa2 = new Mahasiswa('Icang', '232410103090', 'Informatika');

mahasiswa1.perkenalan();
mahasiswa2.perkenalan();