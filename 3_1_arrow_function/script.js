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

let mahasiswa = ['felix', 'Tiyo', 'Ahmad'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log((jumlahHuruf));

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);