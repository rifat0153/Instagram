const initialState = {
    currentUser: {
        name: 'user',
        email: 'email',
    }
}

export const user = (state = initialState, action) => {
    console.log('In user reducer: ', {action})
    return {
        ...state,
        currentUser: action.currentUser,
    }
}