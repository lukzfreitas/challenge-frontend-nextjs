import { Product } from "./product";

export class CategoryProducts {
    _id: string;
    code: number;
    name: string;
    products: Product[];

    constructor({ _id, code, name, products }) {
        this._id = _id;
        this.code = code;
        this.name = name;
        this.products = products.map((product: any) => new Product(product));
    }
}