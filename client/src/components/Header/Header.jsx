import HeaderCss from './Header.module.css';
import Nav from "../Navbar/Nav.jsx";
// import Search from '../Search/Search.jsx';
import Filter from '../Filters/Filter.jsx';
import Button from '../Button/Button.jsx';

function Header() {
    return (
        <>
            <div className={HeaderCss.header}>
                <Nav/>
                <div className={HeaderCss.ctn_filter}>
                    <Filter/>
                    <Button/>
                </div>                
            </div>
        </>
    );
}

export default Header;