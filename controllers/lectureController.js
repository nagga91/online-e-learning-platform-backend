const Lecture = require('../models/Lecture');
const fs = require('fs');

// Add a new lecture to a course
exports.addLecture = async (req, res) => {
  try {
    const { title, description, courseId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Lecture video is required' });
    }

    const lecture = await Lecture.create({
      title,
      description,
      video: req.file.path,
      course: courseId
    });

    res.status(201).json(lecture);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add lecture', error: err.message });
  }
};

// Get all lectures for a course
exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({ course: req.params.courseId });
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch lectures', error: err.message });
  }
};

// Delete a lecture by ID
exports.deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) return res.status(404).json({ message: 'Lecture not found' });

    if (lecture.video && fs.existsSync(lecture.video)) {
      fs.unlinkSync(lecture.video);
    }

    await lecture.deleteOne();
    res.json({ message: 'Lecture deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete lecture', error: err.message });
  }
};
