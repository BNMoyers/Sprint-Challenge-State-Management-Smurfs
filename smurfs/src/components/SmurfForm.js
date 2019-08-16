import React, { useState } from 'react';


export const SmurfForm = () => {
       
       const [smurf, setSmurf] = useState({})
       const handleChange = event => {
              const newSmurf = {name:smurf.name, 
                                age:smurf.age,
                                   height: smurf.height,
                                   id: Date.now()}
                                   
              setSmurf(newSmurf)
       }
       const handleSubmit = event => {
              
       }
       console.log('smurf',smurf)
       return(
        <form onSubmit={handleSubmit}>
        <input type='text'
               name='name'
               placeholder='name' 
               value={smurf.name}
               onChange={handleChange}/>
        <input type='int'
               name='age' 
               placeholder='age' 
               value={smurf.age}
               onChange={handleChange}/>
        <input type='text'
               name='height' 
               placeholder='height (in cm)' 
               value={smurf.height}
               onChange={handleChange}/>
        <button type='submit'>Add Smurf</button>
        
    </form>
    )
}