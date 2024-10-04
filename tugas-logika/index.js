console.info('SOAL 1 = Akses Login');
const correctUsername = 'admin';
const correctPassword = 'secret';

function login(username, password) {
  if (username === correctUsername && password === correctPassword) {
    console.info('Login berhasil');
  } else {
    console.info('Login gagal');
  }
}

login('admin', 'secret2');

// CARA LAIN
console.info('SOAL 1 = Akses Login');

// const correctUsername = 'admin';
// const correctPassword = 'secret';

// const userName = 'admin';
// const passWord = 'secret1';

// if (userName === correctUsername && passWord === correctPassword) {
//   console.info('Login berhasil');
// } else {
//   console.info('Login gagal');
// }

console.info('');

console.info('SOAL 2 = Pilihan Bahasa');
const language = 'Python'; // Pilih bahasanya

if (language === 'JavaScript') {
  console.info('Bahasa dipilih JavaScript');
} else if (language === 'Python') {
  console.info('Bahasa dipilih Python');
} else {
  console.info('Bahasa tidak valid');
}

console.info('');

console.info('SOAL 3 = Memilih JavaScript dan memiliki akun premium');
const isUserPremium = true;

if (language === 'JavaScript' && isUserPremium) {
  console.info('Akses Lanjutan');
} else {
  console.info('Akses Ditolak');
}

console.info('');

console.info('SOAL 4 = User tidak terdaftar dan tidak memiliki email');
const isUserRegistered = true;

if (isUserRegistered) {
  console.info('User terdaftar');
} else {
  console.info('Pendaftaran diperlukan');
}

console.info('');
console.info('SOAL 5 = User memiliki lebih dari 10 proyek');

const projectCount = 11;

if (projectCount >= 10) {
  console.info('Portofolio penuh');
} else {
  console.info('Portofolio kosong, kurang dari 10');
}

console.info('');
console.info('SOAL 6 = Logika user penilaian diatas 80');
const tugasKursus = 80;

if (tugasKursus >= 80) {
  console.info('User dinyatakan LULUS');
} else {
  console.info('User dinyatakan GAGAL');
}

console.info('');
console.info('SOAL 7 = User tidak memilih framework React atau Vue');
const framework = 'React'; // Pilih frameworknya

if (framework === 'React' || framework === 'Vue') {
  console.info('User memilih ' + framework);
} else {
  console.info('Framework belum dipilih');
}

console.info('');
console.info('SOAL 8 = User memilih minimal dua framework');

const frameworks = ['React', 'Vue']; // Pilih frameworknya
const minFramework = 2;

if (frameworks.length * 1 >= minFramework) {
  // User memilih minimal dua framework
  console.info('Framework sudah dipilih');
} else {
  // User tidak memilih minimal dua framework
  console.info('Framework harus dipilih minimal dua');
}

console.info('');
console.info('SOAL 9 = User memilih lebih dari satu bahasa');

const languages = ['JavaScript', 'Python']; // Pilih bahasanya
const minBahasa = 1;

if (languages.length * 1 > minBahasa) {
  // User memilih lebih dari satu bahasa
  console.info('Pilihan Ganda');
} else {
  // User tidak memilih lebih dari satu bahasa
  console.info('Pilih minimal satu');
}

// Periksa apakah user adalah admin dan telah berkontribusi di lebih dari 5 proyek, lalu tampilkan pesan dengan menggunakan template string.

console.info('');
console.info(
  'SOAL 10 = User login sebagai admin dan telah mengikuti lebih dari 5 proyek'
);

const isUserAdmin = false;
const jumlahProject = 4;

if (isUserAdmin === true && jumlahProject >= 5) {
  console.info('User Admin dinyatakan TELAH mengikuti lebih 5 proyek');
} else if (isUserAdmin === true && jumlahProject < 5) {
  console.info('User Admin dinyatakan BELUM mengikuti 5 proyek');
} else if (isUserAdmin === false && jumlahProject < 5) {
  console.info(
    'User bukan Admin dinyatakan BELUM mengikuti kurang dari 5 proyek'
  );
} else if (isUserAdmin === false && jumlahProject >= 5) {
  console.info('User bukan Admin dan TELAH mengikuti lebih kurang 5 proyek');
}
