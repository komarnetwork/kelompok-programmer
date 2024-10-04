console.info('SOAL 6 = Logika user penilaian diatas 80');
console.log(
  'Soal: Buat logika untuk mengecek apakah pengguna telah menyelesaikan semua tugas kursus dengan nilai di atas 80, lalu tampilkan pesan keberhasilan.'
);

// const tugasKursus = 80;

// if (tugasKursus >= 80) {
//   console.info('User dinyatakan LULUS');
// } else {
//   console.info('User dinyatakan GAGAL');
// }

//Soal 6: Buat logika untuk mengecek apakah pengguna telah menyelesaikan semua tugas kursus dengan nilai di atas 80, lalu tampilkan pesan keberhasilan.

// Buat variabel tugas
const tugas1 = 85;
const tugas2 = 95;
const tugas3 = 80;

// Pengkondisian dimana nilai masing masing tugas harus melebihi 80
if (tugas1 > 80 && tugas2 > 80 && tugas3 > 80) {
  console.log('Selamat anda lulus');
} else {
  console.log('Silahkan coba lagi!');
}

// Menggunakan Function
function nilaiTugas(tugas1, tugas2, tugas3) {
  // Pengkondisian dimana nilai masing masing tugas harus melebihi 80
  if (tugas1 > 80 && tugas2 > 80 && tugas3 > 80) {
    console.log('Selamat anda lulus (pakai function)');
  } else {
    console.log('Silahkan coba lagi! (pakai function)');
  }
}

// Jalan function dengan memasukkan nilai ke dalam parameter/ wadah yang telah disediakan dalam function nilaiTugas
nilaiTugas(81, 82, 83);
