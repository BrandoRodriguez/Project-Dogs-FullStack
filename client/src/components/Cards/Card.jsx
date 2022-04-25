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
                        <h3 className={CardCss.h3}>{props.name}</h3>
                        <div className={CardCss.type}>
                            <span className={CardCss.type_background}>{props.temperament}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
