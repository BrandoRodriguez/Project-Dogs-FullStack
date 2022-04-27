import CardsCss from './Cards.module.css'
import Card from './Card.jsx'
import { useSelector } from "react-redux";

export default function Cards() {

    const { searchBreed } = useSelector((state) => state);

    return (
        <>
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
