const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (goodsItem, item = {}, quantity) => {

  const {
    id = goodsItem.id,
    count = 0,
    title = goodsItem.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*goodsItem.price
  };
};

const updateOrder = (state, goodsID, quantity) => {
  const { goodsList: {goods}, shoppingCart:{cartItems} } = state;

  const goodsItem = goods.find(({id}) => id === goodsID);
  const itemIndex = cartItems.findIndex(({id}) => id === goodsID);
  const item = cartItems[itemIndex];
  console.log("item ",item );

  const newItem = updateCartItem(goodsItem, item, quantity);
  return {
    orderTotal:0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal:0,
    }
  }
  switch (action.type) {
    case 'GOODS_ITEM_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'GOODS_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'GOODS_ITEM_REMOVED':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart