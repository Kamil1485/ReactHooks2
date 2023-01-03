import React from 'react';
import { createContext,useState } from 'react';

const CountContext=createContext();
//3-Normalde hookslar funcrtion compennet  içinde asagıda olmalı 
//4-CreateContext  kodları karısık bundan kurtulmak içi useContext() kullanıyoruz

const CreateContext = () => {
 
    // ! const{Provider,Consumer}=createContext();
 //2.Olusturma sekli tercih edilmez,birden fazla context olusturursan herbirine Provider,Consumer yazarsan karışıklık olur 1.yöntemi bil!!
 //1
 // ^2 adet context olustrudum,2.si createcontext ten dönen nesneleri tek tek aldım ilkinde icinde
// ^1.si CountContext.Provider= 2.si=Provider yani!!

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
