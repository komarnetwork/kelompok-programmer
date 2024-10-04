// jika pengguna tidak memilih framework seperti react atau vue maka tampilkan pesan "Framework belum dipilih"
let react = true;
let vue = false;

memilih = react || vue;
console.log('Apakah anda sudah memilih framework?');

if (memilih) {
  console.log('Kamu sudah memilih Frame work');
} else {
  console.log('Kamu belum memilih framework');
}
