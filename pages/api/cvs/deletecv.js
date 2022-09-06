import CV from '../../../models/cvModel';
import connectDB from '../../../config/db';

// @desc Delete single cv
// @route DELETE /api/cvs/deletecv/:id
// @access Public
const deleteCV = async (req, res) => {
  connectDB();
  const cv = await CV.findById(req.query.id);
  if (!cv) {
    res.status(404);
    throw new Error('CV not found');
  }
  await cv.remove();
  res.status(200).json({ success: true });
};

export default deleteCV;
