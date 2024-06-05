function angkaPrima(angka) {
  // menbuat variable isPrime dengan nilai True
  let isPrime = true
  // memeriksa jika angka lebih besar dari 1
    if(angka > 1){
      // membuat iterasi dari 2 hingga kurang dari angka
      for(let i = 2; i < angka; i++){
        // memeriksa apakah angka habis dibagi 1
        if(angka % i === 0){
          // jika ya, maka bukan bilangan prima
          isPrime = false
          // keluar dari loop
          break
        }
      }
      // memeriksa apakah isPrime masih bernilai True
      if(isPrime){
        // jika ya, maka angka bernilai bilangan prima
        return true
      }else{
        // jika tidak, maka angka bukan bilangan prima
        return false
      }
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false  

  function fpb(angka1, angka2) {
    // loop akan terus berjalan selama angka2 bukan nol
    while(angka2 !== 0) {
      // simpan sisa bagi dari angka1 dan angka2 ke variable sementara
      let temp = angka1 % angka2
      // ganti nilai angka1 jadi angka2
      angka1 = angka2
      // ganti nilai angka2 jadi nilai sementara
      angka2 = temp
    }
    // ketika angka2 jadi nol maka, angka1 adalah fpbnya
    return angka1
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1

  function cariMedian(arr) {
    // jika panjang arraynya adalah ganjil
    if(arr.length % 2 === 1){
      // maka buat variable untuk mencari index 
      let arr1 = arr.length - 1
      // buat variable untuk mencari index array ke
      let panjangArr = Math.ceil(arr1 / 2)
      // buat variable ketika sudah menemukan nilai tengahnya
      let nilaiTengah = arr[panjangArr]
      // mengembalikan variable nilaiTengah
      return nilaiTengah
      // jika panjang array adalah genap
    }else if(arr.length % 2 === 0){
      // mencari nilai tengah pertama
      let nilaiTengah1 = (arr.length / 2) - 1
      // mencari nilai tengah kedua
      let nilaiTengah2 = arr.length / 2
      // setelah menemukannya maka langsung dijumlahkan dan dibagi 2, lalu di kembalikan
      return (arr[nilaiTengah1] + arr[nilaiTengah2]) / 2
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([6, 7, 8, 9, 10])); // 8
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
   
  function cariModus(arr) {
    // Deklarasikan variabel `jumlah` dengan nilai 1 untuk melacak jumlah kemunculan tertinggi
    // Deklarasikan variabel `modus` dengan nilai -1 sebagai nilai default jika tidak ditemukan modus
    // Deklarasikan variabel `jumlahSementara` untuk melacak jumlah kemunculan elemen saat ini
    let jumlah = 1
    let modus = -1
    let jumlahSementara = 0

    // Loop pertama untuk iterasi melalui setiap elemen dalam array
    for (let a = 0; a < arr.length; a++) {
        // Reset `jumlahSementara` menjadi 1 untuk elemen saat ini
        jumlahSementara = 1
        
        // Loop kedua untuk membandingkan elemen saat ini dengan elemen lainnya dalam array
        for (let b = a + 1; b < arr.length; b++) {
            // Jika elemen saat ini sama dengan elemen lainnya, tambahkan `jumlahSementara`
            if (arr[a] == arr[b]) {
                jumlahSementara += 1
            }
        }

        // Jika `jumlahSementara` lebih besar dari `jumlah`, perbarui `jumlah` dan `modus`
        if (jumlah < jumlahSementara) {
            jumlah = jumlahSementara
            modus = arr[a]
        }
    }

    // Jika `jumlah` sama dengan 1 (semua elemen unik) atau sama dengan panjang array (semua elemen sama), kembalikan -1
    if (jumlah == 1 || jumlah == arr.length) {
        return -1
    } else {
        // Jika tidak, kembalikan `modus`
        return modus
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1



  function ubahHuruf(kata) {
    // Buat variable alphabet a-z
    let alphapet = `abcdefghijklmnopqrstuvwxyz`
    // buat variable untuk menemukan index dari variable kata
    let panjangKata = kata.length - 1
    // Buat variable hasil
    let result = ``
    // looping untuk mengeluarkan kata
    for(let i = 0; i <= panjangKata; i++){
      // looping untuk mengeluarkan alphabet
      for(j = 0; j <= alphapet.length - 1; j++){
        // membuat perbandingan loopingan kata dengan alphabet ada yang sama
        if(kata[i] === alphapet[j]){
          // tambahkan karakter berikutnya kedalam variable result 
          result += alphapet[j+1]
        }
      }
    }
    // mengembalikan hasil akhirnya
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu