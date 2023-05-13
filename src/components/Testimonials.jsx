import React from 'react'
import styles from '../style.js'
import qoutes from '../assets/quotes.svg'
import people1 from '../assets/people01.png'
import people2 from '../assets/people02.png'
import people3 from '../assets/people03.png'

export default function Testimonials() {
    return (
        <div className={`${styles.boxWidth}`}>
            <section id="clients" className={`${styles.paddingX} flex flex-col sm:py-16 py-6 ${styles.flexCenter} relative`}>
                <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
                <div className={`w-full ${styles.flexCenter} min-[1060px]:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
                    <h1 className="font-poppins font-semibold text-[40px] min-[480px]:text-[48px] text-white min-[480px]:leading-[76.8px] leading-[66.8px] w-full max-[385px]:pr-5">
                        What people are <br className="sm:block hidden" /> saying about us.
                    </h1>
                    <div className="w-full min-[1060px]:mt-0 mt-6">
                        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                            Everything you need to accept card payments and grow your business anywhere on the planet.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
                    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition ease-in-out duration-300 hover:bg-discount-gradient">
                        <img src={qoutes} alt="double quotes" className="w-[42px] h-[27px] object-contain" />
                        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                        </p>
                        <div className="flex flex-row">
                            <img src={people1} alt="Person 1 Pic" className="h-[48px] w-[48px] rounded-full" />
                            <div className="flex flex-col ml-4">
                                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                                    Herman Jensen
                                </h4>
                                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition ease-in-out duration-300 hover:bg-discount-gradient">
                        <img src={qoutes} alt="double quotes" className="w-[42px] h-[27px] object-contain" />
                        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                            Money makes your life easier. If you're lucky to have it, you're lucky.
                        </p>
                        <div className="flex flex-row">
                            <img src={people2} alt="Person 2 Pic" className="h-[48px] w-[48px] rounded-full" />
                            <div className="flex flex-col ml-4">
                                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                                    Steve Mark
                                </h4>
                                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition ease-in-out duration-300 hover:bg-discount-gradient">
                        <img src={qoutes} alt="double quotes" className="w-[42px] h-[27px] object-contain" />
                        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                            It is usually people in the money business, finance, and international trade that are really rich.
                        </p>
                        <div className="flex flex-row">
                            <img src={people3} alt="Person 3 Pic" className="h-[48px] w-[48px] rounded-full" />
                            <div className="flex flex-col ml-4">
                                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                                    Kenn Gallagher
                                </h4>
                                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
