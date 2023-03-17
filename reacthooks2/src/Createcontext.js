import React from 'react';
import { createContext,useState } from 'react';

const CountContext=createContext();
//4-CreateContext  kodları karısık bundan kurtulmak içi useContext() kullanıyoruz

const CreateContext = () => {
 
  // ! const{Provider,Consumer}=createContext();
 //1
 // ^2 adet context olustrudum,2.si createcontext ten dönen nesneleri tek tek aldım,

//2 
//provider:Bir değişkeni oluşturup o değişkeni istediğimiz yerde consumer ile alıp kullanabilme
  // consumer:
   
    return (
        <div>
  
  <CountContext.Provider value={33}>
    <CounterList/>
  </CountContext.Provider>



        </div>
    );
}

const CounterList=()=>{
    return <Counter/>
}
const Counter=()=>{
    return <CountContext.Consumer>{(value)=>value}</CountContext.Consumer>
}

export default CreateContext;
