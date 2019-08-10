

export function todoReducer(state, action) {

    switch(action.type) {
        case 'ADD_TODO': {
            Object.assign({}, state, {...action.payload})
            break
        }
        default: return state
    }
}