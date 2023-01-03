import React from 'react';
import {createContext,useContext,useState } from 'react';
const CountCounText=createContext()
//^ 5.adım CreateContext acıkladık burası simdi!
//Consumer kısmını yazmak yerine UseContext() ile kullanabiliriz!
const UseContext = () => {
    //const value=useContext(CountCounText);
    const [count,setCount]=useState(43)
    
    
    return (
        <div>
             
  <CountCounText.Provider value={{count,setCount}}>
    <CounterList/>
  </CountCounText.Provider>

        </div>
    );
}
function CounterList(){
    return <Counter/>
}

function Counter(){
const Nesne=useContext(CountCounText);
console.log(Nesne.count)//43
//Nesne.setCount(120) 120 olarak degistirebiliyoruz degeri cunku setCount fonksiyonunu gönderdik parametre olarak

return(
    <>
 <h3>{Nesne.count}</h3>
<button onClick={()=>{Nesne.setCount((oncekideger)=>oncekideger-1)}}>Azalt</button>
<button onClick={()=>{Nesne.setCount((oncekideger)=>oncekideger+1)}}>Arttır</button>
<button onClick={()=>{Nesne.setCount((oncekideger)=>oncekideger+5)}}>+5</button>
<button onClick={()=>{Nesne.setCount((oncekideger)=>oncekideger-5)}}>-5</button>
<button onClick={()=>{Nesne.setCount((oncekideger)=>oncekideger*5)}}>5x</button>
<button onClick={()=>{Nesne.setCount((oncekideger)=>Math.floor(oncekideger/5))}}>/5</button>
<button></button>

<button onClick={()=>{Nesne.setCount(0)}}>Sayacı Sıfırla</button>


    
    </>
)
}


export default UseContext;
