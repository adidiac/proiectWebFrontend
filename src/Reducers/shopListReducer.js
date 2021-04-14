export const shopListReducer=(state=["Hello"],action)=>
{
    if(action.type==='NEW_PRODUCT') {
        console.log("heeei");
        state=[...state,action.data];
        return state;
    }
    return state;
}