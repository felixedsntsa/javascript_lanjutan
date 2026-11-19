
// ==========================================

// PENGERTIAN:

// Rest Parameter adalah fitur JavaScript yang digunakan
// untuk mengumpulkan sejumlah argumen yang diberikan
// kepada function menjadi sebuah array.

// Rest Parameter menggunakan tiga titik (...), yang
// diletakkan sebelum nama parameter.

// Contoh sederhana:

function tampilkanData(...data) {
    console.log(data);
}

tampilkanData('HTML', 'CSS', 'JavaScript');

// Output:
// ['HTML', 'CSS', 'JavaScript']

// Catatan:
// - Nama "data" bukan keyword khusus JavaScript.
// - Rest Parameter menghasilkan array asli.
// - Jumlah argumen yang diterima dapat bervariasi.



// ==========================================
// 1. REST PARAMETER PADA FUNCTION
// ==========================================

// A. Mengumpulkan seluruh argumen

function tampilkanAngka(...angka) {
    console.log(angka);
}

tampilkanAngka(10, 20, 30, 40);

// Output:
// [10, 20, 30, 40]


// B. Rest Parameter dapat menerima nol argumen

function tampilkanData(...data) {
    console.log(data);
}

tampilkanData();

// Output:
// []


// C. Mengakses array hasil Rest Parameter

function informasiAngka(...angka) {
    console.log('Jumlah data:', angka.length);
    console.log('Data pertama:', angka[0]);
    console.log('Data kedua:', angka[1]);
}

informasiAngka(10, 20, 30, 40);

// Output:
// Jumlah data: 4
// Data pertama: 10
// Data kedua: 20


// ==========================================
// 2. REST PARAMETER DENGAN PARAMETER BIASA
// ==========================================

// Rest Parameter dapat dikombinasikan dengan
// parameter biasa.
//
// Parameter biasa akan menerima argumen sesuai
// posisinya, sedangkan Rest Parameter mengumpulkan
// seluruh argumen yang tersisa.

function perkenalan(nama, ...hobi) {
    console.log('Nama:', nama);
    console.log('Hobi:', hobi);
}

perkenalan('Felix', 'Coding', 'Gaming', 'Reading');

// Output:
// Nama: Felix
// Hobi: ['Coding', 'Gaming', 'Reading']


// Contoh lainnya:

function dataMahasiswa(nama, umur, ...mataKuliah) {
    console.log('Nama:', nama);
    console.log('Umur:', umur);
    console.log('Mata kuliah:', mataKuliah);
}

dataMahasiswa('Felix', 21, 'JavaScript', 'Database', 'UI/UX');

// Output:
// Nama: Felix
// Umur: 21
// Mata kuliah: ['JavaScript', 'Database', 'UI/UX']


// ATURAN PENTING:
//
// Rest Parameter harus berada pada posisi terakhir
// dalam daftar parameter function.
//
// Benar:
// function contoh(nama, ...data) {}
//
// Salah:
// function contoh(...data, nama) {}
//
// Kode yang salah akan menghasilkan SyntaxError.


// ==========================================
// 3. REST PARAMETER UNTUK MENGHITUNG ANGKA
// ==========================================

// A. Menghitung total angka menggunakan for...of

function jumlahkan(...angka) {
    let total = 0;

    for (let nilai of angka) {
        total += nilai;
    }

    return total;
}

console.log(jumlahkan(10, 20, 30));
// Output: 60

console.log(jumlahkan(5, 10, 15, 20, 25));
// Output: 75


// B. Menghitung total angka menggunakan reduce()

function hitungTotal(...angka) {
    return angka.reduce((total, nilai) => total + nilai, 0);
}

console.log(hitungTotal(10, 20, 30, 40));
// Output: 100

// Penjelasan:
// - reduce() melakukan proses akumulasi pada array.
// - total merupakan nilai akumulasi.
// - nilai merupakan elemen yang sedang diproses.
// - 0 merupakan nilai awal akumulasi.


// ==========================================
// 4. REST PARAMETER PADA ARROW FUNCTION
// ==========================================

// Rest Parameter juga dapat digunakan pada
// Arrow Function.

const jumlahArrow = (...angka) => {
    return angka.reduce((total, nilai) => total + nilai, 0);
};

console.log(jumlahArrow(10, 20, 30));
// Output: 60


// Arrow Function dengan implicit return:

const totalArrow = (...angka) => angka.reduce((total, nilai) => total + nilai, 0);

console.log(totalArrow(10, 20, 30, 40));
// Output: 100


// ==========================================
// 5. REST PARAMETER PADA OBJECT METHOD
// ==========================================

// Rest Parameter dapat digunakan pada method
// yang berada di dalam object.

const kalkulator = {
    jumlahkan(...angka) {
        return angka.reduce((total, nilai) => total + nilai, 0);
    }
};

console.log(kalkulator.jumlahkan(10, 20, 30));
// Output: 60


// ==========================================
// 6. REST ELEMENT PADA DESTRUCTURING
// ==========================================

// Selain pada parameter function, sintaks tiga titik
// (...) juga dapat digunakan pada destructuring.
//
// Pada konteks ini, istilahnya adalah Rest Element.
// Fungsinya mengumpulkan elemen atau properti yang
// tersisa ke dalam variabel baru.


// A. Rest Element pada Array Destructuring

const bahasa = ['HTML', 'CSS', 'JavaScript', 'React'];

const [pertama, kedua, ...bahasaLain] = bahasa;

console.log(pertama);
// Output: HTML

console.log(kedua);
// Output: CSS

console.log(bahasaLain);
// Output: ['JavaScript', 'React']


// B. Rest Element pada Object Destructuring

const mahasiswa = {
    nama: 'Felix',
    umur: 21,
    jurusan: 'Sistem Informasi',
    universitas: 'Universitas Jember'
};

const { nama, ...detailMahasiswa } = mahasiswa;

console.log(nama);
// Output: Felix

console.log(detailMahasiswa);
// Output:
// {
//     umur: 21,
//     jurusan: 'Sistem Informasi',
//     universitas: 'Universitas Jember'
// }


// Catatan:
// Rest Element pada destructuring dan Rest Parameter
// menggunakan sintaks yang sama, tetapi konteksnya berbeda.


// ==========================================
// 7. REST PARAMETER VS ARGUMENTS OBJECT
// ==========================================

// Sebelum Rest Parameter, JavaScript memiliki
// arguments object untuk mengakses seluruh argumen
// yang diberikan kepada function.


// A. Menggunakan arguments

function jumlahArguments() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(jumlahArguments(10, 20, 30));
// Output: 60


// B. Menggunakan Rest Parameter

function jumlahRest(...angka) {
    return angka.reduce((total, nilai) => total + nilai, 0);
}

console.log(jumlahRest(10, 20, 30));
// Output: 60


// Perbedaan arguments dan Rest Parameter:
//
// 1. arguments bukan array asli, sedangkan Rest Parameter
//    menghasilkan array asli.
// 2. Rest Parameter dapat langsung menggunakan metode
//    array seperti map(), filter(), dan reduce().
// 3. arguments tidak tersedia pada Arrow Function.
// 4. Rest Parameter lebih eksplisit dan direkomendasikan
//    untuk menampung argumen function yang fleksibel.


// ==========================================
// 8. REST PARAMETER VS SPREAD OPERATOR
// ==========================================

// Keduanya menggunakan sintaks tiga titik (...),
// tetapi memiliki fungsi yang berbeda.


// A. REST PARAMETER
// Mengumpulkan beberapa argumen menjadi sebuah array.

function kumpulkanData(...data) {
    console.log(data);
}

kumpulkanData(10, 20, 30);

// Output:
// [10, 20, 30]


// B. SPREAD OPERATOR
// Membentangkan elemen array menjadi nilai individual.

const angkaSpread = [10, 20, 30];

console.log(...angkaSpread);

// Output:
// 10 20 30


// C. Menggunakan Rest dan Spread secara bersamaan

function tampilkanData(...data) {
    console.log(data);
}

const dataSpread = ['HTML', 'CSS', 'JavaScript'];

tampilkanData(...dataSpread);

// Proses:
// 1. ...dataSpread menggunakan Spread Operator untuk
//    membentangkan elemen array menjadi argumen.
// 2. ...data menggunakan Rest Parameter untuk
//    mengumpulkan argumen tersebut menjadi array.
//
// Output:
// ['HTML', 'CSS', 'JavaScript']


// Perbandingan:
//
// REST PARAMETER:
// Mengumpulkan banyak argumen menjadi array.
// Umumnya digunakan pada parameter function.
//
// SPREAD OPERATOR:
// Membentangkan elemen array atau iterable menjadi
// nilai individual.
// Dapat digunakan pada pemanggilan function,
// array, dan object.


// ==========================================
// 9. ATURAN DAN HAL YANG PERLU DIPERHATIKAN
// ==========================================

// A. Hanya boleh ada satu Rest Parameter dalam
//    satu daftar parameter function.

// Benar:
function contohSatu(...args) {
    console.log(args);
}

// Salah:
// function contohDua(...args, ...data) {}


// B. Rest Parameter harus berada di posisi terakhir.

// Benar:
function contohTiga(nama, ...args) {}

// Salah:
// function contohEmpat(...args, nama) {}


// C. Rest Parameter menghasilkan array.

function cekArray(...data) {
    console.log(Array.isArray(data));
}

cekArray(10, 20, 30);

// Output: true


// D. Rest Parameter dapat menerima nol argumen.

function cekKosong(...data) {
    console.log(data);
}

cekKosong();

// Output: []


// E. Rest Parameter dapat dikombinasikan dengan
//    parameter default.

function sapaan(pesan = 'Hello', ...nama) {
    console.log(pesan, nama);
}

sapaan('Welcome', 'Felix', 'Andi');

// Output:
// Welcome ['Felix', 'Andi']


// ==========================================
// 10. STUDI KASUS PENGGUNAAN REST PARAMETER
// ==========================================

// A. Menghitung rata-rata nilai

function hitungRataRata(...nilai) {
    if (nilai.length === 0) {
        return 0;
    }

    const total = nilai.reduce((sum, angka) => sum + angka, 0);

    return total / nilai.length;
}

console.log(hitungRataRata(80, 90, 85));
// Output: 85

console.log(hitungRataRata(70, 75, 80, 85, 90));
// Output: 80


// B. Membuat data tim

function buatTim(namaTim, ...anggota) {
    return {
        tim: namaTim,
        anggota: anggota
    };
}

console.log(buatTim('Frontend Team', 'Felix', 'Andi', 'Budi'));

// Output:
// {
//     tim: 'Frontend Team',
//     anggota: ['Felix', 'Andi', 'Budi']
// }


// C. Mencari angka terbesar

function cariMaksimal(...angka) {
    if (angka.length === 0) {
        return undefined;
    }

    return Math.max(...angka);
}

console.log(cariMaksimal(10, 50, 30, 90, 20));
// Output: 90

// Catatan:
// ...angka pada Math.max() merupakan Spread Operator.
// Array angka dibentangkan menjadi argumen individual
// yang diterima oleh Math.max().


// D. Memfilter angka genap

function filterGenap(...angka) {
    return angka.filter(nilai => nilai % 2 === 0);
}

console.log(filterGenap(1, 2, 3, 4, 5, 6, 7, 8));
// Output: [2, 4, 6, 8]


// E. Memfilter angka positif dan nol

function filterNonNegatif(...angka) {
    return angka.filter(nilai => nilai >= 0);
}

console.log(filterNonNegatif(-5, 10, -2, 20, 0));
// Output: [10, 20, 0]


// F. Function dengan operator

function kalkulasi(operator, ...angka) {
    if (operator === 'sum') {
        return angka.reduce((total, nilai) => total + nilai, 0);
    }

    if (operator === 'multiply') {
        return angka.reduce((total, nilai) => total * nilai, 1);
    }

    return 'Operator tidak dikenali';
}

const dataAngka = [10, 20, 30];

console.log(kalkulasi('sum', ...dataAngka));
// Output: 60

console.log(kalkulasi('multiply', ...dataAngka));
// Output: 6000


// ==========================================
// 11. LATIHAN MANDIRI
// ==========================================

// Kerjakan latihan berikut dengan mengisi kode
// pada bagian yang masih kosong.
// Jangan langsung melihat atau menghapus target output.


// LATIHAN 1: MENGHITUNG TOTAL BELANJA

// Buat function hitungBelanja() yang menerima
// banyak harga barang menggunakan Rest Parameter.
// Kembalikan total seluruh harga barang.

function hitungBelanja(...harga) {
    // TODO: Tulis jawabanmu di sini.
}

console.log('Latihan 1:', hitungBelanja(10000, 20000, 15000));

// Target output:
// 45000



// LATIHAN 2: DATA MAHASISWA

// Buat function tampilkanMahasiswa() yang menerima
// nama ketua sebagai parameter pertama dan nama
// anggota lainnya menggunakan Rest Parameter.

function tampilkanMahasiswa(ketua, ...anggota) {
    // TODO: Tulis jawabanmu di sini.
}

tampilkanMahasiswa('Felix', 'Andi', 'Budi', 'Citra');

// Target output:
// Ketua: Felix
// Anggota: ['Andi', 'Budi', 'Citra']



// LATIHAN 3: NILAI TERTINGGI

// Buat function nilaiTertinggi() yang menerima
// banyak nilai dan mengembalikan nilai tertinggi.

function nilaiTertinggi(...nilai) {
    // TODO: Tulis jawabanmu di sini.
}

console.log('Latihan 3:', nilaiTertinggi(75, 90, 85, 95, 80));

// Target output:
// 95



// LATIHAN 4: FILTER DATA

// Buat function filterPositif() yang menerima
// banyak angka dan mengembalikan angka positif
// serta nol.

function filterPositif(...angka) {
    // TODO: Tulis jawabanmu di sini.
}

console.log('Latihan 4:', filterPositif(-5, 10, -2, 20, 0));

// Target output:
// [10, 20, 0]



// LATIHAN 5: GABUNGAN REST DAN SPREAD

// Buat function hitung() yang menerima operator
// sebagai parameter pertama dan angka lainnya
// menggunakan Rest Parameter.
//
// Gunakan Spread Operator untuk memanggil function
// dengan data array.

function hitung(operator, ...angka) {
    // TODO: Jika operator adalah 'sum',
    // kembalikan hasil penjumlahan seluruh angka.
}

const angkaLatihan = [10, 20, 30];

console.log('Latihan 5:', hitung('sum', ...angkaLatihan));

// Target output:
// 60



// ==========================================
// 12. KESIMPULAN
// ==========================================

/*
1. Rest Parameter menggunakan sintaks tiga titik (...).
2. Digunakan untuk mengumpulkan argumen function
   menjadi sebuah array.
3. Dapat menerima jumlah argumen yang bervariasi,
   termasuk nol argumen.
4. Dapat dikombinasikan dengan parameter biasa.
5. Harus ditempatkan pada posisi terakhir.
6. Hanya boleh ada satu Rest Parameter dalam satu
   daftar parameter function.
7. Dapat digunakan pada Function Declaration,
   Function Expression, Arrow Function, dan method.
8. Rest Parameter menghasilkan array asli sehingga
   dapat menggunakan metode array.
9. Rest Element juga dapat digunakan pada array
   dan object destructuring.
10. Berbeda dengan Spread Operator yang membentangkan
    elemen, Rest Parameter mengumpulkan argumen.

INTI KONSEP:

REST PARAMETER:
Mengumpulkan banyak argumen menjadi array.

SPREAD OPERATOR:
Membentangkan elemen array atau iterable menjadi
nilai individual.
*/
