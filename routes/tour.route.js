const router = require('express').Router();
const tourController = require('../controllers/tour.controller');

router.route('/tours').get(tourController.getAllTour);

module.exports = router;
