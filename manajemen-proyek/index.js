const form = document.getElementById('form');
const proyek = document.getElementById('proyek');
const namaProyek = document.getElementById('namaProyek');
const totalProyek = document.getElementById('totalProyek');

function manajemenProyek() {
  const hasilProyek = parseInt(proyek.value);

  if (proyek > 10) {
    console.info('Portofolio penuh');
    alert('Portofolio penuh');
  } else if (proyek < 1) {
    alert('Tidak ada proyek yang dikerjakan');
  } else {
    console.info('Portofolio kurang');
    alert('Portofolio kurang');
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  manajemenProyek();
});
