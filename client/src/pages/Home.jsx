import './Home.css'
import Cards from '../components/Cards/Cards.jsx';
import Header from '../components/Header/Header.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'
import Search from '../components/Search/Search.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import { getBreeds, getTemperaments} from '../redux/actions/index'
import { slice_dogs } from './functions'

function Home() {

    console.log('rederizando home')

    const dispatch = useDispatch();
    const {searchBreed} = useSelector(state => state)

    useEffect(() => {
        dispatch(getBreeds());
        let all_dogs_sliced = slice_dogs(searchBreed)
        dispatch({type: 'SEARCH_BREEDS', payload: all_dogs_sliced})
        dispatch(getTemperaments());


    }, [dispatch, searchBreed]);

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