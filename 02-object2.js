/*
Soal - 02
Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan sebuah nilai berdasarkan struktur Object, fungsi tersebut memiliki spesifikasi sebagai berikut:

2 Parameter
obj Object => object yang akan kita ambil value-nya
path String => letak dari nilai yang ingin kita ambil
return value
apabila kita tidak dapat menemukan field yang dituju, maka kita akan mengembalikan null
apabila kita menemukan menemukan field yang dituju maka kita akan mengembalikan value dari field tersebut
*/

function getObjectValue(obj, p) {
  const path = p.split(".");
  let result = obj;
  for (let i = 0; i < path.length; i++) {
    if (result === null) {
      break;
    }
    const activeVal = path[i];
    const activeObj = result[activeVal];
    if (activeObj !== undefined) {
      result = activeObj;
    } else {
      result = null;
    }
  }
  return result;
}
const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1,
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5,
    },
  },
};

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(
  milkBasedCoffee,
  "ingredients.espresso.brand"
);
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);
