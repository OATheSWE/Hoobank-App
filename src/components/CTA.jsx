import React, { useEffect } from 'react'
import styles from '../style.js'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTA() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

  return (
    <div className={`${styles.boxWidth}`}>
        <section className={`${styles.paddingX} ${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                <div data-aos="fade-right" className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                    <img src={airbnb} alt="Airbnb" className="sm:w-[192px] w-[100px] object-contain transition-opacity duration-300 opacity-[0.7] hover:opacity-100 cursor-pointer" />
                </div>
                <div data-aos="fade-right" className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] delay-200`}>
                    <img src={binance} alt="Binance" className="sm:w-[192px] w-[100px] object-contain transition-opacity duration-300 opacity-[0.7] hover:opacity-100 cursor-pointer" />
                </div>
                <div data-aos="fade-right" className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] delay-500`}>
                    <img src={coinbase} alt="Coinbase" className="sm:w-[192px] w-[100px] object-contain transition-opacity duration-300 opacity-[0.7] hover:opacity-100 cursor-pointer" />
                </div>
                <div data-aos="fade-right" className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] delay-[800ms]`}>
                    <img src={dropbox} alt="Dropbox" className="sm:w-[192px] w-[100px] object-contain transition-opacity duration-300 opacity-[0.7] hover:opacity-100 cursor-pointer" />
                </div>
            </div>
        </section>
    </div>
  )
}