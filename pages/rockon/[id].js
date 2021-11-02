export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(val => {
        return {
            params: { id: val.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { rockon: data }
    }
}

const Details = ({ rockon }) => {
    return ( 
        <div style={{backgroundColor: 'rgb(37, 18, 9)', padding: '20px', borderRadius: '5px'}}>
            <h1>{ rockon.name }</h1>
            <p>User name : { rockon.username }</p>
            <p>Street : { rockon.address.street }</p>
            <p>City : { rockon.address.city }</p>
        </div>
     );
}
 
export default Details;