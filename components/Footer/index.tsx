import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer: React.FC = () => {
    return(
        <footer className="p-3 md:p-5 bg-lightblue text-white flex flex-col md:grid md:grid-cols-[50%_repeat(2,_1fr)]">
            <div>
                <h2 className="font-mono text-xl">TANENA SERVICES NIGERIA</h2>
                <p className="font-sans text-lg">Email: tanenaservices@gmail.com</p>
                <p>Opening Times: Mon-Fri (9am-6pm)</p>

                <div className="flex items-center w-4/5 justify-between">
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

                <div>
                    <h2>Enquiry</h2>
                    <ul className="list-none p-0 m-0">
                        <li className="flex items-center">
                            <FaPhone/>
                            <p>080527256887</p>
                        </li>
                        <li className="flex items-center">
                            <FaPhone/>
                            <p>080527256887</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:block">
                <h3>Products</h3>
                <ul className="list">
                    <li>Carbonated Drinks</li>
                    <li>Beers</li>
                    <li>Ciders</li>
                    <li>Wine</li>
                </ul>
            </div>
            <div className="hidden md:block">
                <h3>Company</h3>
                <ul className="list">
                    <li>About</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </footer>
    )
}