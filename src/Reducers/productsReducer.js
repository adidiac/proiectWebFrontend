export const productsReducer=(state=[],action)=>
{
    if(action.type==='ADD_PRODUCT') {
        state=[...state,action.data];
        return state;
    }
    if(action.type==='DELETE_PRODUCT') {
        let index=action.data.index;
        state= [
            ...state.slice(0, index),
            ...state.splice(index + 1)
        ];
        return state;
    }
    if(action.type==='UPDATE_PRODUCT') {
        let index=state.find(el=>el.id===action.data.id);
        state= [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
        state=[...state,action.data];
        return state;
    }
    return state;
}