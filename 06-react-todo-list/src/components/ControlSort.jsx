import React from 'react';
import { SORT } from '../constants';

import Dropdown from 'react-bootstrap/Dropdown';
import Modal from './Modal';

const ControlSort = ({ onSelectSort, orderBy, orderDir }) => {
    let onSelectDropdownSort = (evenKey) => {
        let [orderBy, orderDir] = evenKey.split('-');

        onSelectSort &&
            typeof onSelectSort === 'function' &&
            onSelectSort(orderBy, orderDir);
    };

    return (
        <div className="col-12">
            <Modal isVisible={true} />
            <div className="form-group">
                <Dropdown onSelect={onSelectDropdownSort}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {SORT.map((item) => {
                            return (
                                <Dropdown.Item
                                    href="#/action-1"
                                    eventKey={item.key}
                                    key={item.key}
                                    active={
                                        item.key === `${orderBy}-${orderDir}`
                                    }
                                >
                                    {item.name}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                <span className="badge badge-success badge-medium">
                    {`${orderBy} - ${orderDir}`}
                </span>
            </div>
        </div>
    );
};

export default ControlSort;
