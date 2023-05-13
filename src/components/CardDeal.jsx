import React, { useState } from 'react';
import Modal from './ModalForm';
import styles from '../style.js'
import card from '../assets/card.png'

export default function CardDeal() {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
        <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingX} flex min-[1060px]:flex-row flex-col sm:py-16 py-6`}>
                <div className={`flex-1 ${styles.flexStart} flex-col`}>
                    <h2 className="font-poppins font-semibold text-[40px] min-[480px]:text-[48px] text-white min-[480px]:leading-[76.8px] leading-[66.8px] w-full">
                        Find a better card<br className="min-[1060px]:block hidden" /> deal <br className="sm:block hidden" /> in few easy steps.
                    </h2>
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </p>
                    <button onClick={handleOpenModal} type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-10 rounded-[10px]">
                        Get Started
                    </button>
                    <Modal showModal={showModal} closeModal={handleCloseModal} />
                </div>
                <div className={`flex-1 ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
                    <img src={card} alt="Card Pic" className="w-[100%] h-[100%] animate-up-down" />
                </div>
            </section>
        </div>
    )
}
