import React, { useEffect } from 'react'
import styles from '../style.js'
import bill from '../assets/bill.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const indexItems = document.querySelector('.index-items');

export default function Billing() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className={`${styles.boxWidth}`}>
            <section id="products" className={`${styles.paddingX} flex min-[1060px]:flex-row flex-col-reverse sm:py-16 py-6`}>
                <div data-aos="fade-up" className={`${styles.flexCenter} flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
                    <img src={bill} alt="Bill Pic" className="w-[100%] h-[100%] relative z-[2] index-items" />
                    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                    <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
                </div>
                <div data-aos="fade-down" className={`${styles.flexStart} flex-1 flex-col`}>
                    <h2 className="font-poppins font-semibold text-[40px] min-[480px]:text-[48px] text-white min-[480px]:leading-[76.8px] leading-[66.8px] w-full">
                        Easily control your<br className="sm:block hidden" /> billing & invoicing.
                    </h2>
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque exercitationem debitis. Tempore molestias consequatur harum.
                    </p>
                    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                        <img src={apple} alt="apple app store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                        <img src={google} alt="google play store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                    </div>
                </div>
            </section>
        </div>
    )
}
