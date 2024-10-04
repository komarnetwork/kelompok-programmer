console.info('SOAL 4 = Akses Login');
console.log(
  'Soal: Buat kondisi yang memeriksa jika pengguna belum terdaftar dan tidak memiliki email, tampilkan "Pendaftaran diperlukan".'
);

let emailTerdaftar = true;
let emailTidak = true;

terpenuhi = emailTerdaftar && emailTidak;
console.log('apakah email terdaftar dan premium?');

if (terpenuhi) {
  console.log('Email terdaftar dan memiliki akses ');
} else {
  console.log('Pendaftafan diperlukan');
}
