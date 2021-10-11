/*
Soal - 02
Pada soal sebelumnya kamu diminta untuk membuat sebuah fungsi untuk mencari total sebuah "array of number", pada soal kali ini kamu diminta untuk membuat sebuah fungsi yang mana akan memberikan jumlah angka yang nilainya melebihi nilai rata-rata. Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikan masalah tersebut:

pastikan bahwa array yang kalian gunakan pada soal-01 dan soal-02 itu identik atau sama
cari nilai rata-rata menggunakan fungsi yang sudah kalian buat pada soal-01
buat sebuah funsi yang mana memiliki 2 parameter
arr [Array] => array of number
avg [Number] => nilai rata-rata
fungsi pada soal-2 akan melakukan checking terhadap tiap-tiap nilai apakah ia melebihi nilai rata-rata atau tidak
langkah terakhir adalah mengembalikan jumlah dari nilai yang melebihi nilai rata-rata
*/

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
  if (arr.length === 0) {
    return 0;
  }
  return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);
