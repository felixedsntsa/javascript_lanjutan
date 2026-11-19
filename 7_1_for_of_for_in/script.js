// new looping syntax in js

// for of
// create a loop iterating over iterable object

// iterable object
// example: string, array, arguments, typedarray, map, set, user-defined iterables

// const mhs = ['felix', 'edna', 'santosa'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs) {
//     console.log(m);
// }

// string
const nama = 'Felix';
// for(const n of nama) {
//     console.log(n);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// for(const [i, m] of mhs.entries) {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// nodelist
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.innerHTML));
// for(n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//     // return arguments.reduce((a, i) => a + i)
//     let jumlah = 0
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah
// }

// for in
// creates a loop only interating over enumerable

const mhs = {
    nama: 'f',
    umur: 21,
    email: 'f@gmail.com'
}

for(m in mhs) {
    console.log(mhs[m]);
}