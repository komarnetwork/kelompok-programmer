// console.info('SOAL 8 = User memilih minimal dua framework');

// const frameworks = ['React', 'Vue']; // Pilih frameworknya

// if (frameworks.length >= 2) {
//   // User memilih minimal dua framework
//   console.info('Framework sudah dipilih');
// } else {
//   // User tidak memilih minimal dua framework
//   console.info('Framework harus dipilih minimal dua');
// }

/*Buat kondisi di mana pengguna perlu memilih minimal dua bahasa pemrograman
         untuk mendapatkan akses, tampilkan pesan "Bahasa sudah dipilih".*/

// variable berisi boolean
let javaScript = true;
let python = true;
let cpp = true;
let proses = 0;

// pengkondisian penambahan proses
if (javaScript) {
  proses++;
} else if (python) {
  proses++;
}

// pengkondisian proses hasil
if (proses == 2) {
  console.log('Akses Berhasil! Bahasa Sudah Dipilih.');
} else {
  console.log('Akses Gagal! Pilih Minimal 2 Bahasa.');
}
