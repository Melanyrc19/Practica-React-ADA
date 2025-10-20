
import { useState } from 'react'

export const Contador = () => {

  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count - 1)}>-</button>
    </>
  )
}
