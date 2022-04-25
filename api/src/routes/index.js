const { Router } = require('express');
const dogsRouter = require('./dogs');
const temperRouter = require('./temper');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRouter);
router.use('/temper', temperRouter);


module.exports = router;
