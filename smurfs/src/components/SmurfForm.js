import React, { useState } from 'react';
import { addSmurf } from '../actions'
import { connect } from 'react-redux'


 const SmurfForm = (props) => {
       
       const [smurf, setSmurf] = useState({name:'',age:'',height:''})
       const handleChange = event => {
              
              setSmurf({...smurf, [event.target.name]:event.target.value})
             
       }
       const handleSubmit = event => {
              const newSmurf = {name:smurf.name, 
                     age:parseInt(smurf.age),
                        height: smurf.height,
                        id: Date.now()}

              props.addSmurf(smurf)    
                          
       }
       console.log('smurf test',smurf)
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

export default connect(null, {addSmurf})(SmurfForm)