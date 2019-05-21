const goodsLoaded = (newGoods) => {
  return {
    type: 'FETCH_GOODS_LOADED',
    payload: newGoods
  }
};

const goodsRequested = () => {
  return {
    type: 'FETCH_GOODS_SUCCESS',
  }
};

const goodsError = (error) => {
  return {
    type: 'FETCH_GOODS_FAILURE',
    payload: error
  }
};

const goodsAddedToCart = (goodsID) => {

  return {
    type: 'GOODS_ITEM_ADDED_TO_CART',
    payload: goodsID
  };
};

const deleteItem = (goodsID) => {
  return {
    type: 'ITEM_REMOVED',
    payload: goodsID
  }
};

const deleteGoodsItem = (goodsID) => {
  return {
    type: 'GOODS_ITEM_REMOVED',
    payload: goodsID
  }
};

const deleteGoodsItemFromCard = (goodsID) => {
  return {
    type: 'GOODS_REMOVED_FROM_CART',
    payload: goodsID
  }
};

const allGoodsDelete = () => {
  return {
    type: 'ALL_GOODS_REMOVED',
  }
};

const fetchGoods = (catalogService, dispatch ) => () => {
  dispatch(goodsRequested());
  catalogService.getGoods()
    .then((data) => dispatch(goodsLoaded(data)))
    .catch((err) => dispatch(goodsError(err)));
};

export {
  fetchGoods,
  deleteGoodsItem,
  allGoodsDelete,
  goodsAddedToCart,
  deleteGoodsItemFromCard,
  deleteItem
};