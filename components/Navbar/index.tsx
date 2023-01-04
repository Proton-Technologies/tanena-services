import Image from "next/image";
import { useState } from "react"
import { MdMenu } from "react-icons/md";
import styles from "./navbar.module.css"
import { useRouter } from "next/router";

type Link = 'home'|'warehouse'|'hostel'|'services'|'contact'
export const Navbar: React.FC<{ currentPage: Link }> = ({ currentPage }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const router = useRouter();
    
    return(
        <nav className="px-3 h-16 flex items-center relative w-full justify-between bg-background text-primary">
            <div className="flex items-center">
                <Image priority={true} width={50} height={60} src="/tanena-logo-1.png" alt="Tanena Logo"/>
                <h1 className="font-medium font-mono text-xl">TANENA SERVICES NIGERIA</h1>
            </div>
            <ul className={`${styles.links} ${menuOpen ? styles.open : null} w-1/3`}>
                <li className={`${currentPage === 'home' ? styles.active : null}`}>
                    Home
                </li>
                <li className={`${currentPage === 'warehouse' ? styles.active : null}`}>
                    Warehouse
                </li>
                <li className={`${currentPage === 'hostel' ? styles.active : null}`}>
                    Hostel
                </li>
                <li className={`${currentPage === 'services' ? styles.active : null}`}>
                    Services
                </li>
                <li className={`${currentPage === 'contact' ? styles.active : null}`}>
                    Contact Us
                </li>
            </ul>
            <MdMenu onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"/>
        </nav>
    )
}