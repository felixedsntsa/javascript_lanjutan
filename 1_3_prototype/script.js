// PROTOTYPE

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// };

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`
// };

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`
// };

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`
// };

// let felix = new Mahasiswa('Felix', 10);



// VERSI CLASS

// class Mahasiswa {
//     constructor(nama,energi) {
//         this.naam = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`
//     };

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`
//     };

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`
//     };
// };

// let felix = new Mahasiswa('Felix', 10);