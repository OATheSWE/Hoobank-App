import React, { useEffect } from 'react'
import styles from '../style.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Stats() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex justify-center items-start">
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.paddingX} flex flex-row flex-wrap sm:mb-20 mb-6 sm:mt-[-50px] lg:mt-[70px] mt-4`}>
          <div data-aos="fade-right" className="flex-1 flex gap-4 justify-start items-center font-poppins m-3">
            <h4 className="text-white font-semibold text-[30px] leading-[43px] min-[480px]:leading-[53px] min-[480px]:text-[40px]">
              3800+
            </h4>
            <p className="text-white text-[15px] leading-[21px] text-gradient uppercase min-[480px]:leading-[26px] min-[480px]:text-[20px]">user active</p>
          </div>
          <div data-aos="fade-right" className="flex-1 flex gap-4 justify-start items-center font-poppins m-3 delay-200">
            <h4 className="text-white font-semibold text-[30px] leading-[43px] min-[480px]:leading-[53px] min-[480px]:text-[40px]">
              230+
            </h4>
            <p className="text-white text-[15px] leading-[21px] text-gradient uppercase min-[480px]:leading-[26px] min-[480px]:text-[20px]">Trusted by Company</p>
          </div>
          <div data-aos="fade-right" className="flex-1 flex gap-4 justify-start items-center font-poppins m-3 delay-500">
            <h4 className="text-white font-semibold text-[30px] leading-[43px] min-[480px]:leading-[53px] min-[480px]:text-[40px]">
              $230M+
            </h4>
            <p className="text-white text-[15px] leading-[21px] text-gradient uppercase min-[480px]:leading-[26px] min-[480px]:text-[20px]">Transaction</p>
          </div>
        </section>
      </div>
    </div>
  )
}
