import React from 'react';
import Custom from './Custom';

function CustomHook(){
    const data = Custom();
    return (
        <>
        <h1>=============  Click button to + 2  using Custom Hook===============</h1>
            <p>You Clicked {data.count1}</p>
            <button onClick={data.handle}>Click me</button>
        </>
    );
}

export default CustomHook;