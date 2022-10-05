const bakeryProducts = [
  {
    name: "brownie",
    unitPrice: 3.5,
    calories: 300,
  },
  {
    name: "carrot cake",
    unitPrice: 3.0,
    calories: 100,
  },
  {
    name: "sponge",
    unitPrice: 2.5,
    calories: 120,
  },
  {
    name: "blueberry muffin",
    unitPrice: 2.5,
    calories: 170,
  },
  {
    name: "toast",

    unitPrice: 1.0,
    calories: 50,
  },
  {
    name: "savoury muffin",
    unitPrice: 1.5,
    calories: 70,
  },
  {
    name: "sandwich",
    unitPrice: 1.9,
    calories: 60,
  },
];

const cafeProducts = [
  {
    name: "tea",
    unitPrice: 1.0,
    calories: 20,
  },
  {
    name: "coffee",
    unitPrice: 1.5,
    calories: 20,
  },
  {
    name: "iced coffee",
    unitPrice: 2.3,
    calories: 50,
  },
  {
    name: "hot chocolate",
    unitPrice: 2.0,
    calories: 100,
  },
];

const promotions = [
  {
    name: "breakfast to go",
    applicableFromBakery: ["toast", "savoury muffin"],
    applicableFromCafe: ["tea", "coffee"],
    promotionPrice: 1.8,
  },
  {
    name: "elevenses",
    applicableFromBakery: [
      "brownie",
      "carrot cake",
      "sponge",
      "blueberry muffin",
    ],
    applicableFromCafe: ["tea", "coffee", "iced coffee", "hot chocolate"],
    promotionPrice: 3.5,
  },
  {
    name: "winter special",
    applicableFromBakery: ["savoury muffin"],
    applicableFromCafe: ["hot chocolate"],
    promotionPrice: 2.5,
  },
];

const calculateBasket = (products) => {
  let price = 0;
  let calorie = 0;
  let item;
  let bakeryIndexArr = [];
  let cafeIndexArr = [];
  let isPromotion = false;
  let promote;
  let promotionPrice;
  let totalPromotionPrice = 0;

  // EXTENSION TASK:

  // use duplicatedValue to get correct promotions for each order
  function getPromotionPrice(duplicatedValue) {
    if (duplicatedValue === 0) {
      promote = promotions[0];
      promotionPrice = promote.promotionPrice;
    } else if (duplicatedValue === 1) {
      promote = promotions[1];
      promotionPrice = promote.promotionPrice;
    } else if (duplicatedValue === 2) {
      promote = promotions[2];
      promotionPrice = promote.promotionPrice;
    }
    // if the length of the order is not 3, calculate total promotion price normally, else
    // make total promotion price equal to most recent promotion price.

    products.length !== 3
      ? (totalPromotionPrice += promotionPrice)
      : (totalPromotionPrice = promotionPrice);
  }

  function checkForPromotion(products) {
    // map through the promotions, check if the order(products) include any of the items in each promotion,
    // will return true if they do
    const includesBakeryItems = promotions.map((promotion) => {
      return promotion.applicableFromBakery.some((item) =>
        products.includes(item)
      );
    });
    const includesCafeItems = promotions.map((promotion) => {
      return promotion.applicableFromCafe.some((item) =>
        products.includes(item)
      );
    });
    // for each item of the bakery and cafe items, if they are true, push their index to an array
    includesBakeryItems.forEach((item, index) => {
      if (item) {
        bakeryIndexArr.push(index);
      }
    });
    includesCafeItems.forEach((item, index) => {
      if (item) {
        cafeIndexArr.push(index);
      }
    });

    // merge both arrays with indexes of true items. create a new set of the indexes and filter
    // out any duplicate indexes to signify when order items are (in both applicable arrays),
    // send those indexes to
    // getPromotionPrice function and set promotion to true when there is a promotion
    let promotionArr = bakeryIndexArr.concat(cafeIndexArr);
    const set = new Set(promotionArr);
    promotionArr.filter((item) => {
      if (set.has(item)) {
        set.delete(item);
      } else {
        getPromotionPrice(item);
        isPromotion = true;
      }
    });
  }

  // MAIN TASK :
  //
  //  create one array of products from existing bakery products and cafe products
  // if there are products, call check for promotion function
  const allProducts = [...bakeryProducts, ...cafeProducts];
  products && checkForPromotion(products);
  // loop through the products recieved and match the product with the name in the new allProducts
  // array to find correct data, then step through the data and store in variables calorie/price
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    item = allProducts.find((data) => data.name === product);
    calorie += item.calories;
    price += item.unitPrice;
  }
  // store product data inside total object and return object
  const total = {
    order: products,
    totalPrice: price,
    totalCalories: calorie,
    promotion: isPromotion,
    promotionTotal: totalPromotionPrice,
    // I was unable to succesfully apply the promotional price
    // the first value in priceWithPromotion is not accurate to what the price should be after promotion is applied
    // it is a representation of the ternary I would use to get the priceWithPromotion value
    // i.e. isPromotion? price = totalPromotionPrice + remaining items that aren't in promotion : price
    // WHAT I WOULD DO NEXT:
    // check which items are in the promotion and which are not
    //if item is in promotion remove it from array of products, get price of remaining items, then add correct
    // promotional amounts
    priceWithPromotion: isPromotion
      ? (price = totalPromotionPrice + item.unitPrice)
      : price,
  };
  return total;
};

// Exercise output (don't change anything of these but feel free to add more tests)
console.log(calculateBasket(["brownie", "iced coffee"])); //true

console.log(calculateBasket(["blueberry muffin", "carrot cake"])); //false

console.log(calculateBasket(["savoury muffin", "coffee", "hot chocolate"])); //true

console.log(
  calculateBasket([
    "brownie",
    "carrot cake",
    "sandwich",
    "coffee",
    "coffee",
    "iced coffee",
  ])
); //true

console.log(
  calculateBasket(["sponge", "tea", "savoury muffin", "coffee", "sponge"])
); //true
