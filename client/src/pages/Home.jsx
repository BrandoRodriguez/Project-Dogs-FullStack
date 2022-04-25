import './Home.css'
import Header from '../components/Header/Header.jsx'
import Cards from '../components/Cards/Cards.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'

function Home() {
    return (
        <>
            <Header />
            <section className='cards-section'>
                <Cards />
            </section>
            <Pagination />
        </>

    );
}

export default Home;