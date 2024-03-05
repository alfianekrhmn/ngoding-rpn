console.log(`nomor 1`)
/*
program roleplay
1. masukan nama anda kedalam program
2. bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
3. setelah memasukan nama, pastikan pilih role mana yang mau kamu mainkan.
4. dalam pilihan tersebut tersedia Ksatria, Tabib, dan Penyihir. 
5. kalau kamu tidak memasukan role kamu, responnya akan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/
let nama = "Alfian";
let peran = "Ksatria";
if(nama == "") 
{
    console.log(`nama wajib diisi`);
}else if(peran == "Ksatria")
{
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
}else if(peran == "Tabib")
{
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
}else if(nama == "Penyihir")
{
console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
);
}
else if(peran == "")
{
    console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}

console.log(`nomor 2`);
/*
1. user memasukan hari, lalu bulan dan terakhir tahun
2. setelah semuanya dimasukan, jika isi dari variabel bulan adalah 1 maka outputnya adalah Januari dan begitu juga seterusnya
3. lalu semuanya akan menghasilkan 21 Januari 1945
*/

let hari = 21;
let bulan = 1;
let tahun = 1945;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
}

console.log(`${hari} ${bulan} ${tahun}`)