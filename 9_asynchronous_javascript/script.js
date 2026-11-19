/*
==========================================
CATATAN MATERI JAVASCRIPT
ASYNCHRONOUS JAVASCRIPT
==========================================

PENGERTIAN:

Asynchronous JavaScript adalah mekanisme yang memungkinkan
suatu proses berjalan tanpa harus menunggu proses tersebut
selesai sebelum menjalankan tugas lainnya.

JavaScript secara default menggunakan model eksekusi
single-threaded, yaitu menjalankan satu tugas JavaScript
pada satu waktu melalui Call Stack.

Asynchronous JavaScript memungkinkan operasi seperti:
- Mengambil data dari server.
- Mengakses API.
- Menggunakan timer.
- Membaca file.
- Menangani event.

Tujuannya adalah menghindari blocking pada proses utama
JavaScript sehingga aplikasi tetap responsif.

*/


// ==========================================
// 1. SYNCHRONOUS JAVASCRIPT
// ==========================================

/*
Synchronous berarti kode dieksekusi secara berurutan.

Setiap instruksi harus selesai terlebih dahulu sebelum
instruksi berikutnya dijalankan.
*/

console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");

/*
OUTPUT:

Proses 1
Proses 2
Proses 3

Penjelasan:
1. JavaScript menjalankan Proses 1.
2. Setelah selesai, menjalankan Proses 2.
3. Kemudian menjalankan Proses 3.
*/


// ==========================================
// 2. ASYNCHRONOUS JAVASCRIPT
// ==========================================

/*
Asynchronous memungkinkan suatu operasi berjalan tanpa
harus menghentikan seluruh proses JavaScript.

Contohnya adalah setTimeout() yang menjadwalkan callback
untuk dijalankan setelah waktu tertentu.
*/

console.log("Proses 1");

setTimeout(() => {
    console.log("Proses 2");
}, 2000);

console.log("Proses 3");

/*
OUTPUT:

Proses 1
Proses 3
Proses 2

Penjelasan:
1. Proses 1 dijalankan.
2. setTimeout() menjadwalkan callback selama 2 detik.
3. JavaScript melanjutkan eksekusi ke Proses 3.
4. Setelah timer selesai dan Call Stack tersedia,
   callback dijalankan.

Catatan:
setTimeout() tidak menghentikan seluruh eksekusi
JavaScript selama menunggu timer.
*/


// ==========================================
// 3. MEMAHAMI EVENT LOOP
// ==========================================

/*
Event Loop merupakan mekanisme yang mengatur kapan
callback asynchronous dapat dijalankan.

Ada beberapa komponen penting:

1. CALL STACK
   Tempat JavaScript menjalankan function.

2. WEB APIs / RUNTIME APIs
   Fasilitas dari browser atau runtime untuk menangani
   operasi tertentu seperti timer dan network request.

3. CALLBACK QUEUE / TASK QUEUE
   Antrean callback dari task seperti setTimeout().

4. MICROTASK QUEUE
   Antrean callback Promise seperti .then() dan .catch().

5. EVENT LOOP
   Memeriksa Call Stack dan mengatur eksekusi task
   serta microtask yang sudah siap.

PRIORITAS EKSEKUSI:

Synchronous Code
        |
        v
Microtask Queue
        |
        v
Task Queue

Microtask memiliki prioritas lebih tinggi dibandingkan
task yang menunggu di Task Queue.

Contoh:
*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

/*
OUTPUT:

A
D
C
B

Penjelasan:
1. A dijalankan secara synchronous.
2. setTimeout() menjadwalkan callback ke Task Queue.
3. Promise.then() menjadwalkan callback ke Microtask Queue.
4. D dijalankan secara synchronous.
5. Microtask dijalankan terlebih dahulu, yaitu C.
6. Setelah microtask selesai, callback timer dijalankan, yaitu B.
*/


// ==========================================
// 4. CALLBACK FUNCTION
// ==========================================

/*
Callback Function adalah function yang diberikan sebagai
argumen kepada function lain untuk kemudian dipanggil
pada waktu tertentu.

Callback tidak selalu asynchronous.
Callback juga dapat dijalankan secara synchronous.
*/

// A. Callback sederhana

function greeting(name, callback) {
    console.log(`Hello, ${name}`);

    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greeting("Felix", sayGoodbye);

/*
OUTPUT:

Hello, Felix
Goodbye!
*/


// B. Callback pada asynchronous function

function getData(callback) {
    setTimeout(() => {
        const data = {
            name: "Felix",
            age: 21
        };

        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

getData(displayData);

/*
OUTPUT SETELAH SEKITAR 2 DETIK:

{
    name: "Felix",
    age: 21
}

Penjelasan:
1. getData() menerima function displayData sebagai callback.
2. setTimeout() menjalankan proses setelah sekitar 2 detik.
3. Data dikirimkan ke callback.
4. displayData() menampilkan data tersebut.
*/


// ==========================================
// 5. CALLBACK HELL
// ==========================================

/*
Callback Hell adalah kondisi ketika callback bersarang
terlalu dalam sehingga kode menjadi sulit dibaca,
dipahami, dan dikelola.

Biasanya terjadi ketika beberapa operasi asynchronous
saling bergantung.
*/

function getUser(callback) {
    setTimeout(() => {
        console.log("User berhasil didapatkan");

        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("Profile berhasil didapatkan");

        callback();
    }, 1000);
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("Posts berhasil didapatkan");

        callback();
    }, 1000);
}

getUser(() => {
    getProfile(() => {
        getPosts(() => {
            console.log("Semua proses selesai");
        });
    });
});

/*
OUTPUT:

User berhasil didapatkan
Profile berhasil didapatkan
Posts berhasil didapatkan
Semua proses selesai

Solusi untuk mengelola asynchronous yang lebih kompleks
adalah menggunakan Promise dan Async/Await.
*/


// ==========================================
// 6. PROMISE
// ==========================================

/*
Promise adalah object JavaScript yang merepresentasikan
hasil dari suatu operasi asynchronous.

Promise memiliki 3 STATE:

1. PENDING
   Operasi masih berjalan atau belum selesai.

2. FULFILLED
   Operasi berhasil diselesaikan.

3. REJECTED
   Operasi mengalami kegagalan.

Promise yang sudah fulfilled atau rejected disebut settled.

Promise dibuat menggunakan constructor new Promise().
*/

// A. Membuat Promise

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data berhasil diperoleh");
    } else {
        reject("Data gagal diperoleh");
    }
});

console.log(myPromise);

/*
Penjelasan:

resolve():
Digunakan untuk menandakan Promise berhasil.

reject():
Digunakan untuk menandakan Promise gagal.

Catatan:
Promise di atas langsung diselesaikan karena tidak ada
operasi asynchronous yang perlu ditunggu.
*/


// B. Menggunakan then()

/*
.then() digunakan untuk menangani hasil Promise
ketika berada dalam state Fulfilled.
*/

const promiseThen = new Promise((resolve, reject) => {
    resolve("Data berhasil diperoleh");
});

promiseThen.then((result) => {
    console.log(result);
});

/*
OUTPUT:

Data berhasil diperoleh
*/


// C. Menggunakan catch()

/*
.catch() digunakan untuk menangani Promise yang
berada dalam state Rejected.
*/

const promiseCatch = new Promise((resolve, reject) => {
    reject("Terjadi kesalahan saat mengambil data");
});

promiseCatch
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT:

Terjadi kesalahan saat mengambil data
*/


// D. Menggunakan finally()

/*
.finally() digunakan untuk menjalankan kode setelah
Promise selesai, baik berhasil maupun gagal.

finally() tidak menerima hasil Promise sebagai argumen.
*/

const promiseFinally = new Promise((resolve, reject) => {
    resolve("Data berhasil diperoleh");
});

promiseFinally
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Proses selesai");
    });

/*
OUTPUT:

Data berhasil diperoleh
Proses selesai
*/


// E. Promise dengan setTimeout()

/*
Promise sering digunakan untuk membungkus operasi
asynchronous seperti timer atau request API.
*/

function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data berhasil diperoleh");
        }, 2000);
    });
}

getDataPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT SETELAH SEKITAR 2 DETIK:

Data berhasil diperoleh
*/


// ==========================================
// 7. PROMISE CHAINING
// ==========================================

/*
Promise Chaining adalah teknik menghubungkan beberapa
operasi Promise menggunakan .then() secara berurutan.

Nilai yang dikembalikan menggunakan return pada .then()
akan diteruskan ke .then() berikutnya.
*/

const proses = new Promise((resolve) => {
    resolve(10);
});

proses
    .then((result) => {
        console.log(result);

        return result * 2;
    })
    .then((result) => {
        console.log(result);

        return result + 5;
    })
    .then((result) => {
        console.log(result);
    });

/*
OUTPUT:

10
20
25

Penjelasan:
1. Promise pertama menghasilkan angka 10.
2. then() pertama menerima 10, kemudian mengalikannya 2.
3. then() kedua menerima 20, kemudian menambahkan 5.
4. then() ketiga menerima 25.

Catatan:
Jika return mengembalikan Promise lain, proses berikutnya
akan menunggu Promise tersebut selesai.
*/


// ==========================================
// 8. PROMISE STATIC METHODS
// ==========================================

/*
JavaScript menyediakan beberapa static method Promise
untuk mengelola beberapa Promise sekaligus.

Empat method yang perlu dipahami:

1. Promise.all()
2. Promise.race()
3. Promise.allSettled()
4. Promise.any()
*/


// A. Promise.all()

/*
Promise.all() menunggu seluruh Promise berhasil.

Jika seluruh Promise berhasil, hasilnya dikembalikan
dalam bentuk array sesuai urutan input.

Jika salah satu Promise rejected, Promise.all()
akan menjadi rejected.
*/

const promise1 = Promise.resolve("Data 1");
const promise2 = Promise.resolve("Data 2");
const promise3 = Promise.resolve("Data 3");

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT:

["Data 1", "Data 2", "Data 3"]
*/


// B. Promise.race()

/*
Promise.race() mengambil hasil dari Promise pertama
yang settled, baik fulfilled maupun rejected.
*/

const race1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 selesai");
    }, 2000);
});

const race2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 selesai");
    }, 1000);
});

Promise.race([race1, race2])
    .then((result) => {
        console.log(result);
    });

/*
OUTPUT:

Promise 2 selesai

Penjelasan:
Promise kedua selesai lebih dahulu sehingga hasilnya
menjadi hasil dari Promise.race().
*/


// C. Promise.allSettled()

/*
Promise.allSettled() menunggu seluruh Promise selesai,
tanpa memedulikan apakah berhasil atau gagal.

Hasilnya berupa array object yang berisi status
dan value atau reason dari setiap Promise.
*/

const settled1 = Promise.resolve("Berhasil");
const settled2 = Promise.reject("Gagal");
const settled3 = Promise.resolve("Berhasil juga");

Promise.allSettled([settled1, settled2, settled3])
    .then((result) => {
        console.log(result);
    });

/*
OUTPUT:

[
    { status: "fulfilled", value: "Berhasil" },
    { status: "rejected", reason: "Gagal" },
    { status: "fulfilled", value: "Berhasil juga" }
]
*/


// D. Promise.any()

/*
Promise.any() mengembalikan hasil dari Promise pertama
yang berhasil (fulfilled).

Jika semua Promise gagal, Promise.any() menghasilkan
AggregateError.
*/

const any1 = Promise.reject("Gagal 1");
const any2 = Promise.resolve("Berhasil 2");
const any3 = Promise.resolve("Berhasil 3");

Promise.any([any1, any2, any3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT:

Berhasil 2

Penjelasan:
Promise pertama gagal, tetapi Promise.any() tetap
menunggu Promise berikutnya sampai ada yang berhasil.
*/


// ==========================================
// 9. ASYNC FUNCTION
// ==========================================

/*
Keyword async digunakan untuk mendeklarasikan function
asynchronous.

Function yang menggunakan async akan selalu
mengembalikan Promise.

Jika mengembalikan nilai biasa, JavaScript otomatis
membungkus nilai tersebut menjadi Promise fulfilled.
*/

// A. Async Function Declaration

async function greetingAsync() {
    return "Hello Felix";
}

console.log(greetingAsync());

/*
OUTPUT:

Promise { 'Hello Felix' }

Catatan:
Bentuk tampilan Promise dapat berbeda tergantung
lingkungan JavaScript yang digunakan.
*/


// B. Mengakses hasil Async Function menggunakan then()

async function getNumber() {
    return 100;
}

getNumber().then((result) => {
    console.log(result);
});

/*
OUTPUT:

100
*/


// C. Async Arrow Function

const getMessage = async () => {
    return "Belajar Asynchronous JavaScript";
};

getMessage().then((result) => {
    console.log(result);
});

/*
OUTPUT:

Belajar Asynchronous JavaScript
*/


// ==========================================
// 10. AWAIT
// ==========================================

/*
Keyword await digunakan untuk menunggu penyelesaian
sebuah Promise sebelum melanjutkan eksekusi function
asynchronous yang sedang berjalan.

Await menangguhkan function tersebut, bukan memblokir
seluruh eksekusi JavaScript.
*/

function getDataAwait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data berhasil diperoleh");
        }, 2000);
    });
}

async function displayData() {
    const result = await getDataAwait();

    console.log(result);
}

displayData();

/*
OUTPUT SETELAH SEKITAR 2 DETIK:

Data berhasil diperoleh

Penjelasan:
1. getDataAwait() mengembalikan Promise.
2. displayData() menggunakan async.
3. await menunggu Promise selesai.
4. Hasil Promise disimpan ke variabel result.
5. Hasil ditampilkan menggunakan console.log().

Catatan:
Await umumnya digunakan di dalam async function.
JavaScript modern juga mendukung top-level await
pada ES Modules.
*/


// ==========================================
// 11. ERROR HANDLING ASYNC/AWAIT
// ==========================================

/*
try...catch digunakan untuk menangani error ketika
menggunakan Async/Await.

Jika Promise rejected, await akan melempar error
yang dapat ditangkap oleh catch.
*/

// A. Menggunakan try...catch

function getDataError() {
    return new Promise((resolve, reject) => {
        const success = false;

        setTimeout(() => {
            if (success) {
                resolve("Data berhasil diperoleh");
            } else {
                reject("Gagal mengambil data");
            }
        }, 1000);
    });
}

async function displayError() {
    try {
        const result = await getDataError();

        console.log(result);

    } catch (error) {
        console.log("Error:", error);
    }
}

displayError();

/*
OUTPUT:

Error: Gagal mengambil data
*/


// B. Menggunakan try...catch...finally

async function processData() {
    try {
        console.log("Loading...");

        const result = await getDataAwait();

        console.log(result);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Proses selesai");
    }
}

processData();

/*
OUTPUT:

Loading...
Data berhasil diperoleh
Proses selesai

Catatan:
finally tetap dijalankan baik Promise berhasil
maupun mengalami kegagalan.
*/


// ==========================================
// 12. SEQUENTIAL EXECUTION
// ==========================================

/*
Sequential Execution berarti beberapa operasi
asynchronous dijalankan secara berurutan.

Operasi berikutnya baru dimulai setelah operasi
sebelumnya selesai.

Cocok digunakan ketika proses saling bergantung.
*/

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 selesai");
            resolve();
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 selesai");
            resolve();
        }, 2000);
    });
}

async function runSequential() {
    await task1();
    await task2();

    console.log("Semua task selesai");
}

runSequential();

/*
OUTPUT:

Task 1 selesai
Task 2 selesai
Semua task selesai

Estimasi waktu: sekitar 4 detik.

Penjelasan:
1. task1() dijalankan terlebih dahulu.
2. JavaScript menunggu task1() selesai.
3. Setelah selesai, task2() dijalankan.
4. Setelah keduanya selesai, pesan ditampilkan.
*/


// ==========================================
// 13. PARALLEL EXECUTION
// ==========================================

/*
Beberapa operasi asynchronous yang tidak saling
bergantung dapat dimulai bersamaan.

Promise.all() dapat digunakan untuk menunggu
seluruh operasi tersebut selesai.

Dalam konteks ini sering disebut Parallel Execution.
Secara teknis, tidak semua operasi tersebut menjalankan
JavaScript pada beberapa thread secara paralel.
*/

function parallelTask1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 selesai");
            resolve();
        }, 2000);
    });
}

function parallelTask2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 selesai");
            resolve();
        }, 2000);
    });
}

async function runParallel() {
    await Promise.all([
        parallelTask1(),
        parallelTask2()
    ]);

    console.log("Semua task selesai");
}

runParallel();

/*
OUTPUT:

Task 1 selesai
Task 2 selesai
Semua task selesai

Estimasi waktu: sekitar 2 detik.

Penjelasan:
1. Kedua function langsung dipanggil.
2. Kedua timer berjalan tanpa menunggu satu sama lain.
3. Promise.all() menunggu keduanya selesai.
4. Setelah semuanya selesai, pesan ditampilkan.
*/


// ==========================================
// 14. FETCH API
// ==========================================

/*
Fetch API adalah API bawaan JavaScript yang digunakan
untuk melakukan HTTP Request ke server.

Fetch API mengembalikan Promise.

Kegunaannya:
- Mengambil data dari server.
- Mengirim data ke server.
- Mengakses REST API.
- Mengambil data pengguna, produk, dan lainnya.

Contoh endpoint API yang digunakan:

https://jsonplaceholder.typicode.com/users
*/


// A. Mengambil Data Menggunakan fetch()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

/*
Penjelasan:
1. fetch() mengirim HTTP Request ke endpoint.
2. Server memberikan HTTP Response.
3. response.json() membaca body response.
4. Hasil JSON diteruskan ke then() berikutnya.
5. catch() menangani kegagalan request atau proses Promise.

Catatan:
response.json() juga mengembalikan Promise.
*/


// B. Mengambil Data Menggunakan Async/Await

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();

/*
Penjelasan:
1. fetch() mengirim request ke API.
2. await menunggu response diterima.
3. response.json() mengubah body response menjadi data.
4. Data ditampilkan menggunakan console.log().
*/


// C. Mengambil Data Tertentu

async function displayUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        users.forEach((user) => {
            console.log("Nama:", user.name);
            console.log("Email:", user.email);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

displayUsers();

/*
OUTPUT SEBAGIAN:

Nama: Leanne Graham
Email: Sincere@april.biz

Nama: Ervin Howell
Email: Shanna@melissa.tv
*/


// D. Memeriksa HTTP Response Status

/*
PENTING:

fetch() tidak otomatis masuk ke catch() ketika server
memberikan HTTP status error seperti 404 atau 500.

Karena itu, kita perlu memeriksa response.ok.

response.ok:
Bernilai true jika status HTTP berada pada rentang 200-299.

response.status:
Mengembalikan kode status HTTP.
*/

async function getUsersWithStatus() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Terjadi kesalahan:", error.message);
    }
}

getUsersWithStatus();


// ==========================================
// 15. MENGIRIM DATA MENGGUNAKAN FETCH API
// ==========================================

/*
Fetch API tidak hanya digunakan untuk mengambil data.
Kita juga dapat mengirim data ke server.

Properti yang sering digunakan:

method:
Menentukan HTTP Method.

headers:
Menentukan informasi header request.

body:
Berisi data yang akan dikirim ke server.

JSON.stringify():
Mengubah object JavaScript menjadi JSON string.
*/


// A. Mengirim Data Menggunakan POST

async function createUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Felix",
                    email: "felix@example.com"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Data berhasil dikirim:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

createUser();

/*
HTTP METHOD:

GET:
Mengambil data dari server.

POST:
Membuat atau mengirim data.

PUT:
Mengganti data secara keseluruhan.

PATCH:
Memperbarui sebagian data.

DELETE:
Menghapus data.

Catatan:
JSONPlaceholder merupakan API simulasi.
Request POST memberikan response simulasi dan tidak
menyimpan perubahan secara permanen.
*/


// ==========================================
// 16. STUDI KASUS ASYNCHRONOUS JAVASCRIPT
// ==========================================


// A. SIMULASI LOGIN

/*
Membuat simulasi proses login menggunakan Promise.

Jika username dan password sesuai, Promise fulfilled.
Jika tidak sesuai, Promise rejected.
*/

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "felix" && password === "12345") {
                resolve({
                    status: true,
                    message: "Login berhasil",
                    username: username
                });
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

async function processLogin() {
    try {
        console.log("Sedang login...");

        const result = await login("felix", "12345");

        console.log(result);

    } catch (error) {
        console.log("Login gagal:", error);
    }
}

processLogin();

/*
OUTPUT:

Sedang login...

Setelah sekitar 2 detik:

{
    status: true,
    message: "Login berhasil",
    username: "felix"
}
*/


// B. MENGAMBIL BEBERAPA DATA API

/*
Mengambil data users dan posts secara bersamaan
menggunakan Promise.all().

Kedua request tidak saling bergantung.
*/

async function getMultipleData() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error("Gagal mengambil data API");
        }

        const [users, posts] = await Promise.all([
            usersResponse.json(),
            postsResponse.json()
        ]);

        console.log("Users:", users);
        console.log("Posts:", posts);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getMultipleData();

/*
Penjelasan:
1. Dua request API dimulai secara bersamaan.
2. Promise.all() menunggu kedua response selesai.
3. Kedua response dikonversi menjadi JSON.
4. Data users dan posts ditampilkan.

Catatan:
Promise.all() akan rejected jika salah satu Promise
mengalami kegagalan.
*/


// ==========================================
// 17. PERBANDINGAN KONSEP
// ==========================================

/*
SYNCHRONOUS:
Menjalankan instruksi secara berurutan.

ASYNCHRONOUS:
Memungkinkan operasi berjalan tanpa harus menunggu
operasi tersebut selesai.

CALLBACK:
Function yang diberikan sebagai argumen kepada
function lain.

PROMISE:
Object yang merepresentasikan hasil operasi
asynchronous.

THEN():
Menangani hasil Promise yang berhasil.

CATCH():
Menangani error Promise.

FINALLY():
Dijalankan setelah Promise selesai.

ASYNC:
Mendeklarasikan asynchronous function yang
selalu mengembalikan Promise.

AWAIT:
Menunggu penyelesaian Promise di dalam asynchronous
function atau top-level module yang mendukungnya.

TRY...CATCH:
Menangani error pada Async/Await.

FETCH API:
Melakukan HTTP Request ke server.

PROMISE.ALL():
Menunggu beberapa Promise berhasil diselesaikan.

PROMISE.RACE():
Mengambil hasil Promise pertama yang settled.

PROMISE.ALLSETTLED():
Menunggu semua Promise selesai, baik berhasil maupun gagal.

PROMISE.ANY():
Mengambil hasil fulfilled pertama.
*/


// ==========================================
// 18. LATIHAN MANDIRI
// ==========================================

/*
Kerjakan latihan berikut dengan mengisi bagian TODO.

Cobalah menyelesaikan setiap latihan tanpa melihat
solusi terlebih dahulu.
*/


// LATIHAN 1: SETTIMEOUT

/*
Buat program yang menampilkan:

"Proses dimulai"

Kemudian tampilkan:

"Proses selesai"

Setelah 3 detik menggunakan setTimeout().
*/

console.log("Proses dimulai");

// TODO: Tulis kode setTimeout() di sini.



// LATIHAN 2: CALLBACK

/*
Buat function getName() yang menerima nama dan callback.

Setelah nama diproses, jalankan callback untuk
menampilkan pesan sapaan.

Contoh pemanggilan:

getName("Felix", callback);

Target output:
Hello, Felix!
*/

// TODO: Buat function getName() di sini.



// LATIHAN 3: MEMBUAT PROMISE

/*
Buat Promise yang menghasilkan nilai:

"Belajar JavaScript"

Jika kondisi success bernilai true.

Gunakan then() dan catch() untuk menangani hasilnya.
*/

// TODO: Buat Promise di sini.



// LATIHAN 4: PROMISE CHAINING

/*
Buat Promise yang menghasilkan angka 10.

Kemudian:
1. Kalikan hasilnya dengan 2.
2. Tambahkan hasilnya dengan 5.

Gunakan Promise Chaining.

Target output:
10
20
25
*/

// TODO: Tulis kode Promise Chaining di sini.



// LATIHAN 5: ASYNC/AWAIT

/*
Buat function getProduct() yang mengembalikan
Promise berisi object produk setelah 2 detik.

Data produk:
{
    name: "Laptop",
    price: 10000000
}

Gunakan async/await untuk menampilkan hasilnya.
*/

// TODO: Buat function getProduct() di sini.



// LATIHAN 6: ERROR HANDLING

/*
Buat Promise yang menghasilkan reject dengan pesan:

"Gagal mengambil data"

Tangani menggunakan:
- try
- catch
- finally

Target:
Error ditampilkan dan proses selesai.
*/

// TODO: Tulis kode di sini.



// LATIHAN 7: PROMISE.ALL()

/*
Buat tiga Promise dengan waktu penyelesaian berbeda.

Jalankan ketiganya menggunakan Promise.all()
dan tampilkan seluruh hasilnya.

Target:
Semua hasil Promise ditampilkan dalam array.
*/

// TODO: Tulis kode di sini.



// LATIHAN 8: FETCH API

/*
Gunakan Fetch API untuk mengambil data users dari:

https://jsonplaceholder.typicode.com/users

Ketentuan:
1. Gunakan async/await.
2. Periksa response.ok.
3. Konversi response menggunakan response.json().
4. Tampilkan nama dan email setiap pengguna.
5. Gunakan try...catch untuk menangani error.

Target:
10 pengguna beserta nama dan email ditampilkan.
*/

// TODO: Tulis kode di sini.



// ==========================================
// 19. KESIMPULAN
// ==========================================

/*
1. Asynchronous JavaScript memungkinkan operasi
   berjalan tanpa memblokir seluruh eksekusi JavaScript.

2. JavaScript menggunakan Event Loop untuk mengatur
   eksekusi callback asynchronous.

3. Microtask Queue memiliki prioritas lebih tinggi
   daripada Task Queue.

4. Callback merupakan function yang diberikan
   sebagai argumen kepada function lain.

5. Callback Hell dapat membuat kode sulit dikelola.

6. Promise digunakan untuk menangani hasil operasi
   asynchronous.

7. Promise memiliki tiga state:
   Pending, Fulfilled, dan Rejected.

8. then() menangani hasil Promise.

9. catch() menangani error Promise.

10. finally() dijalankan setelah Promise selesai.

11. Promise Chaining digunakan untuk menghubungkan
    beberapa operasi Promise.

12. Promise menyediakan static method:
    all(), race(), allSettled(), dan any().

13. Async digunakan untuk membuat asynchronous function.

14. Await digunakan untuk menunggu penyelesaian Promise.

15. Try...catch digunakan untuk menangani error
    pada Async/Await.

16. Promise.all() dapat digunakan untuk menjalankan
    beberapa operasi asynchronous yang independen
    secara bersamaan.

17. Fetch API digunakan untuk melakukan HTTP Request
    dan berkomunikasi dengan server.

INTI KONSEP:

CALLBACK:
Menjalankan function lain melalui function callback.

PROMISE:
Mengelola hasil operasi asynchronous.

ASYNC/AWAIT:
Menyederhanakan penulisan kode asynchronous.

FETCH API:
Mengambil atau mengirim data melalui HTTP Request.
*/