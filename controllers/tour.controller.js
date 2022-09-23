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
    res.status(400).json({
      status: 'success',
      message: 'Below data is find for the req. @param: Array of objects',
      data: allTour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't process all tour for the route",
    });
  }
};
