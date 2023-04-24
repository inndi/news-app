import { MouseEvent, useEffect } from 'react';

import CloseIcon from '../iconsComponents/CloseIcon';

import './Modal.scss';

interface ModalProps {
  id: string;
  children?: JSX.Element;
  onClose: (id?: string) => void;
}

const Modal = ({ children, onClose, id }: ModalProps) => {
  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  const handleOverlay = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  console.log('Modal Render');
  return (
    <div className="modal" onMouseDown={handleOverlay}>
      <div className="modal__container">
        <button className="modal__close-button" onClick={() => onClose(id)}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
