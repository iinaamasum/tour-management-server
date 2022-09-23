const router = require('express').Router();

router.route('/').get(tourController);

exports = router;
