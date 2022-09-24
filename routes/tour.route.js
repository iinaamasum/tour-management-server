const router = require('express').Router();
const tourController = require('../controllers/tour.controller');

router
  .route('/tours')
  .get(tourController.getAllTour)
  .post(tourController.postTour);

router.route('/tours/:id').get(tourController.getTourByID);

module.exports = router;
