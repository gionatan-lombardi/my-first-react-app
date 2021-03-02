import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ProductAdder(props) {
  const [ name, setName ] = useState('')
  const [ quantity, setQuantity ] = useState(1)
  const [ notes, setNotes ] = useState('')

  function submitNewProduct(evt) {
    evt.preventDefault()
    const newProduct = {
      name,
      quantity,
      notes,
      id: uuidv4()
    }
    props.addNewProduct(newProduct)
    setName('')
    setQuantity(1)
    setNotes('')
  }

  return (
    <form onSubmit={submitNewProduct}>
      <label htmlFor="productName">Product</label>
      <input type="text" id="productName" name="product-name" required value={name} onChange={(evt) => setName(evt.target.value)} />
      <br /><br />
      <label htmlFor="productQty">Quantity</label>
      <input type="number" id="productQty" name="product-qty" required value={quantity} onChange={(evt) => setQuantity(parseInt(evt.target.value))} min="1" />
      <br /><br />
      <label htmlFor="productNotes">Notes</label>
      <textarea id="productNotes" name="product-notes" value={notes} onChange={(evt) => setNotes(evt.target.value)}></textarea>
      <br /><br />
      <button>Add</button>
    </form>
  )
}

export default ProductAdder;