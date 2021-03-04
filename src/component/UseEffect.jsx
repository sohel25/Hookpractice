import React, { useEffect, useState } from "react";
function UseEffect(){
    const [count,setCount]=useState(50);
    useEffect(()=>{
        console.log(`You Clicked ${count} times`);
    });
    return (
        <>
    <h1>decrement value using useEffect Hook</h1>
        <p>  {count} Value is decrease</p>
        <button onClick={()=>setCount(count-1)}>Click Me</button>
        </>
    );
}
export default UseEffect;