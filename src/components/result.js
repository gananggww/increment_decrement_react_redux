import React from 'react';
import {connect} from 'react-redux'

const Result = ({countState}) => {
    return (
      <div>
        Ini Hasil
        <br></br>
        {countState}
      </div>
    );
  }
  
const mapStateToProps = (state) => {
    console.log(state);
    return {
        countState: state ? state.counts: 1
    }
}
const c = connect(mapStateToProps, null)(Result)
export default c;