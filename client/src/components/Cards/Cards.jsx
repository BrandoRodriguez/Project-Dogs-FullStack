import CardsCss from './Cards.module.css'
import Card from './Card.jsx'
import { useSelector } from "react-redux";

export default function Cards() {

    const { searchBreed, current_page } = useSelector((state) => state);

    let show_dogs = searchBreed[current_page]

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
                                weight= {e.weight}
                            />
                        );
                    })}
            </ul>
        </>

    );
}
