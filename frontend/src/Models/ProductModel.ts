export class ProductModel {
	id?: number
    name!: string
    price!: number
    stock!: number
    categoryId?: number
    supplierId?: number
    quantity?: string
    imageName?: string
    imageUrl?: string
    public image?: File;

    // public constructor(product: ProductModel) {
    //     this.id = product.id
    //     this.name = product.name
    //     this.price = product.price
    //     this.stock = product.stock
    //     this.categoryId = product.categoryId
    //     this.supplierId = product.supplierId
    //     this.quantity = product.quantity
    //     this.imageName = product.imageName
    //     this.imageUrl = product.imageUrl
    // }
}

