import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import { Product } from "../../models/product";
import FooterContact from "../../patterns/FooterContact";
import ProductsList from "../../patterns/ProductsList";

const ProductListScreen = () => {

    const productsList = [
        new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/the_child.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/kylo_ren.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/xbox_control.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/ps5.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/nintendo.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/switch_control.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/xbox.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/game_boy.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/atari.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/shirt_snes.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/sonic.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/retro.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/ar.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/pikachu.png')
    ];

    return (
        <Column>
            <AppBar />
            <ProductsList productsList={productsList} />
            <FooterContact />
        </Column>
    )
}

export default ProductListScreen;