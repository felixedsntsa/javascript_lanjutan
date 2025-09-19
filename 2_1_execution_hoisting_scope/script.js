// EXECUTION CONTEXT, HOISTING, AND SCOPE

// 2 FASE PADA EXECUTION CONTEXT
// 1. CREATION
// 2. EXECUTION

// let nama = 'Felix';
// console.log(nama);

// CREATION PHASE PADA GLOBAL CONTEXT
// js akan cek apakah ada variable pada baris kode
// kalau ada akan membuat variabel dengan isinya undefined
// var nama = undefined;
// kalau ada function akan diisi dengan kode functionnya
// function nama = fn();
// hoisting
// window = global object;
// this = window;

// EXECUTION PHASE


// var nama = 'Felix';
// var umur = 20;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, umur saya adalah ${umur} tahun`;
// }

// FUNCTION MEMBUAT LOKAL EXECUTION CONTEXT
// YANG DIDALAMNYA TERDAPAT CREATION DAN EXECUTION PHASE
// window
// arguments
// HOISTING


// var nama  = 'Felix Edna Santosa';
// var username = '@felixsntsa';

// function cetakUrl (username) {
//     var instagramUrl = 'http://instagram.com/'
//     return instagramUrl + username;
// }

// console.log(cetakUrl(username));

// function a () {
//     console.log('ini a');

//     function b () {
//         console.log('ini b');

//         function c () {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();

function satu() {
    var nama = 'Felix';
    console.log(nama);
};

function dua() {
    console.log(nama);
};

console.log(nama);
var nama = 'Santosa'
satu();
dua('Edna');
console.log(nama);