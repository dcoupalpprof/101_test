import './Modal.css';

const Modal = ({children}) => (
    <div className="ModalBackdrop">
        <div className="Modal">
            {children}
        </div>
    </div>
);

export default Modal;
