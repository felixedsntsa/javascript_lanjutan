// Object.create();
// bisa lebih hemat manajemen memory, tetapi karena yang dibutuhkan hanya mahasiswa ada object lain yang ikut juga ke object mahasiswa

const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        return `Selamat datang ${this.nama}, selamat makan!`
    },
    main: function(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`
    },
    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let mahasiswa3 = Mahasiswa('Felix', 10);
let mahasiswa4 = Mahasiswa('Tiyo', 15);