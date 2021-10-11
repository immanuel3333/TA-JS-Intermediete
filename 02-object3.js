/*
Kamu adalah seorang trader pemula, dan karna memiliki background IT kamu ingin membuat sebuah fungsi calculateIncome untuk mendapatkan nilai dari keuntungan yang dapat kita peroleh dengan rumus [sum of (sell - buy)] untuk setiap koin yang tersedia

Gunakan code template yand diberikan untuk menyelesaikan masalah
Dilarang untuk mengubah nama variable atau function yang sudah tersedia didalam code template
Segala perubahan hanya dapat dilakukan didalamm fungsi calculateIncome
Hasil haruslah sesuai dengan expektasi yang diberikan
Langkah-langkah pengerjaan:

hitung keuntungan yang kita hasilkan dari tiap-tiap koin dengan cara (sell - buy)
ulangi langkah pertama, hingga kita selesai menghitung seluruh history transaksi yang ada (dalam contoh ini kita ada 3 buah history dari hari 1, 2, dan 3)
jumlahkan seluruh keuntungan yang kita buat selama 3 hari berdasarkan koin yang kita gunakan
rangkuman dari pendapatan kita HARUS berupa sebuah object
pengerjaan harus menggunakan built-in method reduce
*/

const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE

  return items.reduce(
    (acc, cur) => {
      const btcSum = cur.btc.sell - cur.btc.buy;
      const dogeSum = cur.doge.sell - cur.doge.buy;
      const ethSum = cur.eth.sell - cur.eth.buy;

      return {
        btc: acc.btc + btcSum,
        doge: acc.doge + dogeSum,
        eth: acc.eth + ethSum,
      };
    },
    {
      btc: 0,
      doge: 0,
      eth: 0,
    }
  );
};

console.log(calculateIncome(items));
