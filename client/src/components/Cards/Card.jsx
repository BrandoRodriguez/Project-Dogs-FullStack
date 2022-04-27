import CardCss from './Card.module.css';
import { Link } from 'react-router-dom';

function Card(props) {

    return (
        <>
            <Link to={`/Detail/${props.id}`} >
                <div className={CardCss.card}>
                    <img className={CardCss.img}
                        src={props.image}
                        alt="@brandorodriguez"
                    />
                    <div className={CardCss.description}>
                        <h2 className={CardCss.h3_card}>{props.name}</h2>
                        <div className={CardCss.type}>
                            <span className={CardCss.type_background}>Temperaments: {props.temperament}</span>
                            <span className={CardCss.type_background}>Weight: {props.weight}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
