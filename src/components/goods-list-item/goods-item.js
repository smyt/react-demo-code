import React, { Fragment } from 'react';
import './goods-item.scss';
import Button from '@material-ui/core/Button';

const GoodsListItem = ({ goodsItem, onAddedToCart, onDelete }) => {
  const { title, author, price, img, description } = goodsItem;
  return (
    <Fragment>
      <span>{title}</span>
      <span>${price}</span>
      <img src={img} alt="pic" />
      <span>{description}</span>
      <Button
        variant="contained" color="primary"
        onClick={onAddedToCart}
        className="btn btn-info add-to-cart">
        Add to cart
      </Button>
      <Button
        variant="contained" color="secondary"
        onClick={onDelete}
        className="btn btn-info add-to-cart">
        Delete
      </Button>
    </Fragment>
  )
};

export default GoodsListItem
