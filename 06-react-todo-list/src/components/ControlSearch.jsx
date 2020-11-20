import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ControlSearch = ({ searchText, onChangeSearchText }) => {
    const [text, setText] = useState('');
    let handleChangeSearchText = (e) => {
        setText(e.target.value);
        onChangeSearchText &&
            typeof onChangeSearchText === 'function' &&
            onChangeSearchText(e.target.value);
    };

    let handleChangeSearchClear = () => {
        onChangeSearchText &&
            typeof onChangeSearchText === 'function' &&
            onChangeSearchText('');
    };

    useEffect(() => {
        setText(searchText);
    }, [searchText]);

    return (
        <div className="col-12">
            <div className="input-group input__search">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    value={text}
                    onChange={handleChangeSearchText}
                />
                <span className="input-group-append">
                    <button
                        className="btn btn-info"
                        type="button"
                        onClick={() => handleChangeSearchClear()}
                    >
                        Clear!
                    </button>
                </span>
            </div>
        </div>
    );
};

export default ControlSearch;
