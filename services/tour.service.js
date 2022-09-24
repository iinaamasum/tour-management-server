const TourModel = require('../models/tour.model');

exports.getAllTourService = async (data) => {
  const result = await TourModel.find(data);
  return result;
};

exports.postTour = async (data) => {
  const modelData = new TourModel(data);
  const result = await modelData.save(data);
  return result;
};

exports.getTourByIDService = (id) => {
  const result = TourModel.findById(id);
  return result;
};
