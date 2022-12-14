const {
  getAllTourService,
  postTour,
  getTourByIDService,
  patchTourByIDService,
  getTrendingTopTourService,
  getCheapestTourService,
} = require('../services/tour.service');
const TourModel = require('../models/tour.model.js');

exports.getAllTour = async (req, res, next) => {
  try {
    const allTour = await getAllTourService({});
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
      message: 'Server Error. Something went wrong.',
      error: error,
    });
  }
};

exports.postTour = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postTour(data);
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
      message: 'Server Error. Something went wrong.',
      error,
    });
  }
};

exports.getTourByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getTourByIDService(id);
    if (!result._id) {
      res.status(400).json({
        status: 'failed',
        message: `Can't find tour with the ${id}. Please check the id again.`,
        error,
      });
    }
    res.status(200).json({
      status: 'success',
      message: `Below data is the tour with ${id}. @param -> object`,
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:
        'Server Error. Something went wrong. Maybe you entered wrong ObjectId.',
      error,
    });
  }
};

exports.patchTourByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await patchTourByIDService(id, data);
    if (!result.modifiedCount) {
      res.status(400).json({
        status: 'failed',
        message: `Can't patch tour with the ${id}. Please check the id again.`,
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: `data is the tour with ${id}. @param -> object`,
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message:
        'Server Error. Something went wrong. Maybe you entered wrong ObjectId.',
      error,
    });
  }
};

exports.getTrendingTopTour = async (req, res, next) => {
  try {
    const topTrendingTour = await getTrendingTopTourService();
    if (topTrendingTour.length === 0) {
      res.status(400).json({
        status: 'failed',
        message: 'No data found. Please populate first then search.',
        topTrendingTour,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Got the trending tour. @param array of objects.',
      topTrendingTour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Server error. No data found.',
      error,
    });
  }
};

exports.getCheapestTour = async (req, res, next) => {
  try {
    const cheapestTour = await getCheapestTourService();
    if (cheapestTour.length === 0) {
      res.status(400).json({
        status: 'failed',
        message: 'No data found. Please populate first',
        cheapestTour,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'cheapest tour found. @param array of objects',
      cheapestTour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Server error. No data found.',
      error,
    });
  }
};
