import { GET_BREEDS, GET_BREED_DETAIL, 
    GET_TEMPERAMENTS, SEARCH_BREEDS, 
    SET_PAGE, SET_ORDER, SET_TEMPERAMENT} from '../actions/actions.js'

const initialState = {
    api_breeds: [],
    db_breeds: [],
    temperament: [],
    searchBreed: [],
    breedDetail: {},
    current_page: 0,
    current_order: 'ASC name',
    current_temperament: 'All'
}

export default function reducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                api_breeds: action.payload
            };

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperament: action.payload
            }

        case SEARCH_BREEDS:
            return {
                ...state,
                searchBreed: action.payload
            }

        case GET_BREED_DETAIL:
            return {
                ...state,
                breedDetail: action.payload
            }

        case SET_PAGE:
            return {
                ...state,
                current_page: action.payload
            }
        
        case SET_ORDER:
            return {
                ...state,
                current_order: action.payload
            }

        case SET_TEMPERAMENT:
            return {
                ...state,
                current_temperament: action.payload
            }

        default: return state
    }

}