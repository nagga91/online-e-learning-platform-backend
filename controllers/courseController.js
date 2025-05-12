const Course = require('../models/Course');
const Lecture = require('../models/Lecture');
const fs = require('fs');

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, duration, category, createdBy } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Course image is required' });
    }

    const course = await Course.create({
      title,
      description,
      duration,
      category,
      createdBy,
      image: req.file.path
    });

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create course', error: err.message });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch course', error: err.message });
  }
};

// Delete course (and its lectures)
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    // Delete associated lectures
    await Lecture.deleteMany({ course: course._id });

    // Delete image from disk
    if (course.image && fs.existsSync(course.image)) {
      fs.unlinkSync(course.image);
    }

    await course.deleteOne();
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete course', error: err.message });
  }
};
