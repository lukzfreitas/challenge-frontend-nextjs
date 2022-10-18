export class Product {
    _id?: string;
    name: string;
    price: number;
    image: string;
    code: string;

    constructor({ 
        _id = null,
        name,
        price,
        image,
        code
    }) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.code = code;
    }

    toJson() {
        return {
            _id: this._id,
            name: this.name,
            price: this.price,
            image: this.image,
            code: this.code
        }
    }
}