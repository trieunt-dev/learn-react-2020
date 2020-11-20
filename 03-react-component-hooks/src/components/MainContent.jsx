import React, { useState } from 'react';
import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';

import { initialProduct, initialSelectedVariant } from '../mocks/state';

const MainContent = (props) => {
    let [products, setProducts] = useState(() => initialProduct);
    let [selectedVariant, setSelectedVariant] = useState(
        () => initialSelectedVariant
    );
    let [cart, setCart] = useState(0);

    let updateSelectedVariant = (variant) => {
        setCart(0);
        setSelectedVariant(variant);
    };

    let updateAddToCart = () => {
        if (cart === selectedVariant.quantity) {
            alert('Số lượng của sản phẩm đã vượt tối đa.');
            return;
        }
        setCart(cart + 1);
    };

    let injectPropsProduct = {
        ...products,
        selectedVariant,
        updateAddToCart,
        updateSelectedVariant,
    };

    return (
        <div className="container">
            <div className="list-blog">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Modi sunt eveniet maxime magni in, nostrum facilis,
                    temporibus, quam facere sint est blanditiis harum dicta.
                    Tempore suscipit ut hic. Deleniti, qui.
                </p>
            </div>
            <div id="app">
                <div className="cart">Giỏ hàng ({cart})</div>
                <div className="product">
                    <ProductImage selectedVariant={selectedVariant} />
                    <ProductContent {...injectPropsProduct} />
                </div>
                <ProductDescription />
            </div>
        </div>
    );
};

export default MainContent;
