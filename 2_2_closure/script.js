// closure

// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut. - MDNll
// Closure adalah sebuah function ketika memiliki akses ke parent scope-nyam meskipun parent scope-nya sudah selesai dieksekusi. - W3SCHOOL 
// Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkunagn saat ia diciptakan. - code fellow
// Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain. - Techsith

// Lexical Scope

// function init() {
//     // let nama = 'Felix';
//     return function(nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Felix');
// panggilNama('Edna');
// panggilNama('Santosa');

// Function Factory

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// };

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Felix');
// selamatSiang('Edna');
// selamatMalam('Santosa');

// Contoh lain

// let add = (function() {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());