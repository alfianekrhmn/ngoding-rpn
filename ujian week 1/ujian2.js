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
    
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]