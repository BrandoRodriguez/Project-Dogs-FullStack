import CardsCss from './Cards.module.css'
import Card from './Card.jsx'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds } from "../../redux/actions/index.js";

export default function Cards() {

    const dispatch = useDispatch();

    const { api_breeds} = useSelector((state) => state);


  




    useEffect(() => {
        dispatch(getBreeds());
    }, [dispatch]);

    // ============================================================================================

    // const [show, setShow] = useState({
    //     slice_array: [],
    //     current_page: 0
    // });

    // slice_dogs()



// =======================================================================================

    return (
        <>
            <ul className={CardsCss.column_ul}>
                { api_breeds &&
                    api_breeds.map((e) => {
                        return (
                            <Card
                                key={e.id}
                                name={e.name}
                                image={e.image}
                                temperament={e.temperament}
                                weight={e.weight}
                                id={e.id}
                            />
                        );
                    })}
            </ul>
        </>

    );
}
