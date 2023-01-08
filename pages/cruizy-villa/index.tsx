import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import { MdArrowDownward, MdLocationPin } from "react-icons/md";
import { Button } from "../../components/Button";
import Head from "next/head";
import Image from "next/image";
import { IMAGES } from "./images";
import { IoHomeSharp, IoDiceSharp, IoTvSharp, IoFlashSharp, IoWaterSharp } from "react-icons/io5";
import { FrequentlyAskedQuestion } from "../../components/FAQ";
import { FAQ } from "./faq";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { useState } from "react";
import styles from "./cruizy-villa.module.css";
import { Input } from "../../components/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";


const CruizyVillaPage: NextPage = () => {
    const [bookNowModal, setBookNow] = useState<boolean>(false);
    const [reserveRoomModal, setReserveRoom] = useState<boolean>(false);
    const [imageModal, setImageModal] = useState<boolean>(false);

    return(
        <main>
            <Head>
                <title>Cruizy Villa</title>
            </Head>

            <Navbar currentPage="hostel"/>

            <section className="h-[80vh] flex">
                <div className="pt-4 md:pt-6 px-2 md:px-4 md:w-3/5">
                    <h3 className="text-lg md:text-2xl">
                        CRUIZY VILLA  is a well reserved hostel building owned by 
                        Tanena Services Nigeria. Cruizy Villa been an intelligent 
                        quotient building center seeks to provide a comfortable and 
                        scenery environment for Cognitive and Psychomotor enhancement
                    </h3>

                    <a href="#explore">
                        <button 
                            title="Explore Cruizy Villa"
                            className='flex items-center px-5 gap-2 mt-4 
                            font-semibold py-2 rounded-[30px] bg-primary
                            text-white md:w-[150px] justify-center'
                        >
                            Explore
                            <MdArrowDownward size={20}/>
                        </button>
                    </a>
                </div>

                <div className="hidden md:block p-3">
                    <img className="rounded-lg h-full" src="/images/tanena-backdrop.jpg" alt="Cruizy Villa"/>
                </div>

            </section>

            <section id="explore" className={`flex flex-col md:flex-row md:h-[80vh] ${styles.introSection}`}>
                <img className="rounded-none w-full md:rounded-md md:w-2/5" src="/images/tanena-main.jpg" alt="cruizy-villa"/>

                <div className="text-primary md:text-white md:ml-12 md:flex-[2]">
                    
                    <div className="w-full px-2 md:px-4 my-2">
                        <h3 className="font-semibold text-lg md:text-4xl">Cruizy Villa</h3>
                        
                        <span className="flex items-center my-2 gap-2">
                            <MdLocationPin className="text-primary"/>
                            <p>Portharcourt, Rivers State</p>
                        </span>

                        <span className="h-fit w-full my-2 md:w-3/5 flex items-center justify-between">
                            <Button 
                                className="w-[45%] py-3 justify-center" 
                                onClick={() => setBookNow(true)}
                            >
                                Book Now
                            </Button>

                            <Button 
                                variant="outlined"
                                className="w-[45%] py-3 justify-center"
                                onClick={() => setReserveRoom(true)}
                            >
                                Reserve Now
                            </Button>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <h2 className="font-medium text-lg md:text-2xl">
                            Amenities
                        </h2>
                        <ul className="list">
                            <li className="flex items-center gap-4 my-2">
                                <IoFlashSharp size={25}/>
                                <p>Constant Power Supply</p>
                            </li>
                            <li className="flex items-center gap-4 my-2">
                                <IoDiceSharp size={25}/>
                                <p>Variety of Games</p>
                            </li>
                            <li className="flex items-center gap-4 my-2">
                                <IoTvSharp size={25}/>
                                <p>TV Viewing Center</p>
                            </li>
                            <li className="flex items-center gap-4 my-2">
                                <IoWaterSharp size={25}/>
                                <p>Constant Water Supply</p>
                            </li>
                            <li className="flex items-center gap-4 my-2">
                                <IoHomeSharp size={25}/>
                                <p>Self Contain and Open Hostel</p>
                            </li>
                        </ul>
                    </div>


                </div>
            </section>

            <section className="px-2 my-2 md:py-4">
                <h2 className="font-medium text-lg md:text-2xl">
                    Gallery
                </h2>
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={2.5}
                    freeMode={true}
                    scrollbar={true}
                    modules={[FreeMode, Scrollbar]}
                >
                {
                    IMAGES.map((path) => {
                        return(
                        <>
                            <SwiperSlide onClick={() => setImageModal(true)} key={path} className="overflow-hidden mr-3">
                                <img className="w-32 h-20 md:w-[90%] object-cover md:h-[250px] rounded-md" src={path} alt={path}/>
                            </SwiperSlide>

                            <Modal key={path} isOpen={imageModal} onDismiss={() => setImageModal(false)}>
                                <img className="w-full" src={path} alt={path} />
                            </Modal>

                        </>
                        )
                    })
                }
                </Swiper>
            </section>

            <section className="px-2 my-3 md:py-4 md:hidden">
                <h2 className="font-medium text-lg md:text-2xl">
                    Amenities
                </h2>
                <ul className="list">
                    <li className="flex items-center gap-4 my-2">
                        <IoFlashSharp size={25}/>
                        <p>Constant Power Supply</p>
                    </li>
                    <li className="flex items-center gap-4 my-2">
                        <IoDiceSharp size={25}/>
                        <p>Variety of Games</p>
                    </li>
                    <li className="flex items-center gap-4 my-2">
                        <IoTvSharp size={25}/>
                        <p>TV Viewing Center</p>
                    </li>
                    <li className="flex items-center gap-4 my-2">
                        <IoWaterSharp size={25}/>
                        <p>Constant Water Supply</p>
                    </li>
                    <li className="flex items-center gap-4 my-2">
                        <IoHomeSharp size={25}/>
                        <p>Self Contain and Open Hostel</p>
                    </li>
                </ul>
            </section>

            <section className="px-2 md:py-4 gap-2 md:gap-[10px]">
                <h3 className="font-medium text-lg md:text-2xl my-2">
                    Packages
                </h3>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                    <article>
                        <img src="/images/tanena-2.jpg" alt=""/>
                        <h4 className="font-medium">Room of 4</h4>
                        <p className="">N500,000 per year</p>
                    </article>
                    <article>
                        <img src="/images/tanena-2.jpg" alt=""/>
                        <h4>Room of 4</h4>
                        <p>N500,000 per year</p>
                    </article>
                    <article>
                        <img src="/images/tanena-2.jpg" alt=""/>
                        <h4>Room of 4</h4>
                        <p>N500,000 per year</p>
                    </article>
                </div>
            </section>

            <section className="text-center my-3">
                <h2 className="font-medium text-lg md:text-2xl">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col items-center w-full h-max">
                {
                    FAQ.map((faq, index) => (
                        <FrequentlyAskedQuestion key={index} {...faq}/>
                    )) 
                }
                </div>
            </section>
            <Footer/>

            <Modal isOpen={bookNowModal} onDismiss={() => setBookNow(false)}>
                <h1>Hello</h1>
                <form>
                    <Input labelName="Full Name" placeholder="Enter your full name"/>
                    <Input labelName="Phone Number" placeholder="Enter your phone number"/>
                    <Input labelName="Full Name" placeholder="Enter your full name"/>
                    <Button>
                        Submit
                    </Button>
                </form>
            </Modal>
        </main>
    )
}

export default CruizyVillaPage;