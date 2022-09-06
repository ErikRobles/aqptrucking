import CV from '../../../models/cvModel';
import connectDB from '../../../config/db';

// @desc Get all cvs
// @route GET /api/cvs
// @access Public
const getCVs = async (req, res) => {
  connectDB();
  const cvs = await CV.find();
  return res.status(200).json(cvs);
};

export default getCVs;
