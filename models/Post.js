import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Post name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Post description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  image: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Add text index for search functionality
PostSchema.index({ name: 'text', description: 'text' });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
