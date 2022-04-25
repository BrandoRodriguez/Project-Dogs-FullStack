import SearchCss from './Search.module.css';
import SearchImg from '../../assets/images/search.svg';
// import Cards from '../Cards/Cards.js';
import { searchBreeds, getBreeds } from "../../redux/actions/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PERROS_MOSTRAR } from '../../redux/actions/actions.js'
import {fetchDogbyName} from '../../redux/services/index'

export default function Search() {

    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        let input = e.target.querySelector('input').value
        dispatch(searchBreeds(input))
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
