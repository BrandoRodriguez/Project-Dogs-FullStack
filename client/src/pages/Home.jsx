import './Home.css'
import Cards from '../components/Cards/Cards.jsx';
import Pagination from '../components/Pagination/Pagination.jsx'
import Search from '../components/Search/Search.jsx'
import Filter from '../components/Filters/Filter.jsx'
import Button from '../components/Button/Button.jsx'
import Nav from '../components/Navbar/Nav.jsx'

function Home() {

    


    return (
        <>
            <div className='home'>
                <div className='container_home'>
                    <Nav/>
                    <div className='filters_section'>
                    <Search />
                    <Filter/>
                    <Button
                    name='Create Dog'
                    />
                    </div>
                    
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