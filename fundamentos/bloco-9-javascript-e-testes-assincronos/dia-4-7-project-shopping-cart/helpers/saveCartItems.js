const saveCartItems = (item) => {
  localStorage.setItem('cartItems', item);
};

// const saveCartItems = (item) => {
//   const savedItems = localStorage.getItem('cartItems');
//   if (savedItems !== null) {
//     if (savedItems.search(']') > 0) {
//       const newList = [...JSON.parse(savedItems), item];
//       localStorage.setItem('cartItems', JSON.stringify(newList));
//     } else {
//       const newList = [savedItems, item];
//       localStorage.setItem('cartItems', JSON.stringify(newList));
//     }
//   } else {
//     localStorage.setItem('cartItems', item);
//   }
// };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
