import React, { useState, useEffect } from 'react';
import styles from '../style.js';
import Discount from '../assets/Discount.svg';
import arrow from '../assets/arrow-up.svg';
import robot from '../assets/robot.png';
import Modal from './ModalForm';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Hero() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="flex justify-center items-start">
      <div className={`${styles.boxWidth}`}>
        <section id="home" className={`${styles.paddingX} flex flex-col lg:flex-row lg:gap-[120px] pt-6 sm:pt-[70px]`}>
          <div>
            <div className="flex flex-row py-[6px] items-center px-4 rounded-[10px] mb-2 bg-discount-gradient gap-4 max-w-[370px] md:gap-2">
              <img src={Discount} alt="discount" className="w-[32px] h-[32px]" />
              <p className="text-dimWhite text-[16px] leading-[30px] font-poppins"><span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account</p>
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex">
                <h1 className="flex-1 text-[52px] text-white font-semibold leading-[75px] sm:leading-[100px] sm:text-[72px] font-poppins">The Next <span className="text-gradient"><br />Generation</span></h1>
                <div className="md:mr-4 mr-0 hidden sm:flex mt-7">
                  <button onClick={handleOpenModal} type='button' className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]`}>
                    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                      <div className={`${styles.flexStart} flex-row`}>
                        <p className="font-semibold text-[18px] leading-[23px] mr-2 font-poppins">
                          <span className="text-gradient text-[18px]">Get</span>
                        </p>
                        <img src={arrow} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                      </div>
                      <div className="font-poppins font-semibold text-[18px] leading-[23px] font-poppins">
                        <span className="text-gradient">
                          Started
                        </span>
                      </div>
                    </div>
                  </button>
                  <Modal showModal={showModal} closeModal={handleCloseModal} />
                </div>
              </div>
              <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100px] leading-[75px] w-full lg:max-w-[450px]">Payment Method.</h1>
              <p className="font-poppins font-medium text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 mr-6 sm:mr-0 flex">
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className={`flex-1 ${styles.flexCenter} relative my-10 mr-[-25px] md:my-[60px] md:mr-[-70px] lg:mt-[-5px] lg:max-h-[530px] lg:max-w-[530px]`}>
            <img src={robot} alt="Robot Pic" className="w-[100%] h-[100%] z-[1] flex-1 animate-up-down" />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>
          <div className="sm:hidden">
            <button onClick={handleOpenModal} className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px] mx-auto`}>
              <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                  <p className="font-semibold text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient text-[18px] font-poppins">Get</span>
                  </p>
                  <img src={arrow} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </div>
                <div className="font-poppins font-semibold text-[18px] leading-[23px] font-poppins">
                  <span className="text-gradient">
                    Started
                  </span>
                </div>
              </div>
            </button>
            <Modal showModal={showModal} closeModal={handleCloseModal} />
          </div>


        </section>
      </div>
    </div>
  )
}
