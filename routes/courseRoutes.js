const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {
  createCourse,
  getAllCourses,
  getCourseById,
  deleteCourse
} = require('../controllers/courseController');
const { protect, authorize } = require('../middlewares/authMiddleware');

// Routes
router.post(
  '/',
  protect,
  authorize('instructor', 'admin'),
  upload.single('image'),
  createCourse
);

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.delete('/:id', protect, authorize('instructor', 'admin'), deleteCourse);

module.exports = router;
