import DetailsCss from './Detail.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreedDetail } from "../../redux/actions/index.js";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import flecha from '../../assets/images/flecha.svg'



function Detail() {

    const dispatch = useDispatch();

    const detail = useSelector((state) => state.breedDetail);


    let { id } = useParams();

    useEffect(() => {
        dispatch(getBreedDetail(id));
    }, [dispatch, id]);


    const bgpokemon = {
        backgroundImage:
            `url(${detail.image})`,
    };



    return (
        <>
            <div className='home'>
                <div className='container_home'>
                <div className={DetailsCss.hero_image_wrapper}>
                    <span style={bgpokemon} className={DetailsCss.dog_img}>
                    </span>
                </div>

                <div className={DetailsCss.content_wrapper}>
                    <Link to="/home">
                        <img className={DetailsCss.a} src={flecha} alt="" />
                    </Link>
                    <h2 className={DetailsCss.h2}>{detail.name}</h2>
                    <div>
                        <h3 className={DetailsCss.type_background}>Temperament:  {detail.temperament}</h3>
                        <h3 className={DetailsCss.type_background}>Life Span: {detail.life_span}</h3>
                        <h3 className={DetailsCss.type_background}>Weight: {detail.weight}</h3>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Detail;
