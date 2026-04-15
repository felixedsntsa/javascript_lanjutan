// arrow function

// bentuk lain yang lebih ringkas dari function expression

// let tampilPesan = (nama) => {
//     alert('halo' + nama);
// }

// tampilPesan('Felix');

// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }

// console.log(tampilNama("Felix Santosa"));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Pagi', 'Felix'));

// implicit return

// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Felix'));

// let mahasiswa = ['felix', 'Tiyo', 'Ahmad'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log((jumlahHuruf));

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// konsep this pada arrow function

// constructor function
// const Mahasiswa = function() {
//     this.nama = 'Felix';
//     this.umur = 21;
//     this.sayhello = () => {
//         console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }
// };

// const felix = new Mahasiswa();

// object literal
// const mhs1 = {
//     nama: 'Felix',
//     umur: 21,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const Mahasiswa = function() {
//     this.nama = 'Felix';
//     this.umur = 21;
//     this.sayhello = () => {
//         console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// };

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});