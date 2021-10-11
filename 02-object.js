/*
Soal - 01
Kamu diminta untuk mengikuti instruksi dibawah dengan seksama:

ubah field name pada variable person menjadi namamu sendiri
ubah field favDrinks yang berisi "temulawak" menjadi "tap water"
ubah field greeting menjadi sebuah fungsi, dengan spesifikasi
memiliki 1 parameter
name [String] => nama seseorang yang akan disapa
return value [String] => akan mengembalikan sebuah String dengan format "Hello, $NAME"
*/
const person = {
  name: "person A",
  age: 100,
  favDrinks: ["coffee", "jamu temulawak", "tea"],
  greeting: function () {
    console.log("hello world");
  },
};

/// EDIT HERE
person.name = "Immanuel";
person.favDrinks[1] = "tap water";
person.greeting = function (name) {
  console.log("Hello " + name);
};

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));
