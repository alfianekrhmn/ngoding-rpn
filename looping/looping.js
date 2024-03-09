console.log("soal 1")
console.log("looping 1")
let text = "";
let i = 0;
while (i < 10) {
    text +=  "This is number " + i + "\n";
    i++;
}
console.log(text)
console.log("looping 2")
let text2 = "";
let a = 10;
while(a > 0){
    text2 += "This is number " + a + "\n";
    a--
}
console.log(text2)

console.log("Soal 2")
console.log("looping 1")
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log("looping 2")
for(let i = 10; i > 0; i--){
    console.log(i)
}

console.log("Soal 3")
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(`${i} adalah angka genap`)
    }else{
        console.log(`${i} adalah angka ganjil`)
    }
}

console.log("Soal 4");
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(`${i} adalah angka kelipatan 2`)
    }
}
for (let i = 0; i < 100; i++) {
  if (i % 5 == 0) {
    console.log(`${i} adalah angka kelipatan 5`);
  }
}
for (let i = 0; i < 100; i++) {
  if (i % 9 == 0) {
    console.log(`${i} adalah angka kelipatan 9`);
  }
}

console.log("Soal 5");
let kosong = "";
for(let i = 0; i <= 5; i++){
    for(let j = 0; j < i; j++){
        kosong += "*";
    }
    kosong += "\n"
}
console.log(kosong)