console.info('SOAL 4 = User tidak terdaftar dan tidak memiliki email');
// const isUserRegistered = true;

// if (isUserRegistered) {
//   console.info('User terdaftar');
// } else {
//   console.info('Pendaftaran diperlukan');
// }

function isUserRegistered() {
  if (isUserRegistered === true) {
    console.info('User terdaftar');
  } else {
    console.info('Pendaftaran diperlukan');
  }
}

isUserRegistered(false);

console.info('');

console.info('SOAL 7 = User tidak memilih framework React atau Vue');

function pilihFramework(framework) {
  if (framework === 'React' || framework === 'Vue') {
    console.info('User memilih ' + framework);
  } else {
    console.info('Framework belum dipilih');
  }
}

pilihFramework('react');
