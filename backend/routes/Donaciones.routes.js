const router = require('express').Router();

const {
    getDonacion,
    postDonacion,
    putDonacion,
    deleteDonacion} = require('../controllers/Donaciones.controllers')


    const v_JWT = require('../middlewares/validator.jwt');

router.get('/Tasks',[v_JWT],getDonacion);

router.post('/Tasks',[v_JWT],postDonacion);

router.put('/Tasks/:id',[v_JWT], putDonacion);

router.delete('/Tasks/:id', [v_JWT], deleteDonacion);

module.exports = router