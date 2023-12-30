export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calculate Item Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  //Calculate Shipping Price (if order is over 2500Rs then free, else 80Rs shipping charges )
  state.shippingPrice = addDecimals(state.itemsPrice > 2500 ? 0 : 80);

  //Calculate Taxes Price(%18)
  state.taxPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)));

  //Calculate Total Price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
