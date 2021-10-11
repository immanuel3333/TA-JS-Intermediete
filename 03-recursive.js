/*
Soal - 01
Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

fungsi harus ditulis menggunakan recursive
memiliki 1 parameter:
arr [Array] => array of number yang nanti kita akan cari jumlahnya
return value [Number] => nilai kembalian berupa sebuah Number
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const nilai = arr[0];
  return nilai + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));
