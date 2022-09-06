import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../config/db';
import colors from 'colors';

import User from '../../../models/userModel';

// @desc Get current User
// @route /api/users/me
// @access Private
export default async function getMe(req, res) {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
}
