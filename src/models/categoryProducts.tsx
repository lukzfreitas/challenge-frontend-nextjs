import { Product } from "./product";

export class CategoryProducts {
    _id: string;
    code: number;
    name: string;    
    products: Product[];

    constructor(code: number, name: string, productsList: Product[]) {
        this.code = code;
        this.name = name;
        this.products = productsList;
    }
}