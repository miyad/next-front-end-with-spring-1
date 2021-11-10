import {useRouter} from "next/router";
export const getStaticPaths = async () => {
    const server_url = process.env.NEXT_PUBLIC_BACKEND_SERVER;
    const res = await fetch(`${server_url}/getPersons`);
    const data = await res.json();
    const paths = data.map(product => ({
        params: {
            id: product.id.toString()
        }
    }));
   return {
       paths,
       fallback: false
    }
}

export const getStaticProps = async (context) =>{

    const id = context.params.id;
    console.log('static props:', id);
    const server_url = process.env.NEXT_PUBLIC_BACKEND_SERVER;
    const response = await fetch(`${server_url}/getPerson/${id}`);
    const data = await response.json();
    return {
        props: {
            person: data
        }
    }
}

const Home = ({person}) => {
    const router = useRouter();
    console.log(router.query.id);
   // console.log(router.query)
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
            <p>{person.fullName}</p>
        </div>
    );
};

export default Home;
