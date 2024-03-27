function palindrome(kata) {
    let newKata = kata.split("")
    let reversed = newKata.reverse();
    reversed = reversed.join("")
    return kata === reversed
}
// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister"));  // false

/*
1. 
*/

function angkaPalindrome(num) {
  while (true) {
    num++;
    let angka_kebalik = "";
    let numStr = num.toString();
    //lakukan yang di nomor1
    for(let i = numStr.length - 1; i >= 0; i--){
      angka_kebalik += numStr[i]
    }

    //compare angka_kebalik dengan numStr
    if (numStr === angka_kebalik) {
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

function hitungJumlahKata(kalimat) {
  kalimat = kalimat.split(' ').length;
  return kalimat
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

function pasanganTerbesar(num) {
  let numStr = num.toString()
  let largestPair = 0;
  for(let i = 0; i < numStr.length - 1; i++){
    let pair = parseInt(numStr[i] + numStr[i+1])
    if(pair > largestPair){
        largestPair = pair
    }
  }
  return largestPair
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99