const axios = require('axios');
const {Race, Temper, API_KEY } = require('../db.js');

function filterData(data){

    filteredDogs = data.map( dog => {
        console.log(dog.id, dog.weight.metric)
        return {
            name: dog.name,
            temperament: dog.temperament,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            id: dog.id,
            image: dog.image.url
        }
    })

    return filteredDogs

}

async function getID(dato){
    let arr = [];
    for(let i=0;i<dato.length;i++){
        arr.push(await Type.findOne({
            where: {name: dato[i]},
            attributes: ["id"]
        }))
    }
    return arr;
}

async function db_OrdenarDogs(){
    
    let temp, dogInt;

    dogInt = db_races.map(response => {

        temp = response.dataValues.Temperaments.map(t => {
            return t.dataValues.name                   
        })

        console.log(temp)

        return filterData(response)
    })
}

async function getAllDogs(){

    let api_dogs = await axios.get('https://api.thedogapi.com/v1/breeds')
    .then(async (result) => {
        return filterData(result.data)
    })

    let db_dogs = await Race.findAll({
        include: {
            model: Temper,
            through: {
                attributes: []
            }
        }
      })

    db_dogs.map( dog => {

        temperaments_array = dog.dataValues.tempers.map( _temperament => {
            return _temperament.dataValues.name
        })

        dog.dataValues.temperament = temperaments_array.join(', ')

        delete dog.dataValues.tempers

    })

    all_dogs = [...db_dogs, ...api_dogs]

    return all_dogs
}

async function searchRaceInDB_version1(name){
    let resultRace = await Race.findAll({

        include: Temper,
        through: { attributes: [name] },

        where: {
            name
        }
    })

    return resultRace
}

async function searchRaceInDB_version2(name){

    let resultRace = await Race.findAll({
        where: {
            name
        }
    })

    return resultRace
}

async function searchRaceInDB_version3(name){
    
    let resultRace = await Race.findAll({

        include: Temper,
        through: { attributes: [name] },

        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })

    return resultRace
}

async function getDogByName(name){

    api_dogs_found = await axios.get(`https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}&q=${name}`)
    .then( async result => {

        result.data.map(dog => {

            dog.weight = dog.weight.metric
            dog.height = dog.height.metric

            if (dog.reference_image_id) {
                dog.image = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
            } else {
                // dog.image = 'https://static8.depositphotos.com/1001336/852/i/600/depositphotos_8525222-stock-photo-labrador-silhouette.jpg'
                dog.image = 'https://img.freepik.com/vector-gratis/silueta-perrosilueta-pata-perrocara-perrosilueta-perro-sentado_622010-18.jpg?w=2000'
            }

            delete dog.bred_for
            delete dog.breed_group
            delete dog.origin
            delete dog.reference_image_id
            delete dog.country_code
        })
        return result.data
    })

    // db_dogs_found = searchRaceInDB_version1(name)
    // db_dogs_found = searchRaceInDB_version2(name)

    return api_dogs_found
}

module.exports = {filterData, getID, getAllDogs, getDogByName }



