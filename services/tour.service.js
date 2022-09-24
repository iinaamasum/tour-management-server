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

exports.getTourByIDService = async (id) => {
  const result = await TourModel.findById(id);
  return result;
};

exports.patchTourByIDService = async (id, data) => {
  const tour = await TourModel.findById(id);
  if (!tour) return { message: `Data not found with the id -> ${id}` };
  const result = await TourModel.updateOne({ _id: id }, { $set: data });
  return result;
};
