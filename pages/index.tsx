import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'

import Background from '../components/Background'
import Navbar from '../components/Navbar'

import aerial from '../public/pictures/aerial.webp'

const Home: NextPage<{}> = () => {
    return (
        <>
            <Background src={aerial} alt="Aerial of property" />
            <Navbar />
        </>
    )
}

export default Home