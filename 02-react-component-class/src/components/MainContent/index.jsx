import React, { PureComponent } from 'react';
import ProductContent from '../ProductContent';
import ProductDescription from '../ProductDescription';
import ProductImage from '../ProductImage';

import initialState from '../../mocks/data';

class MainContent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = initialState;
    }
    handleVariant = (variant) => {
        this.setState({ cart: 0, selectedVariant: variant });
    };

    updateCart = () => {
        let { selectedVariant, cart } = this.state;

        if (selectedVariant.quantity === cart) {
            alert('Giỏ hàng đã đạt tối đa');
            return;
        }
        this.setState({
            cart: cart + 1,
        });
    };
    render() {
        let {
            cart,
            title,
            brand,
            variantions,
            selectedVariant,
            attrProduct,
            description,
        } = this.state;

        let injectedPropsProduct = {
            title,
            brand,
            variantions,
            selectedVariant,
            handleVariant: this.handleVariant,
            updateCart: this.updateCart,
        };
        let injectedPropsDescription = {
            attrProduct,
            description,
        };

        return (
            <div className="container">
                <div className="list-blog">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Modi sunt eveniet maxime magni in, nostrum
                        facilis, temporibus, quam facere sint est blanditiis
                        harum dicta. Tempore suscipit ut hic. Deleniti, qui.
                    </p>
                </div>
                <div id="app-cart">
                    <div className="cart">Giỏ hàng ({cart})</div>
                    <div className="product">
                        <ProductImage selectedVariant={selectedVariant} />
                        <ProductContent {...injectedPropsProduct} />
                    </div>
                    <ProductDescription {...injectedPropsDescription} />
                </div>
            </div>
        );
    }
}

export default MainContent;
