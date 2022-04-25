import './Pagination.css'
import { useDispatch, useSelector } from "react-redux";
import slice_dogs from './functions'

function Pagination() {

    const dispatch = useDispatch()

    const { searchBreed, current_page} = useSelector((state) => state);

    console.log('CURRENT PAGE', current_page)

    let all_dogs_sliced = slice_dogs(searchBreed)

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
        console.log('moviendo pagina')
    }

    const setPage = (e) => {
        e.preventDefault();
        dispatch({type: 'SET_PAGE', payload: e.target.id})
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
                            all_dogs_sliced.map( (dog_part, index) => {
                                
                                if (index === current_page){
                                    return <a id={index} key= {index} href="/" className='active' onClick={setPage}>
                                    {index+1}
                                    </a>
                                }

                                return <a id={index} key= {index} href="/" className='prev' onClick={setPage}>
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