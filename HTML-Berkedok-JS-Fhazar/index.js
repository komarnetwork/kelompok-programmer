console.info('SOAL 5');
console.info(
  'Soal: Jika pengguna memiliki lebih dari 10 proyek di portfolio mereka, tampilkan "Portofolio penuh".'
);

function proyek(num) {
  if (num > 10) {
    console.info('Portofolio penuh');
  } else {
    console.info('Portofolio kurang');
  }
}

proyek(9);
