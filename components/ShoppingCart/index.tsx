import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ShoppingCartPanelProps {
  onClose: () => void;
}

const ShoppingCartPanel = ({ onClose }: ShoppingCartPanelProps) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-10 p-4">
      <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
      <FontAwesomeIcon icon={faXmark} />
      </button>
      <h2 className="text-lg font-semibold mb-4">Shopping cart</h2>
    </div>
  );
};

export default ShoppingCartPanel;
