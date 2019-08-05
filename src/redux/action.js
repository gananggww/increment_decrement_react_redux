import axios from 'axios'
import { async } from 'q';

export const incAction = (payload) => {
    return {
        type: 'INCREMENT',
        payload: payload
    }  
} 

export const decAction = (payload) => {
    // alert(payload)
    return {
        type: 'DECREMENT',
        payload: payload
    }  
} 

const fetchAction = (payload) => {
    return {
        type: "USERS",
        payload
    }
}

export const fetchThunk = (payload) => {
    let options = {
        "method": "GET",
        "url": "https://jsonplaceholder.typicode.com/users"
    }
    return async(dispatch, getState) => {
        try {
            let curr =  await getState()
            let state = []
            if (curr.users !== undefined) {
                state = curr.users
            }

            console.log('===========',state);

            let {data} = await axios(options)
            if (data) {
                dispatch(fetchAction(data))
            }
        } catch (error) {
            console.log(error);
        }
    }
}






