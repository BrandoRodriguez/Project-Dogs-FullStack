import './Pagination.css'
import { useDispatch, useSelector } from "react-redux";
import slice_dogs from './functions'
import {setPage} from '../../redux/actions/index'

function Pagination() {

    const dispatch = useDispatch()

    const { searchBreed, current_page} = useSelector((state) => state);

    let all_dogs_sliced = slice_dogs(searchBreed)
    
    console.log('CURRENT PAGE', current_page)

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

    const changePage = (e) => {
        e.preventDefault();
        dispatch(setPage(e.target.id))
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