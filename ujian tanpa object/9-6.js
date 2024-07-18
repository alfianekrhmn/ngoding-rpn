function changeMe(arr) {
  for(let i = 0; i <= arr.length -1; i++) {
  if(i === 0) console.log(`1. ${arr[i][0]} ${arr[i][1]}`)
      
  let biography = {
  firstName : arr[i][0],
  lastName : arr[i][1],
  gender : arr[i][2],
  age :  arr[i][3]
  }
  if(biography.age !== undefined) biography.age = new Date().getFullYear() - biography.age  
  else biography.age = 'Invalid Birth Year';
  
  console.log(biography);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""

  function shoppingTime(memberId, money) {
    const product = [{
      namaBarang: 'Sepatu Brand Stacattu',
      harga: 1500000 
  },
  {
      namaBarang: 'Baju Brand Zoro',
      harga: 500000
  },
  {
      namaBarang: 'Baju Brand H&N',
      harga: 250000
  },
  {
      namaBarang: 'Sweater Brand UnikLooh',
      harga: 175000
  },
  {
      namaBarang: 'Casing Handphone',
      harga: 50000
  }]
    if(memberId === ``){
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }else if(money < 50000){
        return `Mohon maaf, uang tidak cukup`
    }else if(memberId == null && money == null){
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }else if(memberId !== '' && money > 50000){
        let result = {
          memberId: memberId,
          money: money,
          listPurchased: [],
          changeMoney: money
        }
        for(let i = 0; i <= product.length -1; i++) {
          if(result.changeMoney >= product[i].harga) {
          result.changeMoney -= product[i].harga;
          result.listPurchased.push(product[i].namaBarang)
          }
      }
      return result
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja11

  function countProfit(shoppers) {
    let listBarang = [
      ['Sepatu Stacattu', 1500000, 10],
      ['Baju Zoro', 500000, 2],
      ['Sweater Uniklooh', 175000, 1]
    ];
  
    var result = [];
  
    for (let i = 0; i < listBarang.length; i++) {
      let product = {
        product: listBarang[i][0],
        shoppers: [],
        leftOver: listBarang[i][2],
        totalProfit: 0
      };
  
      for (let j = 0; j < shoppers.length; j++) {
        if (shoppers[j].product === product.product && shoppers[j].amount <= product.leftOver) {
          product.shoppers.push(shoppers[j].name);
          product.leftOver -= shoppers[j].amount;
          product.totalProfit += shoppers[j].amount * listBarang[i][1];
        }
      }
  
      result.push(product);
    }
  
    return result;
  }  

  // TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
