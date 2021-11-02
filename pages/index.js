import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <Head>
        <title>TVA | Alert</title>
        <meta name="keywords" content="tva" />
      </Head>
      <div className={styles.imgcon}>
        <h1 className={styles.warning}>
          WARNING !
          </h1>
        <Image src="/loki.png" width={250} height={200} className={styles.photo}/>
        <h1 className={styles.warning}>
        Variant - L1130
          </h1>
        <p className={styles.text}>The Variant - L1130 known as "Loki" has been escaped from TVA. He is the God of Mischief, 
        who bickers with his brother Thor and tries to take over Asgard, as well as Earth. But when he steals the Tesseract during the Time Heist in Avengers.
        Find him immediately!!</p>
        
        <div>
        <Link href="/rockon">
          <a className={styles.btn}>His Variants Details</a>
        </Link>
        <Link href="/404">
          <a className={styles.btn}>Track Current Location</a>
        </Link>
        </div>
        
        
      </div>
    </>
  )
}
