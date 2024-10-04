function pilihBahasa(bahasa) {
  if (bahasa === 'JavaScript') {
    console.info('Bahasa dipilih JavaScript');
  } else if (bahasa === 'Python') {
    console.info('Bahasa dipilih Python');
  } else {
    console.info('Bahasa tidak valid');
  }
}

pilihBahasa('Javascript');

function isUserPremium(member, bahasa) {
  const bhs = 'JavaScript';
  const isMember = 'premium';

  if (bahasa === bhs && member === isMember) {
    console.info('Akses materi lanjutan');
  } else {
    console.info('Akses ditolak');
  }
}

isUserPremium('premium', 'JavaScript');

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

function greeting(namaDepan) {
  console.log(namaDepan);
}

greeting('komar');
