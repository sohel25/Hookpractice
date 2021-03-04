
import React,{useState} from 'react';
function App(){
  const [name,setName] = useState("sohel");
  const [roll,setRoll] = useState(100);

  // const name = nameStateVariable[0] ;
  // const setName=  nameStateVariable[1] ;
  
   const handleCheck = ()=> {

    setName("Sohel khan");
    setRoll(102);
  }
  return(
<>
<h1>Click button to change the value</h1>
<h1>Name :{name}</h1>
<h2>Roll no.:  {roll}</h2>

<button type="button" onClick={handleCheck}>change</button>
</>

  );
}
export default App;
