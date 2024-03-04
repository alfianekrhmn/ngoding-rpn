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
let peran = "";
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

*/