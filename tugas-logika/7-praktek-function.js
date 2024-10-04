//let react = false
//let vue   = false

//memilih = react || vue
//console.log('Apakah anda sudah memilih framework?')

//if(memilih){
//console.log('Kamu sudah memilih Frame work')
//}
//else {
//console.log('Kamu belum memilih framework')
//}

//Soal: Jika pengguna tidak memilih framework (seperti React atau Vue), tampilkan pesan "Framework belum dipilih"

function pemrograman(framework) {
  if (framework === 'react') {
    console.log('Framework terpilih ' + framework);
  } else if (framework === 'vue') {
    console.log('Framework terpilih');
  } else {
    console.log('Framework belum diplilih');
  }
}

pemrograman('');
