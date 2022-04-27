import './Filter.css'
import { useSelector, useDispatch } from 'react-redux'
import { setOrder, setTemperament } from '../../redux/actions/index'

function Filter() {

    const { temperament } = useSelector(state => state)
    const dispatch = useDispatch()

    function changeOrder(e) {
        console.log('cambiando orden')
        dispatch(setOrder(e.target.value))
    }

    function changeTemperament(e){
        console.log('cambiando temperamento')
        dispatch(setTemperament(e.target.value))
    }

    return (
        <div>
            <div className='ctn'>
                <div className='ctn_filter'>
                    <select className='filter' id='filter' name='name' onChange={changeOrder}>
                        <option>Order</option>
                        <option value='ASC name'>A-Z</option>
                        <option value='DESC name'>Z-A</option>
                        <option value='ASC weight'>Weight: Low to High</option>
                        <option value='DESC weight'>Weight: High to Low</option>
                    </select>

                    <select className='filter' name='name' onChange={changeTemperament}>
                        <option value='all'>Temperament</option>

                        {
                            temperament.map(temperament => {
                                return <option value={temperament.name} key={temperament.id}>{temperament.name}</option>
                            })
                        }

                    </select>

                </div>
                <div className='ctn_checkbox'>
                    <span>API</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <span>BD</span>
                </div>
            </div>

        </div>
    );

}

export default Filter;