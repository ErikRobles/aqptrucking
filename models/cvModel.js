import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const cvSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/-/g, ''),
    },
    firstName: {
      type: String,
      required: [true, 'Please Add a First Name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please Add a Last Name'],
    },
    email: {
      type: String,
      required: [true, 'Please Add an Email'],
    },
    phone: {
      type: String,
      required: [true, 'Please Add a Phone Number'],
    },
    // cvfile: {
    //   data: Buffer,
    //   contentType: String,
    // },
    fileUrl: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    usEligible: {
      type: String,
    },
    dob: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const CV = models.CV || model('CV', cvSchema);
export default CV;
