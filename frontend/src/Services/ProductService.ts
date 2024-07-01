import axios, { AxiosRequestConfig } from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { productAction, store } from "../Redux/Store";

class ProductService {
	public async getAllProducts() {
        if(store.getState().products) return store.getState().products //checkes if there are products in the global state
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data
        //init all products in the global state
        const action = productAction.initProducts(products)
        store.dispatch(action)
        return products
    }

    public async addNewProduct(product: ProductModel) {
        try {
            const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
            const response = await axios.post<ProductModel>(appConfig.addProductUrl, product, options);
            if(!store.getState().products) return
            const addedProduct = response.data
            const action = productAction.addProduct(addedProduct)
            store.dispatch(action)
        } catch (err: any) {
            return alert(err)
        }
    }

    
}

export const productService = new ProductService();
