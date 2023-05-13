import React, { useState } from 'react';
import styles from '../style.js'
import star from '../assets/Star.svg'
import sheild from '../assets/Shield.svg'
import send from '../assets/Send.svg'
import Modal from './ModalForm';

export default function Business() {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={`${styles.boxWidth}`}>
            <section id="features" className={`${styles.paddingX} flex flex-col lg:flex-row sm:py-16 py-6`}>
                <div className={`${styles.flexStart} flex-1 flex-col`}>
                    <h2 className="font-poppins font-semibold text-[40px] min-[480px]:text-[48px] text-white min-[480px]:leading-[76.8px] leading-[66.8px] w-full">
                        You do the business, <br className="hidden md:block" /> we'll<br className="sm:block hidden md:hidden" /> handle the<br className="lg:block hidden" /> money.
                    </h2>
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                    </p>
                    <button onClick={handleOpenModal} type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-10 rounded-[10px]">
                        Get Started
                    </button>
                    <Modal showModal={showModal} closeModal={handleCloseModal} />
                </div>
                <div className={`${styles.flexStart} flex-1 flex-col`}>
                    <div className={`${styles.flexCenter} flex-1 ml-0 sm:mt-10 mt-10 relative flex-col`}>
                        <div className="flex flex-row p-6 rounded-[20px] mb-6 transition ease-in-out duration-300 hover:bg-discount-gradient">
                            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex-row`}>
                                <img src={star} alt="star icon" className="w-[50%] h-[50%] object-contain" />
                            </div>
                            <div className="flex-1 flex flex-col ml-3">
                                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                                    Rewards
                                </h4>
                                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                                    The best credit cards offer some tantalizing combinations of promotions and prizes.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6 rounded-[20px] mb-6 transition ease-in-out duration-300 hover:bg-discount-gradient">
                            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex-row`}>
                                <img src={sheild} alt="star icon" className="w-[50%] h-[50%] object-contain" />
                            </div>
                            <div className="flex-1 flex flex-col ml-3">
                                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                                    100% Secured
                                </h4>
                                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                                    We take proactive steps make sure your information and transactions are secure.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row p-6 rounded-[20px] mb-6 transition ease-in-out duration-300 hover:bg-discount-gradient">
                            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex-row`}>
                                <img src={send} alt="star icon" className="w-[50%] h-[50%] object-contain" />
                            </div>
                            <div className="flex-1 flex flex-col ml-3">
                                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                                    Balance Transfer
                                </h4>
                                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                                    A balance transfer credit card can save you a lot of money in interest charges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
