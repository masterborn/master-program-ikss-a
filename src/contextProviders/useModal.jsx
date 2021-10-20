import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ModalContext = React.createContext({});

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = (action) => {
    if (action === 'open') setModalOpen(true);
    if (action === 'close') setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, handleModal }}>{children}</ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  if (!Object.keys(modalContext).length) {
    throw Error('useModal needs to be used inside ModalProvider');
  }

  return modalContext;
};
