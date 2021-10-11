/*
Soal - 03
Kamu diminta untuk membuat sebuah class dengan spesifikasi sebagai berikut:
class tersebut benama Phone
memiliki 3 properties yaitu:
brand: String
storage: Number
ram: Number
memiliki 4 method yaitu:
getBrandName [String] => akan mendapatkan isi dari field brand
setBrandName [void] => akan mengubah nilai dari field brand
printSpecification [void] => mencetak spesifikasi dari ponsel tersebut dengan format "Ponsel ini memiliki storage: $STORAGE dan ram: $RAM"
setSpecification [void] => akan mengubah nilai dari field storage dan ram
*/

class Phone {
  constructor(brand, storage, ram) {
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
  getBrandName() {
    return this.brand;
  }

  setBrandName(a) {
    this.brand = a;
  }
  printSpecification() {
    console.log(
      `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
    );
  }
  setSpecification(b, c) {
    this.storage = b;
    this.ram = c;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();
