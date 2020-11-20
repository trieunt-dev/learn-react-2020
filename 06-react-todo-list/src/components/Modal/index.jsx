import React, { useEffect, useCallback } from 'react';
import './style.css';

const Modal = (props) => {
    let {
        modalHeader,
        isModalHeader,
        children,
        modalFooter,
        isVisible,
        handleIsVisible,
    } = props;

    let handleClickCancle = useCallback(() => {
        if (handleIsVisible && typeof handleIsVisible === 'function') {
            handleIsVisible();
        }
    }, [handleIsVisible]);

    useEffect(() => {
        if (isVisible) {
            document.querySelector('body').classList.add('modal__open');
        } else {
            document.querySelector('body').classList.remove('modal__open');
        }
    }, [isVisible]);

    let renderFooter = () => {
        if (modalFooter && typeof modalFooter === 'function') {
            return modalFooter();
        }
        return (
            <>
                <button>OK</button>
                <button onClick={handleClickCancle}>Cancel</button>
            </>
        );
    };

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27 && isVisible) {
                handleClickCancle();
            }
        });
        return () => {
            document.removeEventListener('keyup', () => {});
        };
    }, [handleClickCancle, isVisible]);

    return (
        <div className={`modal-box ${isVisible ? 'modal__show' : ''}`}>
            <div className="modal__mask" onClick={handleClickCancle}></div>

            <div className="modal__content">
                {isModalHeader && (
                    <div className="modal__header">
                        <h5>{modalHeader}</h5>
                        <i
                            onClick={handleClickCancle}
                            className="modal__icon ion-close-round"
                        ></i>
                    </div>
                )}
                <div className="modal__body">{children}</div>
                <div className="modal__footer">{renderFooter()}</div>
            </div>
        </div>
    );
};

export default Modal;
