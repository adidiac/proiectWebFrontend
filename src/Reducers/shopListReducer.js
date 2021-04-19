export const shopListReducer=(state=[],action)=>
{
    if(action.type==='NEW_SHOP') {
        state=[...state,action.data];
        return state;
    }
    if(action.type==='DELETE_SHOP') {
        let index=state.find(el=>el.id===action.data.id);
        state= [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
        return state;
    }
    return state;
}