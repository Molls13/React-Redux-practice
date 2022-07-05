const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state]
        case "TOGGLE_TODO":
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item
            })
                .sort((a, b) => b.id - a.id).sort((a, b) => a.done - b.done);

        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

export default reducer;