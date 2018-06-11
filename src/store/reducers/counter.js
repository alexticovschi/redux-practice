import * as actionType from '../actions';

const initialState = {
    counter: 0,
}

// reducer is just a function that retrieves the state and an action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD5:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.SUBTRACT5:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default: 
            return state;
    }
}

export default reducer;