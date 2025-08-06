import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const isActive = (path) => {
        return router.pathname === path;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.brand}>
                    <span className={styles.brandText}>Creator Circle</span>
                </Link>
                
                <button 
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></span>
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                    <li>
                        <Link 
                            href="/" 
                            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/about" 
                            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/blog" 
                            className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/write" 
                            className={`${styles.navLink} ${isActive('/write') ? styles.active : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Write
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/contact" 
                            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar