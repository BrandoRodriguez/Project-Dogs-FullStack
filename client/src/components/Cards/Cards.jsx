import CardsCss from './Cards.module.css'
import Card from './Card.jsx'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds } from "../../redux/actions/index.js";
import {slice_dogs} from './functions'

export default function Cards() {

    const dispatch = useDispatch();
    const { api_breeds, searchBreed} = useSelector((state) => state);

    let perros_to_show = []

    // all_dogs_sliced = slice_dogs()

    // ============================================================================================

    // const [show, setShow] = useState({
    //     slice_array: [],
    //     current_page: 0
    // });

    // 

    // setShow( prevState => {
    //     return { ...prevState, slice_array: new_array } ;
    // })


// =======================================================================================

    return (
        <>
            {console.log('PERROS MOSTRAR')}
            {console.log(searchBreed)}
            <ul className={CardsCss.column_ul}>
                { searchBreed &&
                    searchBreed.map((e) => {
                        return (
                            <Card
                                key={e.id}
                                name={e.name}
                                image={e.image}
                                temperament={e.temperament}
                                id={e.id}
                            />
                        );
                    })}
            </ul>
        </>

    );
}
