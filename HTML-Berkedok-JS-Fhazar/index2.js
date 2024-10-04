function login(username, password) {
  console.log(username, password);
  const usernameBenar = 'admin'
  const passwordBenar = 'secret'
  if (username === usernameBenar && passwordBenar === password) {
    console.log("Login Berhasil")
  } else {
    console.log("Login Gagal")
  }

}

login('admin', "secret");