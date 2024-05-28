/*
1. buat variable untuk mencari index dari x dan o
2. buat variable untuk default dari jarak
3. buat perkondisian yang dimana jika index x sama dengan -1 maka akan mereturn angka 0
4. jika index dari o lebih besar dari index x maka buatlah looping yang dimana jika i lebih kecil dari index o maka jarak sama dengan i dukurang index dari 0
5. jika distance merupakan hasil minus maka gunakan math.abs agar menjadi positif
6. buat variable hasil index x dikurang index o dan return
*/

function targetTerdekat(arr) {
  let xIndex = arr.indexOf('x')
  let oIndex = arr.indexOf('o')
  let distance = 0;

if(xIndex === -1){
  return 0
}else if(oIndex > xIndex){
  for(let i = 0; i < oIndex; i++){
    distance = i - oIndex
  }
  return Math.abs(distance)
}
const result = xIndex - oIndex
return result
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

  function mengelompokkanAngka(arr) {
    let empty1 = []
    let empty2 = []
    let empty3 = []
    for(let i = 0; i <= arr.length; i++){
      if(arr[i] % 2 === 0 && arr[i] % 3){
        empty1.push(arr[i])
      }else if(arr[i] % 2 === 1 && arr[i] % 3){
        empty2.push(arr[i])
      }else if(arr[i] % 3 === 0){
        empty3.push(arr[i])
      }
    }
    return [empty1, empty2, empty3]
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

  
function groupAnimals(animals) {
  // menyaring animals berdasarkan hurufnya
  animals.sort()

  // membuat array kosong
  const groupedAnimals = []

  // membuat array untuk grup dan animals pertama
  let currentGroup = [animals[0]]
  
  // ngeloop array animals kedua
  for(let i = 1; i < animals.length; i++){
    // mengecek apakah huruf pertama dari hewan saat ini cocok dengan huruf pertama kelompok saat in
    if(animals[i][0] === currentGroup[0][0]){
      // jika benar, maka masukan ke currentGroup
      currentGroup.push(animals[i])
    } else {
      // jika tidak match, masukan ke currentGroup ke groupedAnimals dan buat grup baru
      groupedAnimals.push(currentGroup)
      currentGroup = [animals[i]]
    }
  }
  // masukan grup terakhir ke groupedAnimals
  groupedAnimals.push(currentGroup)

  // return groupedAnimals
  return groupedAnimals
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]