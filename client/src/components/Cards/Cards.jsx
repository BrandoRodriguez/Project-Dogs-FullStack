import CardsCss from './Cards.module.css'
import Card from './Card.jsx'
import { useSelector } from "react-redux";
import slice_dogs from './functions'

export default function Cards() {

    const { searchBreed, current_page } = useSelector((state) => state);

    let all_dogs_sliced = slice_dogs(searchBreed)
    let show_dogs = all_dogs_sliced[current_page]
    
    return (
        <>
            <ul className={CardsCss.column_ul}>
                { show_dogs &&
                    show_dogs.map((e) => {
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
