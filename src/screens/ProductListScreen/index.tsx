import { Column } from "../../components/Grid/Column";
import AppBar from "../../components/Surfaces/AppBar";
import { Product } from "../../models/product";
import FooterContact from "../../patterns/FooterContact";
import FooterDev from "../../patterns/FooterDev";
import ProductsList from "../../patterns/ProductsList";

const ProductListScreen = () => {

    const productsList = [
        new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/the_child.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/kylo_ren.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/xbox_control.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/ps5.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/nintendo.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/switch_control.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/xbox.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/game_boy.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/atari.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/shirt_snes.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/sonic.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/retro.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/ar.png', '#1111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/pikachu.png', '#1111111')
    ];

    return (
        <Column>
            <AppBar />
            <ProductsList productsList={productsList} />
            <FooterContact />
            <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022' />
        </Column>
    )
}

export default ProductListScreen;