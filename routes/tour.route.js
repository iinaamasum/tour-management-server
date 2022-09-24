const router = require('express').Router();
const tourController = require('../controllers/tour.controller');

router
  .route('/tours')
  .get(tourController.getAllTour)
  .post(tourController.postTour);

router.route('/tour/trending').get(tourController.getTrendingTopTour);
router.route('/tour/cheapest').get(tourController.getCheapestTour);
router.route('/tour/:id').patch(tourController.patchTourByID);
router.route('/tours/:id').get(tourController.getTourByID);

module.exports = router;
