import { useState } from 'react'
import {puppyList} from './data.js'

const PuppyComponent = () => {

    const [featPupId, setFeatPupId] = useState(null);
    const [puppies, setPuppies] = useState(puppyList);
  
    function handleClick() {
      setFeatPupId(id);
      console.log(`Puppy with id ${id} clicked`);
    }
  
    return (
      <div className="PuppyComponent">
        {puppies.map((puppy) => {
          return (
            <p onClick={handleClick} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
        
      </div>
    );
  
  }

  export default PuppyComponent;