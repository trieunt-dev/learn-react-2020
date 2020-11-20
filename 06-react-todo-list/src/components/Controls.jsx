import React from 'react';

import ControlSearch from './ControlSearch';
import ControlSort from './ControlSort';

import ControlAddTask from './ControlAddTask';

const Controls = ({
    onSelectSort,
    orderBy,
    orderDir,
    searchText,
    onChangeSearchText,
    handleAddNewTask,
}) => {
    let injectedPropsSort = {
        onSelectSort,
        orderBy,
        orderDir,
    };

    return (
        <div className="row">
            <div className="col-12 col-lg-6">
                <div className="row">
                    <ControlSort {...injectedPropsSort} />

                    <ControlSearch
                        searchText={searchText}
                        onChangeSearchText={onChangeSearchText}
                    />
                </div>
            </div>

            <ControlAddTask handleAddNewTask={handleAddNewTask} />
        </div>
    );
};

export default Controls;
