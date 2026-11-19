// DESTRUCTURING ASSIGNMENT

// expression pada javascript yang membuat kta dapat membongkar nilai dari array atau properti dari object dalam variabel yang terpisah

// array

// const perkenalan = ['Halo', 'nama', 'saya', 'felix']
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(salam);

// const [salam, satu, dua, nama] = perkenalan
// console.log(salam);
// console.log(satu);
// console.log(dua);
// console.log(nama);

// const [salam, , ,nama] = perkenalan
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// destructuring object
// const mhs = {
//     nama: 'Felix',
//     umur: 21
// }

// const {nama, umur} = mhs
// console.log(nama);

// assignment tanpa deklarasi objek
// ({nama, umur} = {nama: 'felix', umur:21})
// console.log(nama);

// assignment ke variabel baru
// const mhs = {
//     nama: 'Felix',
//     umur: 21
// }

// const {nama: n, umur: u} = mhs
// console.log(n);

// default value
// const mhs = {
//     nama: 'Felix',
//     umur: 21,
//     email: 'felix@gmal.com'
// }

// const {nama: n, umur: u, email: e = 'emaildeafult@gmail.com'} = mhs
// console.log(e);

// rest parameter
// const mhs = {
//     nama: 'Felix',
//     umur: 21,
//     email: 'felix@gmal.com'
// }

// const {nama, ...value} = mhs
// console.log(value);

// mengambil filed pada object, setelah dikirim sebagai parameter untuk function

// const mhs = {
//     id: 123,
//     nama: 'Felix',
//     umur: 21,
//     email: 'felix@gmail,com'
// }

// function getIdMhs({id}) {
//     return id;
// }

// console.log(getIdMhs(mhs));