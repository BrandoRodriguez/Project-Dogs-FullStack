import './Home.css'
// import Header from '../components/Header/Header.jsx'
import Cards from '../components/Cards/Cards.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'
import Search from '../components/Search/Search.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react"
import { getBreeds } from '../redux/actions/index'
import { SEARCH_BREEDS } from '../redux/actions/actions'

function Home() {

    // console.log('rederizando home')

    const dispatch = useDispatch();
    const { api_breeds } = useSelector(state => state)

    useEffect(() => {
        dispatch(getBreeds());
    }, [dispatch]);

    useEffect(() => {
        dispatch({type: SEARCH_BREEDS, payload: api_breeds})
    }, [dispatch, api_breeds]);

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