import Image from "next/image";
import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri";
import styles from "./navbar.module.css"
import { useRouter } from "next/router";
import Link from "next/link";

type Link = 'home'|'warehouse'|'hostel'|'services'|'contact'
export const Navbar: React.FC<{ currentPage: Link }> = ({ currentPage }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const router = useRouter();
    
    return(
        <nav className="px-3 h-16 flex items-center w-full justify-between bg-background text-primary">
            <div className="flex items-center">
                <Image priority={true} width={50} height={60} src="/tanena-logo-1.png" alt="Tanena Logo"/>
                <h1 className="font-medium hidden md:block font-mono text-xl">TANENA SERVICES NIGERIA</h1>
            </div>
            <ul className={`${styles.links} ${menuOpen ? styles.open : null} w-1/3`}>
                <li className={`${currentPage === 'home' ? styles.active : null}`}>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className={`${currentPage === 'warehouse' ? styles.active : null}`}>
                    <Link href={'/'}>Warehouse</Link>  
                </li>
                <li className={`${currentPage === 'hostel' ? styles.active : null}`}>
                <Link href={'/cruizy-villa'}>Hostel</Link>
                </li>
                <li className={`${currentPage === 'services' ? styles.active : null}`}>
                    <Link href={'/services'}>Services</Link>
                </li>
                <li className={`${currentPage === 'contact' ? styles.active : null}`}>
                    <Link href={'/contact-us'}>Contact Us</Link>
                </li>
            </ul>
            <RiMenu3Fill onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"/>
        </nav>
    )
}