import React from 'react';
import Loading from './Loading';
import './style.css';

const Button = ({ children, loading, ...restProps }) => {
    return (
        <button {...restProps}>
            {loading && <Loading />}
            <span>{children}</span>
        </button>
    );
};

export default Button;
