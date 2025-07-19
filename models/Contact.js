import mongoose from 'mongoose';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: function(email) {
        return emailRegex.test(email);
      },
      message: 'Please provide a valid email address'
    }
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  group: {
    type: String,
    enum: ['Friends', 'Work', 'Family', ''],
    default: ''
  }
}, {
  timestamps: true
});

// Add text index for search functionality
ContactSchema.index({ name: 'text', email: 'text' });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
