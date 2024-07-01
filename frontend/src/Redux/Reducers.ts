import { Action, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { UserModel } from "../Models/UserModel";

export function initProducts (currentState: ProductModel[], action: PayloadAction<ProductModel[]>) {
    const newState: ProductModel[] = action.payload //here action.payload is all products to init
    return newState
}

export function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>) {
    const newState: ProductModel[] = [...currentState] //here action.payload is a product to add
    newState.push(action.payload[0])
    return newState
}

export function initUser(currentState: UserModel, action: PayloadAction<UserModel>) {
    const newState: UserModel = action.payload
    return newState 
}

export function logoutUser(currentState: UserModel, action: Action) {
    const newState: UserModel = null
    return newState
}