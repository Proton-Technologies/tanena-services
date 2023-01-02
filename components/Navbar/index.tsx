import Image from "next/image";
import { useState } from "react"
import { MdMenu } from "react-icons/md";
import styles from "./navbar.module.css"

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return(
        <nav className="px-3 h-16 flex items-center relative w-full justify-between bg-background text-white">
            <div className="flex items-center">
                <Image priority={true} width={50} height={60} src="/tanena-logo-1.png" alt="Tanena Logo"/>
                <h1 className="font-medium font-mono text-xl">TANENA SERVICES NIGERIA</h1>
            </div>
            <ul className={`${styles.links} ${menuOpen ? styles.open : null} w-1/3`}>
                <li>Home</li>
                <li>Warehouse</li>
                <li>Hostel</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
            <MdMenu onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"/>
        </nav>
    )
}