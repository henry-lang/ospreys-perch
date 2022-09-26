import Image, { ImageProps } from 'next/image'

import styles from '../styles/Background.module.scss'

interface Props {
    src: ImageProps['src'],
    alt: ImageProps['alt']
}

const Background = (props: Props): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Image {...props} layout="fill" objectFit="cover" quality={100} placeholder="blur" />
        </div>
    )
}

export default Background;