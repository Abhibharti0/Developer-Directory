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
        'Mobile Developer',
        'Game Developer',
        'Embedded Developer',
        'Systems Developer',
        'Desktop Application Developer',
        'Data Scientist',
        'Data Engineer',
        'Machine Learning Engineer',
        'AI Engineer',
        'Research Engineer',
        'DevOps Engineer',
        'Cloud Engineer',
        'Site Reliability Engineer (SRE)',
        'Security Engineer',
        'Ethical Hacker',
        'Penetration Tester',
        'QA Engineer',
        'Automation Engineer',
        'Blockchain Developer',
        'AR/VR Developer',
        'IoT Developer',
        'Database Administrator',
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
