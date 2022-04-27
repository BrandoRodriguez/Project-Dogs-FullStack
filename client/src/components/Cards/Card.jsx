import CardCss from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({id, image, name, temperament}) {

    return (
        <>
            <Link to={`/Detail/${id}`} >
                <div className={CardCss.card}>

                    <img className={CardCss.img}
                        src={image}
                        alt="@brandorodriguez"
                    />

                    <div className={CardCss.description}>
                        <h3 className={CardCss.h3}>{name}</h3>
                        <div className={CardCss.type}>
                            <span className={CardCss.type_background}>{temperament}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
