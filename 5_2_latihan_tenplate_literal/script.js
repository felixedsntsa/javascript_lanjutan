
/* LATIHAN TEMPLATE LITERAL */

// ==========================================
// 1. HTML FRAGMENT
// ==========================================

// const mhs = {
//     nama: 'Felix',
//     umur: '21',
//     nim: '123',
//     email: 'felix@gmail.com'
// };

// const el = `<div class="mhs">
//                 <h2>${mhs.nama}</h2>
//                 <span class="nim">${mhs.nim}</span>
//                 <p>${mhs.umur} tahun</p>
//                 <p>${mhs.email}</p>
//             </div>`;

// document.body.innerHTML = el;


// ==========================================
// 2. LOOPING
// ==========================================

// const mhs1 = [
//     {
//         nama: 'Felix',
//         umur: '21'
//     },
//     {
//         nama: 'Budi',
//         umur: '22'
//     },
//     {
//         nama: 'Siti',
//         umur: '20'
//     }
// ];

// const el = `<div class="mhs-list">
//     ${mhs1.map(m => `<ul>
//         <li>Nama: ${m.nama}</li>
//         <li>Umur: ${m.umur}</li>
//     </ul>`).join('')}
// </div>`;

// document.body.innerHTML = el;


// ==========================================
// 3. CONDITIONAL (TERNARY)
// ==========================================

/*
const lagu = {
    judul: 'tetap dalam jiwa',
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
};

const el = `<div class="lagu">
    <h2>${lagu.judul}</h2>
    <p>Oleh: ${lagu.penyanyi}
    ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</p>
</div>`;

document.body.innerHTML = el;
*/


// ==========================================
// 4. NESTED HTML FRAGMENTS
// ==========================================

const mhs = {
    nama: 'Felix',
    semester: '5',
    matakuliah: [
        'pweb',
        'ppl',
        'sbd'
    ]
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <p>Semester: ${mhs.semester}</p>

    <h3>Mata Kuliah:</h3>
    <ol>
        ${mhs.matakuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
</div>`;

document.body.innerHTML = el;
