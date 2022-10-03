import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.scss'
import logo from '../public/logo.svg'

const links: { text: string; href: string }[] = [
    { text: 'Properties', href: '/properties' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
]

const Navbar = (): JSX.Element => {
    return (
        <nav className={styles.nav}>
            <Image src={logo} alt="Osprey logo" />

            {links.map((link, i) =>
                <Link href={link.href} key={i}>
                    <a className={styles.link}>
                        {link.text}
                    </a>
                </Link>
            )}
        </nav>
    )
}

export default Navbar
