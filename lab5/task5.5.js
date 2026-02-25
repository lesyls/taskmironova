const groceries = {
  "Orange Juice": {
    price: 1.5,
    discount: 10,
  },
  "Chocolate": {
    price: 2,
    discount: 0,
  }
};

function getTotalPriceOfShoppingBag(shoppingBag) {
  let total = 0;
  
  for (let i = 0; i < shoppingBag.length; i++) {
    const item = shoppingBag[i];
    const productInfo = groceries[item.product];
    
    if (productInfo) {
      const priceWithDiscount = productInfo.price * (1 - productInfo.discount / 100);

      total += priceWithDiscount * item.quantity;
    }
  }

  return Number(total.toFixed(2));
}

const shoppingBag = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);