import React, { useState } from 'react';

export const SmurfForm = () => {
       const [smurf, setSmurf] = useState({})
       const handleSubmit = event => {
              event.preventDefault();
              
       }
       return(
        <form onSubmit={handleSubmit}>
        <input type='text'
               name='name'
               placeholder='name' 
               value={value}/>
        <input type='int'
               name='age' 
               placeholder='age' 
               value={age}/>
        <input type='text'
               name='height' 
               placeholder='height (in cm)' 
               value={height}/>
        <button type='submit'>Add Smurf</button>
        
    </form>
    )
}