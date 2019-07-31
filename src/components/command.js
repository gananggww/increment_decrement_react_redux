import React from 'react';
import { connect } from 'react-redux'
import {incAction,decAction} from '../redux/action'

const Command = ({increment, decrement, countState}) => {
    // let name = {
    //     pengajar: {...},
    //     matakuliah: {...}
    // }
    return (
      <div>        
        <button onClick={() => decrement(countState - 1)}>-</button>
        <button onClick={() => increment(countState + 1)}>+</button>
      </div>
    );
  }
const mapStateToProps = (state) => {
    return {
        countState: state ? state.counts: 1,
        tambahState: state ? state.tambah : 'hehe'
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        increment: (e) => {
            return dispatch(incAction(e))
        },
        decrement: (e) => dispatch(decAction(e))
    }
}
const c = connect(mapStateToProps, mapDispatchToProps)(Command)
export default c;