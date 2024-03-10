import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
const Store=configureStore({
    reducer:{
        cart:cartSlice
    }

})
export default Store;
/*
*create store
-configureStore()-@reduxjs/toolkit
*
*Provide store to app
-<Provider store={store}>-import from react-redux

*Slice
-RTK-createSlice({
    name:
    initialState:
    reducers:{
        additem:(state,action)=>{state=action.payload

        },
        removeItem:(state)=>{
            state.item.pop()
        },
        clearItem:()=>{
            state.item=[]
        }
    }
})
export const{additem,removeItem}=cartSlice.actions
export default cartSlice.reducer;

*put the slice into our store
-{
    reducer:{
        cart:cartSlice
    }
}

*/