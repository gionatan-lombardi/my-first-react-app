import { useState } from 'react';

function useCount(initValue) {
  const [ count, setCount] = useState(initValue);
  return [count, setCount ]
}
export default useCount 