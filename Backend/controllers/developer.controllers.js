import Developer from '../models/developer.model.js';

export const createDeveloper = async (req, res) => {
  try {
    let { name, role, techStack, experience } = req.body;

    // Validation
    if (!name || !role || !techStack || experience == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Convert techStack string → array (split by comma or space)
    if (typeof techStack === 'string') {
      techStack = techStack.includes(',')
        ? techStack.split(',').map(item => item.trim())
        : techStack.split(/\s+/).map(item => item.trim());
    }

    const developer = await Developer.create({ name, role,  techStack, experience });

    return res.status(201).json({
      message: "Developer added successfully",
      developer,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};




export const getDevelopers = async (req, res) => {
  try {
    // Agar query params nahi hain, sab developers fetch kar lo
    const developers = await Developer.find().sort({ createdAt: -1 });

    // Frontend ke liye object me wrap karna best practice
    return res.status(200).json({ developers });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

