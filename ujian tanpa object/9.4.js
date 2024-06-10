function urutkanAbjad(str) {
  // Pisahkan string menjadi array karakter
  let pisahString = str.split('');

  // Loop pertama untuk mengontrol jumlah iterasi
  for(let i = 0; i < pisahString.length; i++) {
    // Loop kedua untuk membandingkan elemen-elemen yang berdekatan
    for(let j = 0; j < (pisahString.length - i - 1); j++) {
      // Jika elemen saat ini lebih besar dari elemen berikutnya, tukar posisi
      if(pisahString[j] > pisahString[j + 1]) {
        let temp = pisahString[j];
        pisahString[j] = pisahString[j + 1];
        pisahString[j + 1] = temp;
      }
    }
  }

  // Gabungkan array kembali menjadi string
  return pisahString.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

  

function tukarBesarKecil(kalimat) {
  let result = '';

  // Loop melalui setiap karakter dalam string 'kalimat'
  for (let i = 0; i < kalimat.length; i++) {
    let char = kalimat[i];
    
    // Jika karakter adalah huruf besar, ubah menjadi huruf kecil
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      // Jika karakter adalah huruf kecil, ubah menjadi huruf besar
      result += char.toUpperCase();
    }
  }
  
  return result; // Kembalikan hasil akhir string dengan perubahan huruf besar dan kecil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


  function digitPerkalianMinimum(angka) {
    let minDigits = Infinity; // Inisialisasi variabel untuk menyimpan jumlah digit minimum
  
    // Loop untuk mencari faktor-faktor dari 'angka'
    for (let i = 1; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        let faktor1 = i;
        let faktor2 = angka / i;
        let digitCount = String(faktor1).length + String(faktor2).length; // Menghitung jumlah digit dari kedua faktor
  
        // Memperbarui minDigits jika digitCount lebih kecil
        if (digitCount < minDigits) {
          minDigits = digitCount;
        }
      }
    }
  
    return minDigits; // Mengembalikan jumlah digit minimum
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  

  function checkAB(num) {
    // Iterasi melalui setiap karakter dalam string
    for (let i = 0; i < num.length; i++) {
      // Jika karakter saat ini adalah 'a'
      if (num.charAt(i) == "a") {
        // Jika karakter ke-4 setelah 'a' adalah 'b', kembalikan true
        if (num.charAt(i + 4) == "b") {
          return true;
        }
      } 
      // Jika karakter saat ini adalah 'b'
      else if (num.charAt(i) == "b") {
        // Jika karakter ke-4 sebelum 'b' adalah 'a', kembalikan true
        if (num.charAt(i + 4) == "a") {
          return true;
        }
      }
    }
    // Jika setelah iterasi tidak ditemukan pasangan 'a' dan 'b' yang memenuhi syarat, kembalikan false
    return false;
  }
  
  // TEST CASES
  console.log(checkAB("lane borrowed")); // true
  console.log(checkAB("i am sick")); // false
  console.log(checkAB("you are boring")); // true
  console.log(checkAB("barbarian")); // true
  console.log(checkAB("bacon and meat")); // false