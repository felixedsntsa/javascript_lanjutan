// destructuring function

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];
// console.log(jumlah);

// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);

// jika urutan tidak berpengaruh
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);

// destructuring arguments
const mhs1 = {
    nama: 'felix',
    umur: 21,
    email: 'felix@gmail.com',
    nilai: {
        tugas: 100,
        uts: 95,
        uas: 98
    }
}

function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}) {
    retrun `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya ${uas}`
}

console.log(cetakMhs(mhs1)); 