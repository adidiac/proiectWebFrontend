export const shopListReducer=(state=[],action)=>
{
    if(action.type==='NEW_SHOP') {
        state=[...state,action.data];
        return state;
    }
    if(action.type==='DELETE_SHOP') {
        let index=action.data.index;
        state= [
            ...state.slice(0, index),
            ...state.splice(index + 1)
        ];
        return state;
    }
    if(action.type==='EMPTY')
    {
        state=[];
        return state;
    }
    return state;
}