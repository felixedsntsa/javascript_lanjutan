// template literal
// template literal adalah string literal yang memungkinkan adanya expression di dalamnya

// string literal
// let nama = 'Felix';
// let nim = "232410101050"
// let email = `felix@gmail.com`

// menggunakan back-tick
// Multi-line string
// console.log(`string 1
//             string 2`);
// embedded expresiion
// html fragments
// expression interpolation
// tagged template

// const nama = 'Felix';
// let umur = 21;
// console.log(`Halo, nama saya ${nama} dan saya berumur ${umur} tahun`);

// console.log(`${alert('halo!')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

const mhs = {
    nama: 'Felix',
    umur: 21,
    nim: '232410101050',
    email: 'felix@gmail.com'
};

let el = `<div class="mhs">
            <h2>${mhs.nama}</h2>
            <span class="nim">${mhs.nim}</span>
        </div>`;

console.log(el);

