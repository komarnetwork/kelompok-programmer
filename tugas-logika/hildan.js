// console.info('SOAL 3 = Akses Materi Lanjutan');
// console.log(
//   'Soal: Jika pengguna memilih JavaScript dan memiliki akun premium, tampilkan "Akses materi lanjutan". Jika salah satu tidak terpenuhi, tampilkan "Akses ditolak".'
// );

// //Deklarasi variabel
// const javaScript = true;
// const premium = true;

// //pengecekan premium
// if (javaScript && premium) {
//   console.info('Akses materi lanjutan');
// } else {
//   console.warn('Akses ditolak');
// }

// Jika pengguna memilih lebih dari satu bahasa tampilkan pilihan ganda jika tidak tampilkan pilih minimal satu
// Deklarasi variable
const javascript = false;
const python = false;
const cpp = false;
let proses = 0;

//Logika untuk menghitung pilihan
if (javascript) {
  proses++;
}
if (python) {
  proses++;
}
if (cpp) {
  proses++;
}

//pengecekan berapa banyak yang di pilih
if (proses > 1) {
  console.log('Pilihan ganda');
} else if (proses == 1) {
  console.log('anda telah memilih ' + proses);
} else {
  console.warn('Pilih minimal satu');
}
