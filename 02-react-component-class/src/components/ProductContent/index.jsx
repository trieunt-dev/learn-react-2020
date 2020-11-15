import React, { PureComponent } from 'react';

export default class ProductContent extends PureComponent {
    render() {
        let {
            title,
            brand,
            variantions,
            selectedVariant,
            handleVariant,
            updateCart,
        } = this.props;
        let { price, discount } = selectedVariant;

        let formatCurrency = (number) => {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(number);
        };

        let renderPrice = () => {
            if (discount) {
                return (
                    <>
                        <div className="final-price">
                            {formatCurrency(price * (1 - discount))}
                        </div>
                        <div className="origin-price">
                            {formatCurrency(price)}
                        </div>
                        <div className="sale-price">-{discount * 100}%</div>
                    </>
                );
            }
            return <div className="final-price">{formatCurrency(price)}</div>;
        };

        let handleClickVariant = (variant) => handleVariant(variant);

        let handleAddToCart = () => updateCart();
        return (
            <div className="product-content">
                <h3 className="title">
                    <a
                        href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {title}
                    </a>
                </h3>
                <p className="brand">
                    Thương hiệu: {brand ? brand : 'No brand'}
                </p>
                <p className="quantity">
                    Còn lại: {selectedVariant.quantity} Sản phẩm
                </p>
                <div className="wrapper-price">{renderPrice()}</div>
                <div className="wrapper-color">
                    <div className="text">Màu sắc</div>
                    <div className="list-color">
                        <p className="color-text">{selectedVariant.color}</p>
                        <ul>
                            {variantions.map((variant) => {
                                return (
                                    <li
                                        className={
                                            selectedVariant.id === variant.id
                                                ? 'active'
                                                : ''
                                        }
                                        key={variant.id}
                                        onClick={() =>
                                            handleClickVariant(variant)
                                        }
                                    >
                                        <img
                                            src={variant.imageURL}
                                            alt={variant.name}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <button
                    onClick={() => handleAddToCart()}
                    className="add-to-cart"
                >
                    Add to cart
                </button>
            </div>
        );
    }
}
