//soal 1 A

function reverseStringSimple(str) {
  return str.split("").reverse().join("");
}

// yang aga ribet
function reverseStringRibet(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringSimple("hello")); // Output: "olleh"
console.log(reverseStringSimple("world")); // Output: "dlrow"
console.log(reverseStringRibet("hello")); // Output: "olleh"
console.log(reverseStringRibet("world")); // Output: "dlrow"

//soal2 A
function FizzBuzz(numb) {
  for (let i = 1; i < numb; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}
FizzBuzz(20);

// Soal 3 A
function secondLargest(arr) {
  let largest = 0;
  let secondLarge = 0;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLarge = largest;
      largest = arr[i];
    } else if (secondLarge < arr[i]) {
      secondLarge = arr[i];
    }
  }
  return { largest, secondLarge };
}
console.log(secondLargest([10, 5, 20, 8])); // Output: 10
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4

let products = [
  { id: 1, name: "Product A", price: 1000, points: 10 },
  { id: 2, name: "Product B", price: 2000, points: 25 },
  { id: 3, name: "Product C", price: 5000, points: 50 },
  { id: 4, name: "Product D", price: 8000, points: 100 },
];
let availablePoints = 1555;

let purchasedProducts = [];
let totalSpent = 0;

//soal1 B

function getMaxPointsProduct() {
  let max = 0;
  let itemId = 0;
  for (const iterator of products) {
    if (iterator.points > max) {
      max = iterator.points;
      itemId = iterator.id;
    }
  }

  return products.find((item) => item.id == itemId);
}

let largesProduct = getMaxPointsProduct();
console.log({ Max: largesProduct });

//soal2 B
function calculateRemainingPoints() {
  let newArr = [];
  let totalPoint = 0;
  newArr = products.filter((item) => item.id !== largesProduct.id);
  for (const item of newArr) {
    totalPoint += item.points;
  }
  return totalPoint;
}
let totalRemaining = calculateRemainingPoints();
console.log({ totalRemainingProduct: totalRemaining });

//soal 3 B
function redeemProducts() {
  let dscArr = products.sort((a, b) => b.points - a.points);

  while (availablePoints > 0) {
    let redeemed = false;

    for (let product of dscArr) {
      if (availablePoints >= product.points) {
        purchasedProducts.push(product);
        availablePoints -= product.points;
        totalSpent += product.price;
        redeemed = true;
      }
    }
    if (!redeemed) {
      break;
    }
  }

  return {
    purchasedProducts: purchasedProducts,
    totalSpent: totalSpent,
  };
}
console.log(redeemProducts());
