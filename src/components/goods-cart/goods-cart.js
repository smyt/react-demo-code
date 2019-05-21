import React from 'react'
import './goods-cart.scss'

import { deleteGoodsItem, allGoodsDelete, goodsAddedToCart, deleteGoodsItemFromCard } from '../../actions'
import { connect } from 'react-redux'

const GoodsCart = ({
    items,
    total,
    onIncrease,
    onDecrease,
    onDelete,
    onDeleteAll,}) => {

  const renderRow = (item, idx) => {
  const {id, title, count, total} = item;

  return (
    <tr key={id}>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button
          onClick={() => onDecrease(id)}
        >Add</button>
        <button
          onClick={() => onIncrease(id)}
        >Increase</button>
        <button
          onClick={() => onDelete(id)}
        >Delete</button>
      </td>
    </tr>
  )
  };

  return (
   <div>
     <table>
       <tbody>
        { items.map(renderRow) }
       </tbody>
     </table>
     <div>
       Total: ${total}
     </div>
     <div>
       Total: ${total}
     </div>
     <div>
       <button
         onClick={() => onDeleteAll()}
       >Delete All</button>
     </div>
   </div>
  )
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal }}) => {
  return {
    items : cartItems,
    total: orderTotal
  }
};

const  mapDispatchToProps = {
  onDecrease:goodsAddedToCart,
  onIncrease:deleteGoodsItemFromCard,
  onDelete:  deleteGoodsItem,
  onDeleteAll: allGoodsDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsCart)