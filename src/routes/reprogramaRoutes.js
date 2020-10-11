const express = require('express');
const router = express.Router();
const reprogramaController = require('../controller/reprogramaController');

router.post('/reprograma', reprogramaController.criarPost);
router.post('/reprograma', reprogramaController.novoPost);
router.delete('/reprograma/:id', reprogramaController.deletarTarefa)

module.exports = router;
