import { configureStore, createSlice } from "@reduxjs/toolkit"
import { ProductModel } from "../Models/ProductModel"
import { addProduct, initProducts, initUser, logoutUser } from "./Reducers"
import { UserModel } from "../Models/UserModel"
//application state
export type AppState = {
    products: ProductModel[]
    user: UserModel
}
//creating products slice
const productSlice = createSlice({
    name: "products",
    initialState: null,
    reducers: {initProducts, addProduct}
})


const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {logoutUser, initUser}
})


//creating action creators
export const productAction = productSlice.actions
export const userAction = userSlice.actions

export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        user: userSlice.reducer
    }
}) 