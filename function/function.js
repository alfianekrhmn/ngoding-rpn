console.log("Soal 1")
function shoutOut(){
    return "Halo Function!"
}
console.log(shoutOut());

console.log("Soal 2")
function calculateMultiply(num1, num2){
    return num1 * num2
}
console.log(calculateMultiply(20, 10))

console.log("Soal 3");
function processSentence(name, age, address, hobby){
    return `nama saya ${name}, umur saya adalah ${age}, alamat saya di ${address}, dan saya memiliki hobby yaitu ${hobby}`
}
console.log(
  processSentence("agus", 30, "Jln. Malioboro, Yogjakarta", "main game")
);