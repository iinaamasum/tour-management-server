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
  const viewIncrement = await TourModel.updateOne(
    { _id: id },
    { $inc: { viewCount: 1 } }
  );
  const result = await TourModel.findById(id);
  if (viewIncrement.acknowledged) {
    return result;
  }
  return { result, error: "Can't update the viewCount" };
};

exports.patchTourByIDService = async (id, data) => {
  const tour = await TourModel.findById(id);
  if (!tour) return { message: `Data not found with the id -> ${id}` };
  const result = await TourModel.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

exports.getTrendingTopTourService = async () => {
  const result = await TourModel.find().sort({ viewCount: -1 }).limit(3);
  return result;
};

exports.getCheapestTourService = async () => {
  const result = await TourModel.find().sort({ cost: 1 }).limit(3);
  return result;
};
