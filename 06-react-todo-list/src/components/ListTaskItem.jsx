import React, { useState } from 'react';
import { TASK_LEVEL } from '../constants/index';

const ListTaskItem = ({ task, index, setTaskDelete, handleEditTask }) => {
    let [taskEdit, setTaskEdit] = useState(null);

    let handleSubmitEdit = () => {
        setTaskEdit(task);
        // handleEditTask(taskEdit);
    };

    let handleSaveEdit = () => {
        handleEditTask(taskEdit);
        setTaskEdit(null);
    };

    let handleOnChange = (keyField) => {
        return (e) => {
            setTaskEdit({
                ...taskEdit,
                [keyField]: e.target.value,
            });
        };
    };

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>
                {/* {task.name} */}
                {!taskEdit ? (
                    task.name
                ) : (
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Task Name"
                        value={taskEdit.name}
                        onChange={handleOnChange('name')}
                    />
                )}
            </td>
            <td className="text-center">
                {!taskEdit ? (
                    <span className={`badge ${TASK_LEVEL[task.level].class}`}>
                        {TASK_LEVEL[task.level].name}
                    </span>
                ) : (
                    <select
                        name="ds"
                        className="form-control"
                        required="required"
                        value={taskEdit.level}
                        onChange={handleOnChange('level')}
                    >
                        {TASK_LEVEL.map((level, index) => (
                            <option key={index} value={index}>
                                {level.name}
                            </option>
                        ))}
                    </select>
                )}
            </td>
            <td>
                {!taskEdit ? (
                    <>
                        <button
                            onClick={() => handleSubmitEdit(task)}
                            type="button"
                            className="btn btn-warning"
                            style={{ marginRight: '5px' }}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => setTaskDelete(task)}
                        >
                            Delete
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => handleSaveEdit()}
                            type="button"
                            className="btn btn-success"
                            style={{ marginRight: '5px' }}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setTaskEdit(null)}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default ListTaskItem;
