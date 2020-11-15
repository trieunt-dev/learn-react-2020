import React, { PureComponent } from 'react';

export default class ProductDescription extends PureComponent {
    render() {
        let { attrProduct, description } = this.props;
        return (
            <div className="description">
                <ul className="extra-info">
                    {attrProduct.map((attr, index) => {
                        return (
                            <li key={index}>
                                {attr.name === '' ? '' : `${attr.name}: `}
                                {attr.value}
                            </li>
                        );
                    })}
                </ul>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        );
    }
}
