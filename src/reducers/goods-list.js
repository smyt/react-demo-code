const deleteItem = (state, goodsID) => {
  const {goodsList:{ goods} } = state;
  const goodsIndex = goods.findIndex(({id}) => id === goodsID);

  return {
    ...state,
    goods: [
      ...goods.slice(0, goodsIndex ),
      ...goods.slice(goodsIndex + 1 )
    ]
  };
};

const updateGoodsList = (state, action) => {

  if (state === undefined) {
    return {
      goods: [],
      loading: true,
      error: null,
    }
  }

  switch (action.type) {
    case 'FETCH_GOODS_SUCCESS':
      return {
        goods: [],
        loading: true,
        error: null,
      };

    case 'FETCH_GOODS_LOADED':
      return {
        goods: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_GOODS_FAILURE':
      return {
        goods: action.payload,
        loading: false,
        error: action.payload
      };

    case 'ITEM_REMOVED':
      return deleteItem(state, action.payload);

    case 'ALL_GOODS_REMOVED':
      return {
        ...state,
        goods: []
      };

    default:
      return state.goodsList;
  }
};

export default updateGoodsList;