import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    savedItems:[],
    orderSummary:{},
    orderPlaced:false,
    orderedItems:[]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const item = state.products.filter((product)=>product.id == action.payload.id)[0];
            if(item){
                item.qty = item.qty+1;
                // state.products = state.products.map((product)=>product.id==action.payload.id ? {...product,qty:action.payload.qty} : product)
            } else{
                state.products.push(action.payload)
            }
        },
        removeProduct: (state,action)=>{
            state.products = state.products.filter((product)=>product.id !== action.payload.id);
        },
        resetCart: (state)=>{
            state.products = [];
        },
        updateQty:(state,action)=>{
            const item = state.products.filter((product)=>product.id == action.payload.id)[0];
            if(item){
                // item.qty = action.payload.qty;
                state.products = state.products.map((product)=>product.id==action.payload.id ? {...product,qty:action.payload.qty, size:(action.payload.size || product.size)} : product)
            }
        },

        addToSaved: (state,action)=>{  
            const item = state.savedItems.filter((product)=>product.id == action.payload.id);
            
            if(item.length==0){
                 state.savedItems.push(action.payload);
            }
        },
        removeFromSavedItems:(state,action)=>{
            state.savedItems = state.savedItems.filter((item)=>item.id !== action.payload);
        },
        orderSummaryHandler(state,action){
            state.orderSummary = action.payload;
        },
        setOrderPlaced(state,action){
            state.orderPlaced = action.payload;
        },
        orderedItemsHandler(state,action){
            state.orderedItems = action.payload;
        }

    }
})

export const {addToCart,removeProduct,resetCart,updateQty,addToSaved,removeFromSavedItems,orderSummaryHandler,setOrderPlaced, orderedItemsHandler} = cartSlice.actions;

export default cartSlice.reducer;