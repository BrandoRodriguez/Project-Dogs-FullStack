import SearchCss from './Search.module.css';
import SearchImg from '../../assets/images/search.svg';

import { searchBreeds } from "../../redux/actions/index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Search(){

    const [ input, setInput]  = useState("");

    const { searchBreed } = useSelector((state) => state)

    const dispatch = useDispatch();

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    // useEffect(() => {

    //     console.log('montado en el dom 1')

    // }, [])

    // useEffect(() => {

    //     console.log('montado en el dom 2', [input])

    // }, [input])


    // useEffect(() => {

    //     return () => {
    //         console.log("el cmpt fue desmontado")
    //     }

    // }, [])



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
                                value={input}
                                onChange={(e) => handleChange(e)
                                }
                            />
                        </label>
                    </div>
                    <button type='submit' onClick={() => dispatch(searchBreeds(input))}>SEARCH</button>
                </form>

                <ul>
                    {
                        searchBreed && searchBreed.map((e) => {
                            return (
                                <div key={e.id}>
                                    <Link to={`/detail/${e.id}`}>
                                        <p>{e.name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
