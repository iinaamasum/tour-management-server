const Tour = require('../models/tour.model');
exports.getAllTourService = async (data) => {
  const result = await Tour.find(data);
  return result;
};
