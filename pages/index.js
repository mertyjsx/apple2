import Head from 'next/head'
import "../sass.scss"
import styles from '../styles/Home.module.css'
import ImageAnimation from "../components/ImageAnimation"
import Laptop from "../components/VideoAnimastion"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Navbar></Navbar>
    

      <main  >
       
        <ImageAnimation ></ImageAnimation>
      
   
</main>
    
    </div>
  )
}
