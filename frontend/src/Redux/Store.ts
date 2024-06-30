import { configureStore, createSlice } from "@reduxjs/toolkit"
import { ProductModel } from "../Models/ProductModel"
import { addProduct, initProducts } from "./Reducers"
//application state
export type AppState = {
    products: ProductModel[]
}
//creating products slice
const productSlice = createSlice({
    name: "products",
    initialState: null,
    reducers: {initProducts, addProduct}
})
//creating action creators
export const productAction = productSlice.actions

export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer
    }
}) 