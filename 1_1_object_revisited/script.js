// MEMBUAT OBJECT
// 1. OBJECT LITERAL
// 2. FUNCTION DECLARATION
// 3. CONSTRUCTOR FUNCTION
// 4. OBJECT.CREATE()

// 1. OBJECT LITERAL

// let mahasiswa1 = {
//     nama : 'Felix',
//     energi : 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         return `Selamat datang ${this.nama}, selamat makan!`
//     }
// }

// let mahasiswa2 = {
//     nama : 'Tiyo',
//     energi : 15,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         return `Selamat datang ${this.nama}, selamat makan!`
//     }
// }

// 2. FUNCTION DECLARATION

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         return `Selamat datang ${this.nama}, selamat makan!`
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`
//     }

//     return mahasiswa;
// }

// let mahasiswa3 = Mahasiswa('Felix', 10);
// let mahasiswa4 = Mahasiswa('Tiyo', 15);

// 3. CONSTRUCTOR FUNCTION
// KEYWORD NEW

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        return `Selamat datang ${this.nama}, selamat makan!`
    }

    this.main = function(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`
    }
}

let mahasiswa5 = new Mahasiswa('Ahmad', 10);
