import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { SmurfCard } from './SmurfCard';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/'

const SmurfList = (props) => {
    useEffect(() => {
      props.fetchSmurfs()
    },[])
    if (!props.isLoading){

    
    return(
     
      <Grid centered columns={3} >
      
      {props.smurfArray.map(smurf => (
      
      <Grid.Column width={5}>
      <SmurfCard  smurf={smurf}/>
      </Grid.Column>
      ))}
      </Grid>
  );
      }

      else {
        return(
          <div>...loading</div>
        )
      }
        
}

const mapStateToProps = (state) => {
    return{
      ...state
    }
  }

  export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)