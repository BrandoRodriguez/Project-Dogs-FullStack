import SearchCss from './Search.module.css';
import SearchImg from '../../assets/images/search.svg';
// import Cards from '../Cards/Cards.js';

import { searchBreeds, getBreeds } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

export default function Search() {

    const [input, setInput] = useState("");

    const state = useSelector((state) => state)
    console.log('estos son los estados' , state)

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



    function search(input){
        console.log('entrando aqui', [input])
        dispatch(searchBreeds(input))
        state.perrosMostrar = state.searchBreed
    }

    console.log('estado nuevo', state.perrosMostrar)



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

                    <button type='submit' onClick={() => search(input)}>SEARCH</button>


                    {/* {input !== "" ? (
                            state.perros_Mostrar = state.searchBreed
                    ) : (
                            state.perros_Mostrar = state.api_breeds
                    )} */}


                </form>

                {/* <ul>
                    {
                        searchBreed && searchBreed.map((e) => {
                            return (
                                <div key={e.id}>
                                    <Link to={`/detail/${e.id}`}>
                                        <Cards 
                                            name={e.name}
                                        />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </ul> */}
            </div>
        </div>
    );
}
