const router = require('express').Router();
//const validarEmail=require('../helpers/validarEmail')
//const validarDni=require('../helpers/validarDni')

const {
    getUser,
    postUser,
    putUser,
    deleteUser } = require('../controllers/User.controllers');


    const v_JWT = require('../middlewares/validator.jwt')

    router.get('/user',[v_JWT], getUser);

    router.post('/user',postUser);

    router.put('/user', [v_JWT], putUser);

    router.delete('/user', [v_JWT], deleteUser);

    module.exports = router;