/*
Soal - 02
Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

memiliki 1 parameter:
arr [Array of Number] => array 1 dimensi dengan nilai Number
return value [Number] total angka yang melebihi nilai rata-rata
*/
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  let avr = total / arr.length;
  let j = 0;
  let c = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > avr) {
      c.push(arr[j]);
    }
  }
  return c;
}
// console.log(getAverage(arr1).length);
console.log(
  "Ada " +
    getAverage(arr1).length +
    " bilangan yang melebihi rata-rata yaitu " +
    getAverage(arr1)
);
console.log(
  "Ada " +
    getAverage(arr2).length +
    " bilangan yang melebihi rata-rata yaitu " +
    getAverage(arr2)
);
