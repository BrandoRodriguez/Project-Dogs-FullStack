const { Router } = require("express");
const { Race, Temper } = require('../db.js');
const axios = require('axios');
const { getDatos, getAllDogs, getDogByName} = require('../functions/routerFunc');
const router = Router();

router.get("/", async (req, res) => {

    const {name} = req.query;
    
    if (name){  //Tiene Query

        try{
            dogsFounds = await getDogByName(name)
            res.send(dogsFounds)
        }
        catch (err){
            res.send("Error")
        }

    } else {  // No Tiene Query
        try{
            all_dogs = await getAllDogs()
            res.send(all_dogs)
        }
        catch(err){
            console.log(err)
            res.send('Error')
        }
    }

})

router.get("/:id", async (req,res) => { // Peticion de Dogs por id
    
    const {id} = req.params

    try{
        //Buscando en la base de datos el pokemon por ID, si encuentra, lo devuelve
        console.log('buscando en db')
        let db_dog_found = await Race.findOne({where: {id}})
        console.log('retornando de db')
        return res.send(db_dog_found);
    }
    catch (err){
        console.log(err)
        try{
            //Buscando en la DogApi por ID, si encuentra, extrae la data y lo devuelve.
            all_dogs = await getAllDogs()

            api_dog_found = all_dogs.find(dog => {
                    return dog.id == id
            })

            return res.send(api_dog_found);
        }
        catch{
            return res.status(404).send('ID not found')
        }
    }
})

router.post("/", async (req,res) => { // Publicar un pokemon

    const {name, id, temperament, height, weight, life_span, image} = req.body;

    if(!req.body.name || name.length === 0 )
        return res.status(422).json({message: "El nombre del pokemon no puede estar vacío"}) 

    // Crear un Dog con lo datos pasados 

    try{
        const newDog = await Race.create({
            name,
            id,
            height,
            weight,
            life_span,
            image
        })

        newDog.setTempers(temperament)

        return res.json(newDog);

    } catch(e){
        console.log(e)
        res.send(e);
    }
})

module.exports = router;