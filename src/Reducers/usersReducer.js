export  const  usersReducer=(state=[],action)=>
{
    if(action.type==='NEW_USER') {
        state=[...state,action.data];
        return state;
    }
    if(action.type==='DELETE_USER') {
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