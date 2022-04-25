import axios from 'axios'

async function fetchAllDogs(){
    let breeds = await axios.get("/dogs")
    return breeds.data
}

async function fetchAllTemperaments(){
    let temperaments = await axios.get("/temper")
    return temperaments.data
}

async function fetchDogById(id){
    let result = await axios.get(`/dogs/${id}`)
    return result.data
}

async function fetchDogbyName(name){
    let result = await axios.get(`/dogs?name=${name}`)
    return result.data
}

export {fetchAllDogs, fetchAllTemperaments, fetchDogById, fetchDogbyName}