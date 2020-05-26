import React from 'react';
import Modal from 'react-modal';
import {ReactComponent as CloseIcon} from '../../../assets/icons/close.svg'
import './DefaultModal.css';
export var DefaultModal = WrappedComponent => props => {
    const { visible, onRequestClose, title } = props;
    const style = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          minWidth: '600px',
          minHeight: '400px',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)'
        }
      };
    return (
        <Modal
            isOpen={visible}
            style={style}
            onRequestClose
            shouldCloseOnOverlayClick={true}
        >
            <div className="DefaultModalContent">
            <div className={'DefaultModalTitle'}>{title}</div>
            <CloseIcon
                className="CloseButton"
                onClick={onRequestClose}
            />
            <WrappedComponent {...props} onRequestClose={onRequestClose}/>
            </div>
        </Modal>
    );
}