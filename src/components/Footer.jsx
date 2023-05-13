import React, { useState } from 'react';
import Modal from './ModalForm';
import styles from '../style.js'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export default function Footer() {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
            <section className={`${styles.flexCenter} sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <div className="flex-1 flex flex-col">
                    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">Let’s try our service now!</h2>
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                    <button onClick={handleOpenModal} type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none undefined rounded-[10px]">Get Started</button>
                    <Modal showModal={showModal} closeModal={handleCloseModal} />
                </div>
            </section>
            <section className={`${styles.flexCenter} sm:py-16 py-6 flex-col`}>
                <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                    <div className="flex-1 flex flex-col justify-start mr-10">
                        <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
                        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]">A new way to make the payments easy, reliable and secure.</p>
                    </div>
                    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                        <div className="flex flex-col md:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Useful Links</h4>
                            <ul className="list-none mt-4">
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Content</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">How it Works</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Create</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Explore</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">Terms & Services</li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Community</h4>
                            <ul className="list-none mt-4">
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Help Center</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Partners</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Suggestions</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Blog</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">Newsletters</li>
                            </ul>
                        </div>
                        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">Partner</h4>
                            <ul className="list-none mt-4">
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">Our Partner</li>
                                <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">Become a Partner</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${styles.flexCenter} w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]`}>
                    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2023 HooBank. All Rights Reserved.</p>
                    <div className="flex flex-row md:mt-0 mt-6">
                        <img src={instagram} alt="social-media-1" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                        <img src={facebook} alt="social-media-2" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                        <img src={twitter} alt="social-media-3" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                        <img src={linkedin} alt="social-media-4" className="w-[21px] h-[21px] object-contain cursor-pointer mr-0" />
                    </div>
                </div>
            </section>
        </div>
    )
}
