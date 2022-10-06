export class Product {
    name: string;
    price: string;
    image: string;
    code: string;

    constructor(
        name: string,
        price: string,
        image: string,
        code: string
    ) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.code = code;
    }

    toJson() {
        return {
            name: this.name,
            price: this.price,
            image: this.image,
            code: this.code
        }
    }
}