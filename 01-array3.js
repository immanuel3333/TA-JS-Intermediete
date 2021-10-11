/*
Soal - 03
Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:

memiliki 2 parameter:
arr [Array] => array multi dimensi yang akan kita proses
num [Number] => angka yang ingin kita cari
return value [Number]
fungsi akan mengembalikan null apabila angka yang dicari tidak ditemukan
fungsi akan mengembalikan index dari angka yang dicari
Langkah-langkah pengerjaan:

karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
apabila kita tidak menemukan nilai tersebut maka kembalikan null
dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)
*/
function flatten(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}
const arr = flatten([[10], [9, 7, 1], [2, 8]]);
// console.log(c); //![ 10, 9, 7, 1, 2, 8 ]

function searchInArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      let d = arr.indexOf(arr[i]);
      return d;
    }
  }
}

// console.table(arr);
// console.log(arr[1]);
console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
