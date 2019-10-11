/*dependencies*/
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
/*components*/ 
import SmurfCard from './SmurfCard'
import { fetchSmurfs } from './actions'

const SmurfList = props => {
    useEffect(()=>{
        props.fetchSmurfs()
    },[]);

    if(props.isFetching){
        return(
            <div>loading...</div>
        )
    }


    return(
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurf={smurf}/>))}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default  connect(mapStateToProps, { fetchSmurfs })(SmurfList)