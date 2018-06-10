const initialState = {
    counter: 0,
    results: []
}

// reducer is just a function that retrieves the state and an action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD5':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT5':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({value: state.counter})
            }
        default: 
            return state;
    }
}

export default reducer;