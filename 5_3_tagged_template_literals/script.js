// Tagged template Literals

// Bentuk yang lebih kompleks dari tenmplate literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// const nama = 'Felix';
// const umur = '21';

// function coba(strings, ...values) {
//     // let str = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama} umur saya ${umur} tahun`
// console.log(str);

// highlight

const nama = 'Felix';
const umur = '21';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama} umur saya ${umur} tahun`
console.log(str);

document.body.innerHTML = str;