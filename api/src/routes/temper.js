const axios = require("axios");
const { Router } = require("express");
const { Temper } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
    try {

        // let db_temper = await Temper.findAll({ attributes: ['id', 'name'] })//BD_Search_Temper
        let db_temper = await Temper.findAll()//BD_Search_Temper

        if (db_temper.length === 0) {

            db_temper = await axios.get('https://api.thedogapi.com/v1/breeds')
            .then(result => {

                    filtered_tempers = new Set()
                    
                    result.data.map((dog) => {
                        try{

                            dog_temperaments = dog.temperament.split(', ')

                            dog_temperaments.map( temperament => {
                                filtered_tempers.add(temperament)
                            })

                        }
                        catch(err){
                        }
                    })
                    
                    filtered_tempers = Array.from(filtered_tempers)
                    filtered_tempers.sort()

                    fake_temper = filtered_tempers.map( (temperament, index) => {
                        try {
                            Temper.create({name:  temperament,})
                            return {id : index+1, name: temperament}

                        } catch (err) {
                            console.log('No se creó el Temperamento',  temperament)
                        }
                    })

                    return fake_temper

            })
            .catch(err => { console.log('No se cargaron los Temperos') })
        }

        res.json(db_temper)

    } catch (err) {
        res.status(500).json({ err: 'Ups!!' })
    }
})


module.exports = router;