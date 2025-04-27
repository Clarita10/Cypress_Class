// fungsi readline
const readline = require('readline');

// Membuat interface untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// logic pilihan opsi operasi menggunakan if else
// function kalkulator(angka1,angka2,opsi){
//     if (opsi === 1){
//         return angka1 + angka2;
//     } else if (opsi === 2){
//         return angka1 - angka2;
//     } else if (opsi === 3){
//         return angka1 * angka2;
//     } else if (opsi === 4){
//         if (angka1 === 0 || angka2 === 0){
//             return "Infinity"
//         } else{
//             return angka1 / angka2;
//         }
//     }
//     else{
//         return "Pilihan Tidak Tersedia"
//     }
// }

// logic hitung menggunakan switch
function kalkulator (angka1,angka2, opsi){
    switch(opsi){
        case 'penjumlahan':
            return angka1 + angka2;
        case 'pengurangan':
            return angka1 - angka2;
        case 'perkalian':
            return angka1 * angka2;
        case 'pembagian':
            return angka1 === 0 || angka2 === 0 ? 'Infinity' : angka1 / angka2; //kondisi ? hasilJikaTrue : hasilJikaFalse;
        default:
            return 'Operasi Tidak Dikenali'
    }
}


// console log untuk menampilkan pilihan
console.log('Pilih operasi:');
console.log('1. Penjumlahan');
console.log('2. Pengurangan');
console.log('3. Perkalian');
console.log('4. Pembagian');

// mengambil inputan dari user
rl.question('Operasi (Kata): ', (inputOperasi) => {
    operasi = inputOperasi.toLowerCase();

    rl.question('Angka 1 (2 Angka): ', (angka1) => {
        angka1 = parseFloat(angka1); // Mengubah input menjadi angka desimal

        rl.question('Angka 2: (2 Angka) ', (angka2) => {
            angka2 = parseFloat(angka2); // Mengubah input menjadi angka desimal

            // menghitung hasil kalkulator
            let hasil = kalkulator(angka1, angka2, operasi).toFixed(2);

            let namaOpsi = ''; //var untuk menampung inputan user

            //mengatur pilihan user
            // switch(pilihOpsi){
            //     case 1:
            //         namaOpsi = 'Penjumlahan'
            //         break;
            //     case 2:
            //         namaOpsi = 'Pengurangan'
            //         break;
            //     case 3:
            //         namaOpsi = 'Perkalian'
            //         break;
            //     case 4:
            //         namaOpsi = 'Pembagian'
            //         break;
            //     default:
            //         namaOpsi = 'Pilihan Tidak Tersedia'
            // }

            // output kalkulasi
            // console.log(`\nOperasi: ${namaOpsi}`);
            // console.log(`Angka 1: ${angka1}`);
            // console.log(`Angka 2: ${angka2}`);
            console.log(`Hasil: ${hasil}`);

            rl.close(); // Menutup interface readline setelah selesai
        });
    });
});