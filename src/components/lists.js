import React, {useState} from 'react';
import { connect } from 'react-redux'

const Lists = ({userState}) => {
    if (userState === []) {
        return (
            <div>LOading..</div>
        )
    } else {
        return (
            <div>
                {userState.map(e => <div>Nama : {e.name}</div>)}
                {/* {JSON.stringify(userState)} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        userState : state ? state.users : []
    }
}

const c = connect(mapStateToProps, null)(Lists)
export default c