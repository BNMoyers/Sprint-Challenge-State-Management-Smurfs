import React from 'react';
import { Grid } from 'semantic-ui-react';
import { SmurfCard } from './SmurfCard';
import { connect } from 'react-redux';

const SmurfList = (props) => {
   console.log('smurfList', props.smurfArray)
    return(
        <Grid centered columns={3} >
    
    {props.smurfArray.map(results => (
        
        <Grid.Column width={5}>
        <SmurfCard  />
            </Grid.Column>
    ))}  
  </Grid>
  );
        
}

const mapStateToProps = (state) => {
    return{
      ...state
    }
  }

  export default connect(mapStateToProps)(SmurfList)