// Dipanggil lagi untuk dibagian output HTML
const outputNameValue = document.getElementById("outputNameValue");

// ini buat panggil nama yang akan diketikkan dari input
const username = document.getElementById("username");
// username adalah ID dari HTML

// Dipanggil lagi untuk dibagian output HTML
const usernameValue = document.getElementById("usernameValue");

// ini buat panggil tanggal lahir yang akan diketikkan dari input
const born = document.getElementById("born");

// Dipanggil lagi untuk dibagian output HTML
const bornValue = document.getElementById("bornValue");

// ini buat panggil jenis kelamin laki-laki yang akan diketikkan dari input
const lakilaki = document.getElementById("laki-laki");

// Dipanggil lagi untuk dibagian output HTML
const kelaminValue = document.getElementById("kelaminValue");

// ini buat panggil jenis kelamin perempuan yang akan diketikkan dari input
const perempuan = document.getElementById("perempuan");

// Dipanggil lagi untuk dibagian output HTML

// ini buat panggil pesan yang akan diketikkan dari input
const comment = document.getElementById("comment");

// Dipanggil lagi untuk dibagian output HTML
const commentValue = document.getElementById("commentValue");

const currentTimeValue = document.getElementById("current-time");

// Fungsi button submit jika dipencet maka
function Submit() {
  if (username.value != "" && born.value != "" && comment.value != "") {
    usernameValue.innerText = username.value;
    bornValue.innerText = born.value;
    commentValue.innerText = comment.value;
    outputNameValue.innerText = username.value;

    if (lakilaki.checked == true) {
      kelaminValue.innerText = "Laki-laki";
    } else {
      kelaminValue.innerText = "Perempuan";
    }

    // Time
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const dates = currentTime.getDate();
    const months = currentTime.getMonth();
    const years = currentTime.getFullYear();

    currentTimeValue.innerText = `${dates}/${months}/${years} ${hours}:${minutes}:${seconds}`;
  } else {
    alert("Mohon lengkapi data terlebih dahulu!");
  }
}
