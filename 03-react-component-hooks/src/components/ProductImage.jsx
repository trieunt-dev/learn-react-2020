import React from 'react';

const ProductImage = ({ selectedVariant }) => {
    return (
        <div className="product-image">
            <div className="image">
                <img
                    src={selectedVariant.imageURL}
                    alt={selectedVariant.color}
                />
            </div>
        </div>
    );
};

export default ProductImage;
