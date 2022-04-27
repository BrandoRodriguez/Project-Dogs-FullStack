
import { fetchAllDogs, fetchDogById, fetchAllTemperaments, fetchDogbyName } from '../services/index.js'
import { GET_BREEDS, GET_BREED_DETAIL, GET_TEMPERAMENTS, SEARCH_BREEDS, SET_ORDER, SET_PAGE, SET_TEMPERAMENT } from '../actions/actions.js'

export const getBreeds = () => {
    return async function(dispatch){
        let all_dogs = await fetchAllDogs()
        dispatch({  type: GET_BREEDS, payload: all_dogs  })
        dispatch({  type: SEARCH_BREEDS, payload: all_dogs  })
    }
}

export function getBreedDetail(id) {
    return async function (dispatch) {      
        let data = await fetchDogById(id)
        dispatch({type: GET_BREED_DETAIL, payload: data})
    }
}

export function searchBreeds(name){
    return async function(dispatch) {
        let perro = await fetchDogbyName(name)
        dispatch({type: SEARCH_BREEDS, payload: perro})
    }
}

export const getTemperaments = () => {
    return async function(dispatch){
        let all_temperaments = await fetchAllTemperaments()
        dispatch({type: GET_TEMPERAMENTS, payload: all_temperaments})
    }
}

export const setPage = (page) => {
    return function (dispatch){
        dispatch({type: SET_PAGE, payload: page})
    }
}

export const setOrder = (order) => {
    return function (dispatch){
        dispatch({type: SET_ORDER, payload: order})
    }
}

export const setTemperament = (temperament) => {
    return function (dispatch){
        dispatch({type: SET_TEMPERAMENT, payload: temperament})
    }
}

