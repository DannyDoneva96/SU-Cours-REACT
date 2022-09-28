import {useState} from 'react';

export const Counter= (props)=>{

   const [count,setCount] = useState(0)

    const incrementHandler = ()=>{
        setCount(count=>count+1)

    }

    const clearHandler = ()=>{
        setCount(0)
    }


    const decrementHandler = ()=>{
        setCount(count=>count-1)

    }
    return (
<div>
    <h1>{count<0
    ?"Atention the counter is negative "
    : "The counter is positive "}</h1>
    <h3>{count}</h3>
      <button onClick={decrementHandler}>-</button>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={incrementHandler}>+</button>
</div>

    )
}