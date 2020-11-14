export const initialState = {
    user: null,
    itemPage: [],
    sell: [],
}

const reducer = (state, action) =>{

    console.log(action);

    switch (action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        case "NEW_PAGE":
            return{
                ...state,
                itemPage: [...state.itemPage, action.page]
            }
        case "SELL_ITEM":
            return{
                ...state,
                sell: [...state.sell, action.item]
            }
    default:
        return state;
    }

}

export default reducer;
