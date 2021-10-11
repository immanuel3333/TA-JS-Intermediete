/*
Soal - 04
Kamu diminta untuk membuat sebuah website yang mana akan menampilkan GitHub user, berikut adalah deskripsi dari program yang akan kalian buat:

buatlah file dengan nama 04-asynchronous.html dan 04-asynchronous-dom.js
copy and paste baris kode dibawah sesuai dengan file yang telah ditentukan
user akan memasukan username GitHub yang ingin dicari melalui GitHub API

Berikut merupakan langkah-langkah pengerjaan yang dapat kalian ikuti:

copy and paste fungsi yang sudah kalian buat pada soal-03 kedalam file 04-asynchronous-dom.js
ambil data dari form "username" serta jangan lupa untuk menggunakan preventDefault untuk mencegah agar jendela browser tidak terjadi refresh
setelah kita mengambil data "username", kita akan mengambil GitHub user menggunakan GitHub API

*/

const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (USERNAME) => {
  try {
    const users = await fetch(`https://api.github.com/users/${USERNAME}`);
    const json = await users.json();
    const data = await json;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();
  let input = elFormUsername.firstElementChild.value;
  console.log(input);
  let data = await getGitHubUser(input);

  alert(
    "Kak, kalo mau cek read more, bukanya lewat open in new tab, yang di samping icon pencil, kalo di replit langsung error"
  );

  if (data.login) {
    elCardImg.classList.remove("d-none");
    elCard.classList.remove("d-none");
    elCardBtn.classList.remove("d-none");
    elCardTitle.innerText = data.login;
    elCardImg.src = data.avatar_url;
    elCardBtn.href = data.html_url;

    elFormUsername.firstElementChild.value = "";
    return elCard;
  } else {
    elCardImg.classList.add("d-none");
    elCardBtn.classList.add("d-none");
    elCardTitle.innerText = `Not Found`;

    return elCard;
  }
  // console.log("notfound");

  //   console.log(data.login);
};
