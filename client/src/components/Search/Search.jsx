import SearchCss from './Search.module.css';
import SearchImg from '../../assets/images/search.svg';
import { searchBreeds, getBreeds } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '../Button/Button.jsx';

export default function Search() {

    const [input, setInput] = useState("");

    const {searchBreed} = useSelector((state) => state)
    console.log(searchBreed)

    const dispatch = useDispatch();

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getBreeds());
    }, [dispatch]);

    useEffect(() => {
        dispatch(searchBreeds());
    }, [dispatch, input]);


    

    function search(input) {
        dispatch(searchBreeds(input))
    }


    return (
        <div className={SearchCss.search_form}>
            <form className={SearchCss.container_search} onSubmit={(e) => handleSubmit(e)}>
         
                    <label className={SearchCss.label}>
                        <span className={SearchCss.icon}>
                            <img src={SearchImg} alt="@brandorodriguez" />
                        </span>
                        <input className={SearchCss.input}
                            type="text"
                            id="text"
                            placeholder="Search..."
                            autoComplete='off'
                            value={input}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                <Button type='submit' onClick={() => search(input)} 
                name='Search'           
                />
            </form>
        </div>
    );
}
