export const userReducer=(state=0,action)=>
{
    if(action.type==='LOGOUT') {
        state=0;
        return state;
    }
    if(action.type==='LOGIN') {
        state=action.data;
        return state;
    }
    return state;
}