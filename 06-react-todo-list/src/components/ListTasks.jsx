import React, { useState, useEffect } from 'react';

import ListTaskItem from './ListTaskItem';
import Modal from './Modal';

const ListTasks = ({ listTasks, handleDeleteTask }) => {
    let [openModal, setOpenModal] = useState(false);
    let [taskSelected, setTaskSelected] = useState(null);

    useEffect(() => {
        if (taskSelected) {
            setOpenModal(true);
        } else {
            setOpenModal(false);
        }
    }, [taskSelected]);

    let handleSubmit = () => {
        handleDeleteTask(taskSelected, () => {
            setOpenModal(false);
            setTaskSelected(null);
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
                        <th style={{ width: '160px' }}>Action</th>
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
                                    setTaskSelected={setTaskSelected}
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
                            <button
                                onClick={() => handleSubmit()}
                                className="btn-primary btn-modal btn-modal-add"
                            >
                                Xóa
                            </button>
                            <button
                                onClick={() => setTaskSelected(null)}
                                className="btn-secondary btn-modal-cancel btn-modal"
                            >
                                Hủy
                            </button>
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
