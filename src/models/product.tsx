export class Product {
    name: string;
    price: string;
    image: string;

    constructor(
        name: string,
        price: string,
        image: string,
    ) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}