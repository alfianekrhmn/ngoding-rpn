console.log("Soal 1")
function bandingkanAngka(angka1, angka2) {
  if(angka2 > angka1){
    return true
  }else if(angka2 < angka1){
    return false
  }else{
    return -1
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


console.log("Soal 2");
function balikKata(kata) {
    kata = kata.split("")
    let reversed = kata.reverse();
    reversed = reversed.join("")
    return reversed
}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS



console.log("Soal 3");
function konversiMenit(menit) {
    let menit1 = menit / 60
    let menit2 = Math.floor(menit1)
    let menit3 = menit % 60
    
    if(menit < 60){
        return `${menit2}:${menit}`
    }
    if(menit3 < 10){
        return `${menit2}:0${menit3}`;
    }else{
        return `${menit2}:${menit3}`;
    }
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  console.log(konversiMenit(75)); // 1:15



console.log("Soal 4");
function xo(str) {
    let x = 0
    let o = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "x"){
            x++
        }else if(str[i] === "o"){
            o++
        }
    }
    return x === o
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true