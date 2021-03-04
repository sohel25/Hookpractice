import Custom from './Custom';
import React from 'react';
function CustomHook(){
    const data = Custom;
    return (
        <>
        <h1>=============  Click button to + 2  using Custom Hook===============</h1>
            <p>You Clicked {data.count1}</p>
            <button onClick={data.handle}>Click me</button>
        </>
    );
}

export default CustomHook;