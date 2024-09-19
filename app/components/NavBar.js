import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';


export default function NavBar() {
    return(
        <nav className={styles.navBar}>
            <h1 className={styles.logo}>
                <a>
                    <img  src="/logo.png" alt="logo image"/>
                </a>
            </h1>

            <ul>
                <li><Link href="#home">HOME</Link></li>
                <li><Link href="#product">PRODUCT</Link></li>
                <li><Link href="#about">ABOUT</Link></li>
                <li><Link href="#contact">CONTACT</Link></li>
            </ul>

            <div>
                login/register
            </div>
        </nav>

    )
}