// logic untuk menentukan kategori
let macamUmur = [10,6,65,24,32,50,17]
let kategoriUmur = {
    'Anak-Anak' : 0,
    'Remaja' : 0,
    'Dewasa' : 0,
    'Lansia' : 0
}

function kelompokUmur(umur){
    if(umur<=12){
        kategoriUmur['Anak-Anak']++; //agar kuantitas setiap kategori umurnya bertambah
    } else if (umur>12 && umur<=17){
        kategoriUmur['Remaja']++;
    } else if (umur>17 && umur<=59){
        kategoriUmur['Dewasa']++;
    } else {
       kategoriUmur['Lansia']++;
    }
}

for (let umur of macamUmur) { //ini buat ngeluarain semua variable yang ada di macamUmur di kelurain satu" pake loop for
    kelompokUmur(umur); // buat jalanin function kelompokUmur dengan parameter umur dari hasil loop diatas

}
  
//console.log kategoriUmur
for (let kat in kategoriUmur){
    console.log(`${kat}: ${kategoriUmur[kat]} orang`)
}