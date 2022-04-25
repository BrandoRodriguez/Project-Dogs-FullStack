import NavCss from './Nav.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

function Nav() {
    return (
        <>
            <div className={NavCss.ctn_nav}>
                <Link to="/">
                <img className={NavCss.logo} src={Logo} alt="@brandorodriguez" />
                </Link>
            </div>
        </>

    );
}

export default Nav;