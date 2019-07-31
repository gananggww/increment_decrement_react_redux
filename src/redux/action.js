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


