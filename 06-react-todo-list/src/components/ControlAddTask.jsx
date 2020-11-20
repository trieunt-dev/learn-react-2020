import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import { TASK_LEVEL } from '../constants/index';

const ControlAddTask = ({ handleAddNewTask }) => {
    const taskInitial = {
        name: '',
        level: 0,
    };
    let [openModal, setOpenModal] = useState(false);
    let [task, setTask] = useState(taskInitial);

    let handleOnChange = (keyField) => {
        return (e) => {
            setTask({
                ...task,
                [keyField]: e.target.value,
            });
        };
    };

    let handleSubmit = () => {
        let data = {
            id: uuidv4(),
            ...task,
        };

        handleAddNewTask(data);
        setOpenModal(false);
        setTask(taskInitial);
    };

    return (
        <div className="col-12 col-lg-6">
            <div className="form-group add-task">
                <button
                    onClick={() => setOpenModal(true)}
                    className="btn btn-info btn-block"
                >
                    Add Task
                </button>
            </div>
            <Modal
                isVisible={openModal}
                isModalHeader={true}
                modalHeader="Thêm mới công việc"
                modalFooter={() => {
                    return (
                        <>
                            <button
                                onClick={handleSubmit}
                                className="btn-primary btn-modal btn-modal-add"
                            >
                                Thêm
                            </button>
                            <button
                                onClick={() => setOpenModal(false)}
                                className="btn-secondary btn-modal-cancel btn-modal"
                            >
                                Hủy
                            </button>
                        </>
                    );
                }}
            >
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Task Name"
                        value={task.name}
                        onChange={handleOnChange('name')}
                    />
                </div>
                <div className="form-group">
                    <label className="sr-only">label</label>
                    <select
                        name="ds"
                        className="form-control"
                        required="required"
                        value={task.level}
                        onChange={handleOnChange('level')}
                    >
                        {TASK_LEVEL.map((level, index) => (
                            <option key={index} value={index}>
                                {level.name}
                            </option>
                        ))}
                    </select>
                </div>
            </Modal>
        </div>
    );
};

export default ControlAddTask;
