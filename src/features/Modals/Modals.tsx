import { lazy, memo, useCallback } from 'react';
import { createPortal } from 'react-dom';

import Modal from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal, MODAL_IDS, ModalData } from '../../redux/slices/modalsSlice';

const LoginModal = lazy(() => import('./components/LoginModal/LoginModal'));
const RegisterModal = lazy(() => import('./components/RegisterModal/RegisterModal'));

const modalsRoot = document.getElementById('modals-root') as HTMLElement;

const components = {
  [MODAL_IDS.register]: RegisterModal,
  [MODAL_IDS.login]: LoginModal,
};

const Modals = () => {
  const modals = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  const onClose = useCallback((id?: string): void => {
    dispatch(closeModal(id));
  }, []);

  const renderComponent = (modal: ModalData) => {
    const Component = components[modal.id];
    return <Component {...modal.props} id={modal.id} onClose={onClose} />;
  };

  console.log('Modals Render');
  return modals.length
    ? createPortal(
        modals.map((modal) => (
          <Modal key={modal.id} id={modal.id} onClose={onClose}>
            {renderComponent(modal)}
          </Modal>
        )),
        modalsRoot,
      )
    : null;
};

export default memo(Modals);
