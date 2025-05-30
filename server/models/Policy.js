import mongoose from 'mongoose';

const policySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  customerName: {
    type: String,
    required: true
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  expiryDate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Active', 'Expiring Soon', 'Expired']
  },
  email: {
    type: String,
    required: true
  },
  address: String,
  phoneNumber: String,
  city: String,
  policyType: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Policy', policySchema);