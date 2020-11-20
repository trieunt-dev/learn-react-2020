import { v4 as uuidv4 } from 'uuid';

let variantions = [
    {
        id: uuidv4(),
        color: 'Màu đen',
        price: 20000,
        discount: 0.1,
        quantity: 4,
        imageURL: './images/black.jpg',
    },
    {
        id: uuidv4(),
        color: 'Màu đỏ',
        price: 27000,
        discount: 0.15,
        quantity: 8,
        imageURL: './images/red.jpg',
    },
    {
        id: uuidv4(),
        color: 'Màu xanh',
        price: 30000,
        discount: 0,
        quantity: 5,
        imageURL: './images/blue.jpg',
    },
];

let initialProduct = {
    title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
    brand: 'Addidas',
    variantions,
};

let initialSelectedVariant = variantions[0];

export { initialProduct, initialSelectedVariant };
