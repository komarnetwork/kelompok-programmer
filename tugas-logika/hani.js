console.info('SOAL 1 = Akses Login');
console.log(
  'Soal: Seorang pengguna hanya bisa login jika username dan password benar. Tampilkan pesan "Login berhasil" atau "Login gagal".\n'
);

const correctUsername = 'admin';
const correctPassword = 'secret';

const userName = 'admin';
const passWord = 'secret';

if (userName === correctUsername && passWord === correctPassword) {
  console.info('Login berhasil');
} else {
  console.info('Login gagal');
}

// const correctUsername = 'admin';
// const correctPassword = 'secret';

// function login(username, password) {
//   if (username === correctUsername && password === correctPassword) {
//     console.info('Login berhasil');
//   } else {
//     console.info('Login gagal');
//   }
// }

// login('admin', 'secret2');
