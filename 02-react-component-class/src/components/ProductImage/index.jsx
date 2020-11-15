import React, { PureComponent } from 'react';

export default class ProductImage extends PureComponent {
    render() {
        let { imageURL, color } = this.props.selectedVariant;
        return (
            <div className="product-image">
                <div className="image">
                    <img src={imageURL} alt={color} />
                </div>
            </div>
        );
    }
}
