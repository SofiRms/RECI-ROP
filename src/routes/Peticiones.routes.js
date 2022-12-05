const router = require('express').Router();

const {
    getPeticion,
    postPeticion,
    putPeticion,
    deletePeticion} = require('../controllers/Peticiones.controllers')


    const v_JWT = require('../middlewares/validator.jwt');

router.get('/Tasks',[v_JWT],getPeticion);

router.post('/Tasks',[v_JWT],postPeticion);

router.put('/Tasks/:id',[v_JWT], putPeticion);

router.delete('/Tasks/:id', [v_JWT], deletePeticion);

module.exports = router