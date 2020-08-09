import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImageAnimation from "../components/ImageAnimation"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
      <div className="main-title justify-start">
        <h1 className="grey-title">
        Retina Ekran
        </h1>
        <h1 className={styles.title}>
        Büyük ve parlak.
        </h1>
        <h1 className={styles.title}>
        Fikirleriniz gibi.
        </h1>
        </div>
        <ImageAnimation ></ImageAnimation>
      

</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
       By orkunmertgs41@gmail.com
        </a>
      </footer>
    </div>
  )
}
