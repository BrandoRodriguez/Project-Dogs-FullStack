import './LandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import btn from '../assets/images/book_now.png';
import github from '../assets/images/github.svg';

function LandingPage() {
    return (
        <>
            <div className='container-landing-page'>
                <div className='navegation absolute mx-auto ma-auto flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="@brandorodriguez" />
                    </Link>
                    <a className='btn_github' href="https://brandorodriguez.com/">
                        <img src={github} alt="@brandorodriguez" />
                    </a>
                </div>

                <div className='content_wrapper absolute'>
                    <span className='badge text-xs'>
                        <span>
                            new project
                        </span>
                        Dogs App
                    </span>
                    <h3>Love your pet like your pet does.</h3>
                    <Link className='btn' to="/home">
                        <img className='btn_img' src={btn} alt="btn" />
                    </Link>
                </div>
            </div>


        </>

    );
}

export default LandingPage;
