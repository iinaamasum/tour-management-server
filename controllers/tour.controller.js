const { getAllTourService } = require('../services/tour.service');
const TourModel = require('../models/tour.model.js');

exports.getAllTour = async (req, res, next) => {
  try {
    const allTour = await TourModel.find({});
    if (allTour.length === 0) {
      res.status(400).json({
        status: 'failed',
        message: 'no tour exits.',
        data: allTour,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Below data is find for the req. @param: Array of objects',
      data: allTour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't process all tour for the route",
      error: error,
    });
  }
};

exports.postTour = async (req, res, next) => {
  try {
    const data = req.body;
    const modelData = new TourModel(data);
    const result = await modelData.save(data);
    if (!result._id) {
      res.status(400).json({
        status: 'failed',
        message: "Can't update the tour.",
        data: result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'tour updated successfully. @param: Array of objects',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't update the tour.",
      error,
    });
  }
};
