import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const { useState, useEffect, useRef } = React;
const { createPortal } = ReactDOM;

const Modal = (props) => {
  const { children, visible, closeModal } = props;

  // 在第一次渲染时取 body 原始的 overflow 值
  const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow);

  useEffect(() => {
    // 根据 visible 来动态修改 body 的 overflow 值
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = bodyOverflow.current;
    }
  }, [visible]);

  function handleClick(event) {
    // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  useEffect(() => {
    // 组件销毁时恢复 body 的 overflow 值
    return () => {
      document.body.style.overflow = bodyOverflow.current;
    };
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
    },
  };

  const modalChildren = (
    <div className="dialog">
      <span onClick={() => setModalVisible(false)} className="closeBtn">
        x
      </span>
      <div>这是内容</div>
    </div>
  );

  return (
    <div className="App">
      <button onClick={() => setModalVisible(true)} className="openBtn">
        open modal
      </button>
      <Modal {...modalConfig}>{modalChildren}</Modal>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
