import SearchCss from './Search.module.css';
import SearchImg from '../../assets/images/search.svg';
import { searchBreeds, setPage} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {

    const dispatch = useDispatch();
    const { current_order, current_weight, current_temperament } = useSelector(state => state)

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('entrando en search')
        let input_dog = e.target.querySelector('input').value
        dispatch(searchBreeds(input_dog, current_order, current_weight, current_temperament))
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
