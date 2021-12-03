const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//new controller .index
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
