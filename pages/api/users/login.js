import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../config/db';
import colors from 'colors';

import User from '../../../models/userModel';

// @desc Login user
// @route /api/users/login
// @access Public
export default async function loginUser(req, res) {
  const { email, password } = req.body;
  connectDB();
  const user = await User.findOne({ email });
  // Generate Token
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  };
  // Check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Credentials');
  }
}
