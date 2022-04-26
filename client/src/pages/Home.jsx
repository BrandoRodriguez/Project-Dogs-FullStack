import './Home.css'
import Cards from '../components/Cards/Cards.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'
import Search from '../components/Search/Search.jsx'
import { useDispatch } from 'react-redux';
import { useEffect } from "react"
import { getBreeds } from '../redux/actions/index'

function Home() {

    console.log('rederizando home')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreeds());
    }, [dispatch]);

    return (
        <>
            <div className='home'>
                <div className='container_home'>
                    <Search />
                    <section className='cards-section'>
                        <Cards />
                    </section>
                    <Pagination />
                </div>
            </div>
        </>

    );
}

export default Home;