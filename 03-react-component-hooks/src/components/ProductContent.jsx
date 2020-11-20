import React from 'react';

const ProductContent = ({ title, brand, variantions, ...restProps }) => {
    let { selectedVariant } = restProps;

    let formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    let renderPrice = () => {
        let { price, discount } = selectedVariant;
        if (discount !== 0) {
            return (
                <>
                    <div className="final-price">
                        {formatPrice(price * (1 - discount))}
                    </div>
                    <div className="origin-price">{formatPrice(price)}</div>
                    <div className="sale-price">-{discount * 100}%</div>
                </>
            );
        }
        return <div className="final-price">{formatPrice(price)}</div>;
    };

    let handleSelectedVariant = (variant) =>
        restProps.updateSelectedVariant(variant);

    let handleAddToCart = () => restProps.updateAddToCart();
    return (
        <div className="product-content">
            <h3 className="title">
                <a
                    href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    {title && title}
                </a>
            </h3>
            <p className="brand">Thương hiệu: {brand ? brand : 'No brand'}</p>
            <p className="quantity">
                Còn lại: {selectedVariant.quantity} Sản phẩm
            </p>
            <div className="wrapper-price">{renderPrice()}</div>
            <div className="wrapper-color">
                <div className="text">Màu sắc</div>
                <div className="list-color">
                    <p className="color-text">{selectedVariant.color}</p>
                    <ul>
                        {variantions &&
                            variantions.map((variant) => {
                                return (
                                    <li
                                        className={
                                            variant.id === selectedVariant.id
                                                ? 'active'
                                                : ''
                                        }
                                        key={variant.id}
                                        onClick={() =>
                                            handleSelectedVariant(variant)
                                        }
                                    >
                                        <img
                                            src={variant.imageURL}
                                            alt={variant.color}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
            <button onClick={() => handleAddToCart()} className="add-to-cart">
                Add to cart
            </button>
        </div>
    );
};

export default ProductContent;
