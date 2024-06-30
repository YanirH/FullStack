import { useState } from "react";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function AddProduct(): JSX.Element {
    
   const {register, handleSubmit} = useForm<ProductModel>()
   

    const navigate = useNavigate()
    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0]
            await productService.addNewProduct(product)
            alert("product has been added")
            navigate("/products")
        } catch (err: any) {
            alert(err.message)
        }
            
    }
    
    
    
    return (
        <div className="AddProduct">
			<form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input  placeholder="banana.." type="text" {...register('name')} required minLength={2} maxLength={100} /> 
                <label>Price: </label>
                <input  placeholder="0.." type="number" {...register('price')} required min={2} max={100}/>
                <label>stock: </label>
                <input  placeholder='0..' type="number" {...register('stock')} required min={2} max={100}/>
                <label>Image: </label>
                <input type="file" accept="image/*" {...register('image')}  /> 
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}
