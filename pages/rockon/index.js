import styles from '../../styles/Rockon.module.css'
import Head from "next/head";
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { rockon: data }
    }
}

const RockOne = ({rockon}) => {
    return ( 
        <>
        <Head>
            <title>TVA | Variants</title>
            <meta name="keywords" content="tva" />
        </Head>
        <div style={{padding: '20px'}}>
            <h1>L1130 Variants</h1>
            {rockon.map((val) => {
                return(
                    <Link href={'/rockon/' + val.id} key={val.id}>
                        <a className={styles.single}>
                            <h3>{ val.name }</h3>
                        </a>
                    </Link>
                )
            })}
        </div>
        </>
     );
}
 
export default RockOne;