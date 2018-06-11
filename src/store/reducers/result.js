import * as actionType from '../actions';

const initialState = {
    results: []
}

// reducer is just a function that retrieves the state and an action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: Math.random(new Date()), value: action.result})
            }
        case actionType.DELETE_RESULT:
            const newArray = state.results.filter((result) => result.id !== action.id);
            return {
                ...state,
                results: newArray
            }
        default: 
            return state;
    }
}

export default reducer;