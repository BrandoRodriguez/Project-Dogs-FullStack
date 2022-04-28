import './Home.css'
import Cards from '../components/Cards/Cards.jsx';
import Header from '../components/Header/Header.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'
import Search from '../components/Search/Search.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import { getBreeds, getTemperaments } from '../redux/actions/index'


function Home() {

    console.log('rederizando home')

    const dispatch = useDispatch();
    const {current_order, current_weight, current_temperament} = useSelector(state => state)

    useEffect(() => {
        dispatch(getBreeds(current_order, current_weight, current_temperament));
    }, [dispatch, current_order, current_weight, current_temperament]);

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    return (
        <>
            <div className='home'>
                <div className='container_home'>
                    <Header />
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