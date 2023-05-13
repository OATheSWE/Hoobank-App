import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <button
            className={`${showButton ? '' : 'hidden'
                } fixed bottom-4 right-4 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none`}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
