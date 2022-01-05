const { useState, useEffect, useRef } = React;
const { createPortal } = ReactDOM;

const Modal = (props) => {
    const { children, visible, closeModal } = props;

    const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow);

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, [visible]);

    function handleClick(event) {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }
    
    useEffect(() => {
        return () => {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, []);

    const modal = createPortal(
        <div className="modal" onClick={handleClick}>
            {children}
        </div>,
        document.body
    );

    return <div>{visible && modal}</div>;
};

function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const modalConfig = {
        visible: modalVisible,
        closeModal: () => {
            setModalVisible(false);
        }
    };
    
    const modalChildren = (
        <div className="dialog">
            <span onClick={() => setModalVisible(false)} className="closeBtn">x</span>
            <div>something</div>
        </div>
    );
    
    return (
        <div className="App">
            <button onClick={() => setModalVisible(true)} className="openBtn">open modal</button>
            <Modal {...modalConfig}>{modalChildren}</Modal>
        </div>
    );
}

export default  Modal;