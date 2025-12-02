import mongoose from 'mongoose';

const developerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: [
        'Frontend',
        'Backend',
        'Full-Stack',
      ],
    },
    techStack: {
      type: [String],
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// ES module export
const Developer = mongoose.model('Developer', developerSchema);
export default Developer;
