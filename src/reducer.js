export const initialState = {
    basket:[],
};
export const getBaskettotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for adding to basket
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >=0){
                // itme exists in basket, remove it
                newBasket.splice(index,1);
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as its not present`);
            }
            return{ ...state,
                basket:newBasket,
            };
        default:
            return state;
    }
}

export default reducer;