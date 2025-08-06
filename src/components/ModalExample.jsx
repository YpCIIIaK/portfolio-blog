import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-primary text-textPrimary">
            <button
                onClick={toggleModal}
                className="bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors"
            >
                Open Modal
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-80 z-50"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-primary text-textPrimary rounded-lg shadow-lg p-6 w-full max-w-md relative"
                    >
                        <button
                            className="absolute top-2 right-2 text-secondary hover:text-secondary/80 transition-colors"
                            onClick={toggleModal}
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Sample Modal</h2>
                        <p className="text-textSecondary mb-6">
                            This is a sample modal component created to demonstrate the design.
                        </p>
                        <button
                            onClick={toggleModal}
                            className="bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors"
                        >
                            Close Modal
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Modal;
