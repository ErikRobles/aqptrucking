import CV from '../../../models/cvModel';
import connectDB from '../../../config/db';

// @desc Get single cv
// @route GET /api/cvs/:id
// @access Public
const getCV = async (req, res) => {
  const cv = await CV.findById(req.params.id);
  if (!cv) {
    res.status(404);
    throw new Error('CV not found');
  }
  res.status(200).json(cv);
};

export default getCV;
