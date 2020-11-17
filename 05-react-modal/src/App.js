import React, { useState } from 'react';
import { useCallback } from 'react';
import Modal from './components/Modal';

const App = () => {
    const [isVisible, setIsVisible] = useState(false);

    let handleIsVisible = useCallback(() => {
        setIsVisible(false);
    }, []);

    let injectedProps = {
        isVisible,
        isModalHeader: true,
        modalHeader: 'Modal Title',
        // modalFooter: () => {
        //     return (
        //         <>
        //             <button>Save</button>
        //             <button>Cancel</button>
        //         </>
        //     );
        // },
        handleIsVisible,
    };

    return (
        <div className="App">
            <Modal {...injectedProps}>
                <h2>Modal Body</h2>
            </Modal>
            <button onClick={() => setIsVisible(true)}>Toggle Modal</button>
        </div>
    );
};

export default App;
