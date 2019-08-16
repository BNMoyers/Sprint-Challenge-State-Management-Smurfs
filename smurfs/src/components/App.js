import React, { Component } from "react";
import { SmurfForm } from '../components/SmurfForm';
import { SmurfList } from '../components/SmurfList';

import { connect } from 'react-redux';

import "./App.css";



const App = (props) => {
  const { state } = props;
  console.log(props);
    return (
      <div className="App">
        <h1>Build-Your-Own Smurf Village</h1>
        <div className='formBox'>
          <h2>Add a Smurf</h2>
          <SmurfForm />
        </div>
        <div className='village'>
          <h2>Your Village</h2>
          <SmurfList state={state} />
        </div>
        
      </div>
    );
  }

    const mapStateToProps = (state) => {
      return{
        ...state
      }
    }

export default connect(mapStateToProps, null)(App);
