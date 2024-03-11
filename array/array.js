console.log("contoh 1")
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if(j === 0){
            console.log(`Nomor ID: ${input[i][0]}`)
        }else if(j === 1){
            console.log(`Nama: ${input[i][1]}`)
        }else if(j === 2){
            console.log(`TTL : ${input[i][2]}, ${input[i][3]}`)
        }else if(j === 4){
            console.log(`Hobi: ${input[i][4]}`)
        }
    }
    console.log(``)
}

let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input2) {
    input2.splice(
      1,
      5,
      "Roman Alamsyah Elsharawy",
      "Provinsi Bandar Lampung",
      "21/05/1989",
      "Pria",
      "SMA Internasional Metro"
    );
    console.log(input2)
    let tanggal = input2[3].split("/");
    for(let i = 0; i < tanggal.length; i++){
        if(tanggal[i] === "05"){
            console.log("Mei")
        }
    }
    let tanggalBaru = [tanggal[2], tanggal[0], tanggal[1]]
    console.log(tanggalBaru)
    console.log(tanggal.join("-"))
    console.log(input2[1].slice(0,15));
}

dataHandling(input2)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */