import React, { useState, useEffect } from 'react';

import ListTaskItem from './ListTaskItem';
import Modal from './Modal';
import Button from './Button';

const ListTasks = ({ listTasks, handleDeleteTask, handleEditTask }) => {
    let [isLoading, setIsLoading] = useState(false);
    let [openModal, setOpenModal] = useState(false);
    let [taskDelete, setTaskDelete] = useState(null);

    useEffect(() => {
        if (taskDelete) {
            setOpenModal(true);
        } else {
            setOpenModal(false);
        }
    }, [taskDelete]);

    let handleSubmit = () => {
        if (isLoading) return;
        setIsLoading(true);
        handleDeleteTask(taskDelete, () => {
            setIsLoading(false);
            setTaskDelete(null);
            setOpenModal(false);
        });
    };

    return (
        <div className="panel panel-success">
            {/* <div className="panel-heading">List Task</div> */}
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: '20%' }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: '200px' }}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {listTasks &&
                        listTasks.length > 0 &&
                        listTasks.map((task, index) => {
                            return (
                                <ListTaskItem
                                    key={index}
                                    task={task}
                                    index={index}
                                    setOpenModal={setOpenModal}
                                    setTaskDelete={setTaskDelete}
                                    handleEditTask={handleEditTask}
                                />
                            );
                        })}
                </tbody>
            </table>
            <Modal
                isVisible={openModal}
                modalHeader="Cảnh báo"
                isModalHeader={true}
                modalFooter={() => {
                    return (
                        <>
                            <Button
                                loading={isLoading}
                                onClick={() => handleSubmit()}
                                className="btn-primary btn-modal btn-modal-add"
                            >
                                Xóa
                            </Button>
                            <button
                                onClick={() => setTaskDelete(null)}
                                className="btn-secondary btn-modal-cancel btn-modal"
                            >
                                Hủy
                            </button>
                            {/* <Button
                                className="btn-primary btn-modal btn-modal-add"
                                loading={isLoading}
                                onClick={() => setIsLoading(!isLoading)}
                            >
                                Cancel
                            </Button> */}
                        </>
                    );
                }}
            >
                <h4>Bạn có chắc chắn muốn xóa task?</h4>
            </Modal>
        </div>
    );
};

export default ListTasks;
