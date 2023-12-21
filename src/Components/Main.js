import React from 'react'
import Name from './Name';
import './main.css';
function Main() {
  return (
    <main>
      <p>
      this is a main
      </p>
      <Name 
        myName={"Cizen"} 
        myAddress={"Rootyhill"} 
        myNumber={83487248} 
        hobbies={["playing" , "sleeping"]}
      />
  
    </main>
  )
}

export default Main
