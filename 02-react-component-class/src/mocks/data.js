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
        price: 22000,
        discount: 0.15,
        quantity: 8,
        imageURL: './images/red.jpg',
    },
    {
        id: uuidv4,
        color: 'Màu blue',
        price: 26000,
        discount: 0,
        quantity: 2,
        imageURL: './images/blue.jpg',
    },
];

let attrProduct = [
    {
        name: 'Chất liệu',
        value: 'polyester và thun',
    },
    {
        name: '',
        value: 'Thoát mồ hôi tốt',
    },
    {
        name: '',
        value:
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
    },
    {
        name: '',
        value:
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
    },
    {
        name: 'Chất liệu',
        value: 'polyester và thun',
    },
];

let description = `<h2>Chất liệu bền chặt&nbsp;</h2>
&lt;p&gt;Test hjskhfk h&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;&lt;span
style="background-color:#8e44ad"&gt;fhsdjkfhsk&amp;nbsp;
hsdjkfk&amp;nbsp;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;
<div>
    <p>
        Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ
        chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp
        thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải
        mái khi mặc
    </p>
</div>`;

const product = {
    title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
    brand: 'Addidas',
    variantions,
    attrProduct,
    description,
    selectedVariant: variantions[1],
    cart: 0,
};

export default product;
