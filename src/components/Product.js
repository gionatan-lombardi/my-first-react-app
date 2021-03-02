import React from 'react'

function Product(props) {
  return (
    <li key={props.name + props.id}>
      <span>{ props.name} - Qty: { props.quantity} - Notes: { props.notes }</span>
      <button type="button" onClick={props.remove}>X</button>
    </li>
  )
}

export default Product