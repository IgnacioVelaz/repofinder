import { FC, ReactNode, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

type Props = {
  title: string;
  children: ReactNode;
  closeModal: () => void;
};

const Modal: FC<Props> = ({ title, children, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      {
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-70"
          onClick={closeModal}
          role="button"
          tabIndex={0}
          aria-label="backdrop"
        />
        /* eslint-enable jsx-a11y/click-events-have-key-events */
      }
      <div
        className="fixed left-1/2 top-1/2 z-50 max-h-[60vh] w-[90%] -translate-x-1/2 
        -translate-y-1/2 overflow-y-scroll rounded-lg bg-clr-bg"
      >
        <header className="flex justify-between border-b border-clr-bg-muted p-4">
          <p>{title}</p>
          <button type="button" aria-label="Close modal" onClick={closeModal}>
            <IoCloseSharp size={20} />
          </button>
        </header>

        {children}
      </div>
    </>
  );
};
export default Modal;
