import { NextPage } from 'next'

import styles from '../styles/404.module.scss'

const NotFound: NextPage = () => {
    return (
        <div className={styles.message}>
            <p><b>404 Not Found:</b> This osprey hasn&lsquo;t perched yet!</p>
        </div>
    )
}

export default NotFound