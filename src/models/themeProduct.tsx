import { Product } from "./product";

export class ThemeProduct {
    theme: string;
    productsList: Product[];

    constructor(theme: string, productsList: Product[]) {
        this.theme = theme;
        this.productsList = productsList;
    }
}