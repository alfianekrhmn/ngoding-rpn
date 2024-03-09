console.log("Soal nomor 1")
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}!`);

console.log("Soal nomor 2 & 3");
let text = "wow JavaScript is so cool";
let exampleFirsttext1 = text[0] + text[1] + text[2];
let exempleFirsttexta = text.substring(0, 3);
let exempleSecondText1 = text[4] + text[5] + text[6] + text[7] + text[8] + text[9] + text[10] + text[10] + text[11] + text[12] + text[13];
let exempleSecondTexta = text.substring(4, 14);
let exempleThirdText1 = text[15] + text[16];
let exempleThirdTexta = text.substring(15, 17);
let exempleFourthText1 = text[18] + text[19];
let exempleFourthTexta = text.substring(18, 20);
let exempleFifthText1 = text[21] + text[22] + text[23] + text[24];
let exempleFifthTexta = text.substring(21, 25);

console.log(`First Word: ${exampleFirsttext1}`);
console.log(`First Word: ${exempleFirsttexta}`);
console.log(`Second Word: ${exempleSecondText1}`);
console.log(`Second Word: ${exempleSecondTexta}`);
console.log(`Third Word: ${exempleThirdText1}`);
console.log(`Third Word: ${exempleThirdTexta}`);
console.log(`Fourth Word: ${exempleFourthText1}`);
console.log(`Fourth Word: ${exempleFourthTexta}`);
console.log(`Fifth Word: ${exempleFifthText1}`);
console.log(`Fifth Word: ${exempleFifthTexta}`);

console.log("Soal nomor 4");
let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
let exampleSecondWord41 = word4.substring(4, 14);
let secondWordLength = exampleSecondWord41.length;
let exempleThirdWord41 = word4.substring(15, 17);
let thirdWordLength = exempleThirdWord41.length
let exempleFourthWord41 = word4.substring(18, 20);
let fourthWordLength = exempleFourthWord41.length;
let exempleFifthWord41 = word4.substring(21, 25);
let fifthWordLength = exempleFifthWord41.length;

console.log("First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength);
console.log("Second Word: " + exampleSecondWord41 + ", with length: " + secondWordLength);
console.log("Third Word: " + exempleThirdWord41 + ", with length: " + thirdWordLength);
console.log("Fourth Word: " + exempleFourthWord41 + ", with length: " + fourthWordLength);
console.log("Fifth Word: " + exempleFifthWord41 + ", with length: " + fifthWordLength);
