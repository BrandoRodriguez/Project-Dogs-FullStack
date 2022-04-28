
import { fetchAllDogs, fetchDogById, fetchAllTemperaments, fetchDogbyName } from '../services/index.js'

import { slice_dogs, orderName, orderWeight, filter_temperament } from './functions'

import {
    GET_BREEDS, GET_BREED_DETAIL,
    GET_TEMPERAMENTS, SEARCH_BREEDS,
    SET_ORDER, SET_PAGE, SET_TEMPERAMENT,
    SET_SERVER
} from '../actions/actions.js'

export const getBreeds = (current_order, current_weight, current_temperament) => {
    return async function (dispatch) {

        let all_dogs = await fetchAllDogs()

        let filtering_dogs = orderName(all_dogs, current_order)
        filtering_dogs = orderWeight(filtering_dogs, current_weight)
        filtering_dogs = filter_temperament(filtering_dogs, current_temperament)
        filtering_dogs = slice_dogs(filtering_dogs)

        dispatch({ type: GET_BREEDS, payload: all_dogs })
        dispatch({ type: SEARCH_BREEDS, payload: filtering_dogs })

    }
}

export function getBreedDetail(id) {
    return async function (dispatch) {
        let data = await fetchDogById(id)
        dispatch({ type: GET_BREED_DETAIL, payload: data })
    }
}

export function searchBreeds(name, current_order, current_weight, current_temperament ) {
    return async function (dispatch) {

        let all_dogs = await fetchDogbyName(name)

        let filtering_dogs = orderName(all_dogs, current_order)
        filtering_dogs = orderWeight(filtering_dogs, current_weight)
        filtering_dogs = filter_temperament(filtering_dogs, current_temperament)
        filtering_dogs = slice_dogs(filtering_dogs)

        dispatch({ type: SEARCH_BREEDS, payload: filtering_dogs })
    }
}

export const getTemperaments = () => {
    return async function (dispatch) {
        let all_temperaments = await fetchAllTemperaments()
        dispatch({ type: GET_TEMPERAMENTS, payload: all_temperaments })
    }
}

export const setPage = (page) => {
    return function (dispatch) {
        dispatch({ type: SET_PAGE, payload: page })
    }
}

export const setOrder = (order) => {
    return function (dispatch) {
        dispatch({ type: SET_ORDER, payload: order })
    }
}

export const setTemperament = (temperament) => {
    return function (dispatch) {
        dispatch({ type: SET_TEMPERAMENT, payload: temperament })
    }
}

export const setServer = (server) => {
    return function (dispatch) {
        dispatch({ type: SET_SERVER, payload: server })
    }
}

