import { FC, PropsWithChildren } from 'react';
// local
import { CloseIcon } from '@/icons';
// styles
import styles from './styles.module.scss'

export type ModalProps = {
  isOpen: boolean,
  onClose: (...args: unknown[]) => void,
}
 
export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children
}) => {
  return (
    <>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {isOpen && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          {children}
          <button onClick={onClose} className={styles.btn}>
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};

