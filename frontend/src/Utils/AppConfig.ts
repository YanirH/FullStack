class AppConfig {
	public readonly productsUrl = "http://localhost:4000/api/products"
	public readonly addProductUrl ="http://localhost:4000/api/product"
	public readonly registertUrl ="http://localhost:4000/api/register"
	public readonly logintUrl ="http://localhost:4000/api/login"
    
}

export const appConfig = new AppConfig();
