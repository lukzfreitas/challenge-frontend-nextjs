import { Product } from "./product";

export class ThemeProduct {
    theme: string;
    listProducts: Product[];

    constructor(theme: string, listProducts: Product[]) {
        this.theme = theme;
        this.listProducts = listProducts;
    }
}