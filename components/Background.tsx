import Image, { ImageProps } from 'next/image'

import styles from '../styles/Background.module.scss'

interface Props {
    src: ImageProps['src']
    alt: ImageProps['alt']
}

const Background = (props: Props): JSX.Element => {
    return (
        <div className={styles.image}>
            <Image
                {...props}
                alt="Aerial of property"
                layout="fill"
                objectFit="cover"
                quality={100}
                placeholder="empty"
            />
        </div>
    )
}

export default Background
