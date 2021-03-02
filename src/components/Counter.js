import { useState } from 'react';
import './Counter.css'
import useCount from './useCount'

function Counter(props) {
  const [ count, setCount ] = useCount(props.number)
  const [ modalIsOpen, setModalIsOpen] = useState(props.modalIsOpen);
  console.log(count)

  return (
    <div>
      <button type="button" onClick={() => setCount(count - 1)}>Decrease -</button>
      <span>{ count }</span>
      <button type="button" onClick={() => setCount(count + 1)}>Increase +</button>
      <br />
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Toggle panel</button>
      <div className={`modal ${ modalIsOpen ? 'modal--is-open' : ''}`}>This is a panel</div>
      <hr />
    </div>
  )
}

export default Counter;