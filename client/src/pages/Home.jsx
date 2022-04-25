import './Home.css'
// import Header from '../components/Header/Header.jsx'
import Cards from '../components/Cards/Cards.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'
import Search from '../components/Search/Search.jsx'

function Home() {

    


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