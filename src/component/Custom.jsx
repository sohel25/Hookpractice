import { useState } from "react";
function Custom (){
    const [count1,setCount1] = useState(0);
    const handle=()=>{
        setCount1(count1+2);
    };
    return[
        count1,
        handle
    ];
}
export default Custom;