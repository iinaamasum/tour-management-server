const Tour = require('../models/tour');
exports.getAllTourService = async (data) => {
  const result = await Tour.find(data);
  return result;
};
