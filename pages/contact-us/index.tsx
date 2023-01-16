import { NextPage } from "next";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Navbar } from "../../components/Navbar";

const ContactUsPage: NextPage = () => {
    return(
        <main>
            <Navbar currentPage={'contact'}/>
            <section className="flex flex-col px-2 md:flex-row items-center justify-around">
                <div>
                    <h1 className="text-darktext text-5xl md:text-7xl font-mono font-semibold">
                        CONTACT US 
                    </h1>
                    <p className="text-darktext text-md md:text-2xl">
                        Reach out to us, and we will get back to you soon.
                    </p>
                </div>
                <Image 
                    className="md:w-[450px] md:h-[350px]"
                    alt="Contact Us Illustration" 
                    loading="eager" 
                    src={'/images/contact-us.svg'}
                    width={300}
                    height={250}
                />
            </section>
            <section className="flex flex-col md:grid md:grid-cols-[80%_20%]">
                <div className="flex flex-col md:flex-row md:justify-around px-2 md:px-0">
                    <article className="w-full bg-zinc-50 mb-3 md:w-2/5 rounded-lg px-6 py-5 border-[1px] border-slate-300">
                        <h2>Hostel Manager</h2>
                        <ul className="p-0 m-0 list-none">
                            <li className="flex items-center justify-start gap-2 md:gap-3">
                                <MdEmail />
                                <span>08034568215</span>
                            </li>

                            <li className="flex items-center justify-start gap-2 md:gap-3">
                                <BsTelephoneFill />
                                <span>08034568215</span>
                            </li>

                            <li className="flex items-center justify-start gap-2 md:gap-3">
                                <FaWhatsapp />
                                <span>08034568215</span>
                            </li>
                        </ul>
                    </article>

                    <article className="w-full bg-zinc-50 md:w-2/5 rounded-lg px-6 py-5 border-[1px] border-slate-300">
                        <h2>Warehouse Manager</h2>
                        <ul className="p-0 m-0 list-none">
                            <li className="flex items-center justify-start gap-2 md:gap-3">
                                <MdEmail />
                                <span>08034568215</span>
                            </li>

                            <li className="flex items-center justify-start gap-2 md:gap-3">
                                <BsTelephoneFill />
                                <span>08034568215</span>
                            </li>

                            <li className="flex items-center justify-start gap-2 md:gap-3">
                                <FaWhatsapp />
                                <span>08034568215</span>
                            </li>
                        </ul>
                    </article>
                </div>
                <div className="px-2 my-3 md:px-0">
                    <ul className="list-none">
                        <li className="font-semibold text-xl">
                            CALL US
                        </li>
                        <li>08034568315</li>
                        <li>08034568315</li>
                        <li>08034568315</li>
                    </ul>

                    <ul className="list-none">
                        <li className="font-semibold text-xl">
                            OUR ADDRESS
                        </li>
                        <li>
                            Some Random Address, Portharourt, Rivers State.
                        </li>
                        
                    </ul>

                    <div className="flex items-center w-4/5 justify-between my-2">
                        <a href="" title="Our Facebook">
                            <FaFacebook size={30}/>
                        </a>
                        <a href="" title="Our Instagram">
                            <FaInstagram size={30}/>
                        </a>
                        <a href="" title="Our WhatsApp">
                            <FaWhatsapp size={30}/>
                        </a>
                        <a href="" title="Our Email">
                            <FaEnvelope size={30}/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default ContactUsPage;