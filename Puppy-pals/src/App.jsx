import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import PuppyComponent from './PuppyComponent';

function App() {
  const [puppies, setPuppies] = useState(puppyList);


  console.log("puppyList:", puppyList);


  return (
    <div className="App">
    {
      puppies.map((puppy) => {
           return <p key={puppy.id}>{puppy.name}</p>;
           <PuppyComponent puppies={puppies} />
         })
     }

  </div>

 

  );



}



export default App
