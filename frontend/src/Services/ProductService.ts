import axios, { AxiosRequestConfig } from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
	public async getAllProducts() {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data
        return products
    }

    public async addNewProduct(product: ProductModel) {
        try {
            const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
            const response = await axios.post<ProductModel>(appConfig.addProductUrl, product, options);
            const addedProduct = response.data
            console.log(addedProduct)
        } catch (err: any) {
            return alert(err)
        }
    }

    
}

export const productService = new ProductService();
