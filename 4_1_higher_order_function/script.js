// higher order function

// function yang beroperasi pada function yang lain baik itu digunakan dalam argument, maupun sebagai return value
// javascript memperlakukan function sebagai object

// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
//     selesai();
// }

// function selesai() {
//     alert('Selesai mengerjakan tugas!');
// }

// kerjakanTugas('ppl', selesai);

// abstraksi
// semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya.
// ada dua cara untuk merancang sebuah software. Cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas jelas tidak ada kekurangannya, dan cara lainnya adalah utnuk membuat programnya se kompleks mungkin sehingga tidak ada kekurangan yang jelas.

let total = 0; count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

// vs

console.log(sum(range(1, 10)));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog (n) {
    for (let i = 0; i < n; I++) {
        console.log(i);
    }
}

repeatLog(10);

function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    } 
}

repeat(10, console.log);
repeat(3, alert);

// contoh higher order function
// Array.prorotype.map()
// Array.prorotype.filter()
// Array.prorotype.reduce()