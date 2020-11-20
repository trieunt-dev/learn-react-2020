import React from 'react';
import { TASK_LEVEL } from '../constants/index';

const ListTaskItem = ({ task, index, setTaskSelected }) => {
    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span className={`badge ${TASK_LEVEL[task.level].class}`}>
                    {TASK_LEVEL[task.level].name}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-warning">
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setTaskSelected(task)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ListTaskItem;
