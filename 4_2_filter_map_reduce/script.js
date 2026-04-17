// contoh higher order function
// Array.prorotype.map()
// Array.prorotype.filter()
// Array.prorotype.reduce()

const angka = [-1, 10, 6, 4, -5, -3, 2, -10, 9];

// mencari angka >= 3
// for

// const newAngka = [];
// for(i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// };

// console.log(newAngka);

// filter 
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(angka);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// method chaining
// mencari angka >= 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a >= 5)
.map(a => a * 3)
.reduce((acc, cur) => acc + cur);
console.log(hasil);
