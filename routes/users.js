const express = require('express');
const router = express.Router();


router.get('/users');

router.get('/users/id:');

router.post('/users');

router.put('/users/:id');

router.delete('/users/:id');

module.exports = router;