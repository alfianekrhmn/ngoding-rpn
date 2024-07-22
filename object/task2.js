/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let kumpulanArray = arrPenumpang
    let result = []
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    for(let i = 0; i < kumpulanArray.length; i++){
        let empty = {
          penumpang: kumpulanArray[i][0],
          naikDari: kumpulanArray[i][1],
          tujuan: kumpulanArray[i][2],
          bayar: (rute.indexOf(kumpulanArray[i][2]) - rute.indexOf(kumpulanArray[i][1])) * 2000
        }
        result.push(empty)
    }
    return  result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]