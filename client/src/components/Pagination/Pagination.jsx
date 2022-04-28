import './Pagination.css'
import { useDispatch, useSelector } from "react-redux";
import {setPage} from '../../redux/actions/index'

function Pagination() {

    const dispatch = useDispatch()
    const { searchBreed, current_page} = useSelector((state) => state);

    try{
        let element_active = document.querySelector(".active")
        element_active.className = 'prev';

        let element = document.getElementById(current_page)
        element.className = 'active'
    }
    catch(err){
    }

    const movePage = (e) => {
        e.preventDefault();

        if (e.target.className === 'prev'){

            if (current_page !== 0)
                dispatch(setPage(parseInt(current_page) - 1))

        }
        else if (e.target.className === 'next'){

            if (current_page !== searchBreed.length - 1)
                dispatch(setPage(parseInt(current_page) + 1))

        }
    }

    const changePage = (e) => {
        e.preventDefault();
        dispatch(setPage(parseInt(e.target.id)))
    }

    return (
        <>
            <div className='pagination'>
                <ul>
                    <li>
                        <a href="/" className="prev" onClick={movePage}>
                            Previous
                        </a>

                        {
                            searchBreed.map( (dog_part, index) => {
                                
                                if (index === current_page){
                                    return <a id={index} key= {index} href="/" className='active' onClick={changePage}>
                                    {index+1}
                                    </a>
                                }

                                return <a id={index} key= {index} href="/" className='prev' onClick={changePage}>
                                        {index+1}
                                        </a>
                            })
                        }

                        <a href="/" className="next" onClick={movePage}>Next</a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Pagination;