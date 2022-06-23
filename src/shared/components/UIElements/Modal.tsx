import React from 'react'
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './Backdrop';
import './Modal.css';

export interface ModalOverlayProps {
  className?: string | undefined;
  headerClassName?: string | undefined;
  contentClassName?: string | undefined;
  footerClassName?: string | undefined;
  style?: React.CSSProperties | undefined;
  headerText?: string | undefined;
  footerElement?: React.ReactNode | undefined;
  onSubmit?: React.FormEventHandler | undefined;
  children?: React.ReactNode | undefined;
}

export interface ModalProps extends ModalOverlayProps {
  isShown: boolean;
  onCancel: React.MouseEventHandler;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({className, style, headerClassName, contentClassName, footerClassName, headerText, footerElement, onSubmit, children}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClassName}`}>
        {headerText}
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${contentClassName}`}>
          {children}
        </div>
      </form>
      <footer className={`modal__footer ${footerClassName}`}>
        {footerElement}
      </footer>
    </div>
  );
  const modalHook = document.getElementById('modal-hook')!;
  return createPortal(content, modalHook);
}

const Modal: React.FC<ModalProps> = ({isShown, onCancel, headerText, contentClassName, footerClassName, footerElement, children}) => {
  const nodeRef = React.useRef(null)
  return (
    <React.Fragment>
      {isShown && <Backdrop onClick={onCancel}/>}
      <CSSTransition
        nodeRef={nodeRef}
        in={isShown}
        mountOnEnter
        unmountOnExit
        timeout={700}
        classNames="modal"
      >
        <ModalOverlay 
          headerText={headerText}
          contentClassName={contentClassName}
          footerClassName={footerClassName}
          footerElement={footerElement}
        >
          {children}
        </ModalOverlay>
      </CSSTransition>
    </React.Fragment>
  )
}

export default Modal