// Modal.js

import React, { useState, useEffect } from 'react';

const Modal = ({ showModal, closeModal }) => {
  const [showModalContent, setShowModalContent] = useState(false);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModalContent(true);
      }, 100); // Adjust the timeout to allow for the modal to appear before applying the transition
    } else {
      setShowModalContent(false);
    }
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModalContent(false);
    setTimeout(closeModal, 300); // Adjust the timeout to match your CSS transition duration
  };

  const reloadPage = () => {
    setShowModalContent(false);
    setTimeout(() => {
      closeModal();
      window.location.reload(); // Reload the page
    }, 300); // Adjust the timeout to match your CSS transition duration
  };

  return (
    <div className={`modal ${showModal ? 'visible' : 'invisible'}`}>
      <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        {showModalContent && (
          <div className="modal-content bg-white p-10 rounded-lg shadow-xl transform translate-y-0 transition-transform duration-300 z-50">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={reloadPage}
                >
                  Submit
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
