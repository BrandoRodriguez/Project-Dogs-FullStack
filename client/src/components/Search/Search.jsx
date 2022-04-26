import SearchCss from './Search.module.css';
import SearchImg from '../../assets/images/search.svg';
import { searchBreeds, setPage} from "../../redux/actions/index";
import { useDispatch } from "react-redux";

export default function Search() {

    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('entrando en search')
        let input = e.target.querySelector('input').value
        dispatch(searchBreeds(input))
        // dispatch({type: 'SET_PAGE', payload: 0})
        dispatch(setPage(0))
    }

    return (
        <div>
            <div className={SearchCss.search_form}>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className={SearchCss.label}>
                            <span className={SearchCss.icon}>
                                <img src={SearchImg} alt="@brandorodriguez" />
                            </span>
                            <input className={SearchCss.input}
                                type="text"
                                id="text"
                                placeholder="Search..."
                                autoComplete='off'
                            />
                        </label>
                    </div>
            
                    <button type='submit'> SEARCH</button>
                </form>

            </div>
        </div>
    );
}
