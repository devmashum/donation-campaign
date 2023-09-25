
import { NavLink, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';



const Home = () => {

    const categories = useLoaderData();
    console.log(categories);


    return (

        <div className=' w-9/12 mx-auto'>
            <Banner categories={categories}></Banner>
        </div>
    )
}
export default Home;