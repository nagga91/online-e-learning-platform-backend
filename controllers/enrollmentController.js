const Enrollment = require('../models/Enrollment');

// Enroll in a course
exports.enroll = async (req, res) => {
  const { courseId } = req.body;

  const exists = await Enrollment.findOne({
    user: req.user._id,
    course: courseId
  });

  if (exists) {
    return res.status(400).json({ message: 'Already enrolled in this course' });
  }

  const enrollment = await Enrollment.create({
    user: req.user._id,
    course: courseId
  });

  res.status(201).json({ message: 'Enrolled successfully', enrollment });
};

// Get all enrolled courses for a user
exports.getMyEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate('course');
  res.json(enrollments);
};
