const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');


router.get('/users', controller.listUsers);

router.get('/users/id:', controller.showUser);

router.post('/users', controller.createUser);

router.put('/users/:id', controller.updateUser);

router.delete('/users/:id', controller.delete);

module.exports = router;
