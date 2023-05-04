export class Product {
    _id?: string;
    code?: number;
    name: string;
    price: number;
    image: string;    
    category: string;

    constructor({ 
        _id = null,
        code = null,
        name,
        price,
        image,        
        category
    }) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.code = code;
        this.category = category;
    }

    setCategory(category: string) {
        this.category = category;
    }

    setName(name: string) {
        this.name = name;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setImage(image: string) {
        this.image = image;
    }

    toJson() {
        return {
            id: this._id,            
            code: this.code,
            name: this.name,
            price: this.price,
            image: this.image,
            category: this.category
        }
    }    

    toString() {
        return `{ name: ${this.name}, price: ${this.price}, image: ${this.image}, category: ${this.category} }`
    }
}