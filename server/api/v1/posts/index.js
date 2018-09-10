// const middleware = require("../../../middlewares");

const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.post('/create', controller.create);
// router.get('/find', controller.find);
// router.get('/current', middleware.authenticate, controller.current);

module.exports = router;