import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return ( 
        <div className="not-found">
            <h2>HEY Y'ALL !</h2>
            <Image src='/oops.png' width={400} height={300} />
            <h2>That page cannot be found</h2>
            <Link href="/"><a>Go back</a></Link>
        </div>
     ); 
}
 
export default NotFound;