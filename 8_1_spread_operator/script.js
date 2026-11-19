
/*
==========================================
CATATAN MATERI JAVASCRIPT
SPREAD OPERATOR (...)
==========================================

PENGERTIAN:
Spread Operator (...) digunakan untuk membentangkan
elemen array, properti object, atau nilai iterable
ke dalam struktur atau argumen lain.

*/

// ==========================================
// 1. SPREAD OPERATOR PADA ARRAY
// ==========================================

// A. Membentangkan elemen array

const angka = [1, 2, 3, 4, 5];

console.log(...angka);
// Output: 1 2 3 4 5


// B. Menggabungkan array

const angka1 = [1, 2, 3];
const angka2 = [4, 5, 6];

const angkaGabungan = [...angka1, ...angka2];

console.log(angkaGabungan);
// Output: [1, 2, 3, 4, 5, 6]


// C. Menyalin array

const buah = ['Apel', 'Mangga', 'Jeruk'];

const buahBaru = [...buah];

buahBaru.push('Pisang');

console.log(buah);
// Output: ['Apel', 'Mangga', 'Jeruk']

console.log(buahBaru);
// Output: ['Apel', 'Mangga', 'Jeruk', 'Pisang']


// D. Menambahkan elemen array

const nilai = [80, 85, 90];

const nilaiBaru = [75, ...nilai, 95];

console.log(nilaiBaru);
// Output: [75, 80, 85, 90, 95]


// E. Mengubah string menjadi array

const nama = 'Felix';

const huruf = [...nama];

console.log(huruf);
// Output: ['F', 'e', 'l', 'i', 'x']



// ==========================================
// 2. SPREAD OPERATOR PADA OBJECT
// ==========================================

// A. Menyalin object

const mahasiswa = {
    nama: 'Felix',
    umur: 21,
    jurusan: 'Sistem Informasi'
};

const mahasiswaBaru = { ...mahasiswa };

console.log(mahasiswaBaru);


// B. Menggabungkan object

const identitas = {
    nama: 'Felix',
    umur: 21
};

const akademik = {
    jurusan: 'Sistem Informasi',
    semester: 7
};

const dataMahasiswa = {
    ...identitas,
    ...akademik
};

console.log(dataMahasiswa);


// C. Memperbarui properti object

const mahasiswaUpdate = {
    ...mahasiswa,
    umur: 22
};

console.log(mahasiswaUpdate);
// Properti umur berubah menjadi 22.
// Object mahasiswa asli tetap tidak berubah.


// D. Properti dengan nama yang sama

const data1 = {
    nama: 'Felix',
    umur: 21
};

const data2 = {
    nama: 'Budi',
    semester: 7
};

const dataGabungan = {
    ...data1,
    ...data2
};

console.log(dataGabungan);
// Output:
// { nama: 'Budi', umur: 21, semester: 7 }

// Catatan:
// Jika ada properti yang sama, nilai yang ditulis
// paling akhir akan digunakan.



// ==========================================
// 3. SPREAD OPERATOR PADA FUNCTION
// ==========================================

// A. Meneruskan array sebagai argumen function

const angkaFunction = [10, 20, 30];

function jumlahkan(a, b, c) {
    return a + b + c;
}

console.log(jumlahkan(...angkaFunction));
// Output: 60


// B. Mencari nilai terbesar

const nilaiUjian = [75, 90, 85, 100, 80];

console.log(Math.max(...nilaiUjian));
// Output: 100


// ==========================================
// 4. SPREAD OPERATOR VS REST PARAMETER
// ==========================================

// SPREAD:
// Membentangkan elemen menjadi beberapa nilai.

const angkaSpread = [1, 2, 3];

console.log(...angkaSpread);
// Output: 1 2 3


// REST PARAMETER:
// Mengumpulkan beberapa argumen menjadi array.

function kumpulkanAngka(...angka) {
    return angka;
}

console.log(kumpulkanAngka(1, 2, 3));
// Output: [1, 2, 3]


// ==========================================
// 5. KEKURANGAN YANG PERLU DIPERHATIKAN
// ==========================================

// Spread pada object dan array hanya melakukan
// SHALLOW COPY, bukan DEEP COPY.

const user = {
    nama: 'Felix',
    alamat: {
        kota: 'Jember'
    }
};

const userBaru = { ...user };

userBaru.alamat.kota = 'Surabaya';

console.log(user.alamat.kota);
// Output: 'Surabaya'

// Mengapa?
// Karena object alamat masih memiliki referensi
// yang sama pada kedua object.


// ==========================================
// 6. LATIHAN MANDIRI
// ==========================================

// Kerjakan latihan berikut dengan mengisi kode
// pada bagian yang masih kosong.


// LATIHAN 1: MENGGABUNGKAN ARRAY

const buah1 = ['Apel', 'Mangga'];
const buah2 = ['Jeruk', 'Pisang'];

// TODO: Gabungkan buah1 dan buah2 menggunakan
// Spread Operator.

const buahGabungan = [];

console.log('Latihan 1:', buahGabungan);

// Target output:
// ['Apel', 'Mangga', 'Jeruk', 'Pisang']



// LATIHAN 2: MENYALIN DAN MEMPERBARUI OBJECT

const mhs = {
    nama: 'Felix',
    semester: 5
};

// TODO: Buat object mhsBaru dengan menyalin
// mhs dan mengubah semester menjadi 7.

const mhsBaru = {};

console.log('Latihan 2:', mhsBaru);

// Target output:
// { nama: 'Felix', semester: 7 }



// LATIHAN 3: MENCARI NILAI TERBESAR

const nilaiLatihan = [75, 90, 85, 100, 80];

// TODO: Gunakan Spread Operator dan Math.max()
// untuk mencari nilai terbesar.

const nilaiTertinggi = 0;

console.log('Latihan 3:', nilaiTertinggi);

// Target output:
// 100



// LATIHAN 4: MENGGABUNGKAN OBJECT

const dataA = {
    nama: 'Felix',
    umur: 21
};

const dataB = {
    nama: 'Budi',
    semester: 7
};

// TODO: Gabungkan dataA dan dataB menggunakan
// Spread Operator. Nilai nama harus menjadi Budi.

const dataHasil = {};

console.log('Latihan 4:', dataHasil);

// Target output:
// { nama: 'Budi', umur: 21, semester: 7 }



// LATIHAN 5: FUNCTION DAN SPREAD

const angkaLatihan = [10, 20, 30];

// TODO: Buat function jumlah(a, b, c) yang
// mengembalikan hasil penjumlahan ketiga argumen.
// Panggil function dengan Spread Operator.

function jumlah(a, b, c) {
    // Tulis jawabanmu di sini.
}

console.log('Latihan 5:', jumlah(...angkaLatihan));

// Target output:
// 60



// ==========================================
// 7. KESIMPULAN
// ==========================================

/*
1. Spread Operator menggunakan simbol tiga titik (...).
2. Dapat membentangkan elemen array.
3. Dapat menyalin dan menggabungkan array.
4. Dapat menyalin, menggabungkan, dan memperbarui object.
5. Dapat meneruskan elemen array sebagai argumen function.
6. Berbeda dengan Rest Parameter yang mengumpulkan argumen.
7. Spread hanya melakukan shallow copy.
8. Jika properti object duplikat, nilai terakhir menang.
*/
 