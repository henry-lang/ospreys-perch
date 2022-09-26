import Link from 'next/link'

import styles from '../styles/Navbar.module.scss'

const links: { text: string, href: string }[] = [
    { text: 'Properties', href: '/properties' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
]

const Navbar = (): JSX.Element => {
    return (
        <nav className={styles.nav}>
            {links.map((link, i) =>
                <Link className={styles.link} href={link.href} key={i}>{link.text}</Link>
            )}
        </nav>
    );
}

export default Navbar