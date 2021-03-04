import React, {useEffect, useState} from 'react';
import CustomHook from './Custom';

function Count(){
    const data = CustomHook;
    const [count,setCount]=useState(0);
useEffect(()=>{
console.log("Use Effect Called");
});
    return(
    <>
    <h1>=============  Click button to + 1  using useState Hook===============</h1>
        <p>You Clicked {count}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <h1>=============  Click button to + 2  using Custom Hook===============</h1>
        <p>You Clicked {data.count}</p>
        <button onClick={data.handle}>Click me</button>
    </> 

    );
}
export default Count;