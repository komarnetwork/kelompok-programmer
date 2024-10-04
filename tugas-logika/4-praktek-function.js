function login(email) {
  if (email === true) {
    console.log('Email terdaftar');
  } else if (email === false) {
    console.log('Pendaftaran diperlukan');
  }
}

login(false);
