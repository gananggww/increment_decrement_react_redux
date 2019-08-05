import React, {useState} from 'react';
import {fetchThunk} from '../redux/action'
import { connect } from 'react-redux'


const Fetching  = ({fetchDispatch}) => {
    // alert('hwhw')
    return (
      <div>
        <div>HEHEH</div>
        <button onClick={() => fetchDispatch()}>TEKAN AKU</button>
      </div>
    );
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchDispatch: () => dispatch(fetchThunk())
    }
  }
  const c = connect(null, mapDispatchToProps)(Fetching)
  export default c
