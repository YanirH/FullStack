import { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";

export function initProducts (currentState: ProductModel[], action: PayloadAction<ProductModel[]>) {
    const newState: ProductModel[] = action.payload //here action.payload is all products to init
    return newState
}

export function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>) {
    const newState: ProductModel[] = [...currentState] //here action.payload is a product to add
    newState.push(action.payload)
    return newState
}