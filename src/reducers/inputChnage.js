const initalState = {
    inputValue: ""
}

const inpTextChange = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return { ...state, inputValue: action.payload };
    
        default: return state;
    }
}

export default inpTextChange;