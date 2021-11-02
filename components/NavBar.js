import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image  src="/tvaLogo.png" width={220} height={120} />
            </div>
            <div style={{padding: '10px'}}>
                <Link href="/"><a>Alert</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/rockon"><a>Variants</a></Link>
            </div>
            
            
        </nav>
     );
}
 
export default NavBar;