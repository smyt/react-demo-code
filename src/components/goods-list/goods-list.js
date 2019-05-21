import React, { Component } from 'react';
import { connect } from 'react-redux'
import './goods-list.scss';

import GoodsListItem from '../goods-list-item'
import Spinner from '../../components/spinner'
import ErrorIndicator from '../../components/error-indicator'
import { withCatalogService } from '../hoc'
import { fetchGoods, goodsAddedToCart, deleteItem } from '../../actions'
import { compose } from '../../utils'

const  GoodsList = ({goods, onAddedToCart, onDelete}) => {
  return (
    <ul>
      {
        goods.map((goodsItem) => {
          return ( <li key={goodsItem.id}> <GoodsListItem
            goodsItem={goodsItem}
            onDelete={() => onDelete(goodsItem.id)}
            onAddedToCart={() => onAddedToCart(goodsItem.id)} />
          </li> )
        })
      }
    </ul>
  )
};

class GoodsListContainer extends Component {

  componentDidMount() {
    this.props.fetchGoods()
  }

  render() {

    const { goods,
      loading,
      error,
      onAddedToCart,
      onDelete } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <GoodsList goods={goods}
                      onAddedToCart={onAddedToCart}
                      onDelete={onDelete} />
  }
}

const mapStateToProps = ({ goodsList: { goods, loading, error }}) => {
  return { goods, loading, error }
};

const mapDispatchToProps = (dispatch, { catalogService }) => {
  return {
    fetchGoods: fetchGoods(catalogService, dispatch),
    onAddedToCart: (id) => dispatch(goodsAddedToCart(id)),
    onDelete: (id) => dispatch(deleteItem(id))
  }
};

export default compose(
  withCatalogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(GoodsListContainer)
