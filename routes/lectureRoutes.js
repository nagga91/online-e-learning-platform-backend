const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {
  addLecture,
  getLectures,
  deleteLecture
} = require('../controllers/lectureController');
const { protect, authorize } = require('../middlewares/authMiddleware');

// Routes
router.post(
  '/',
  protect,
  authorize('instructor', 'admin'),
  upload.single('video'),
  addLecture
);

router.get('/:courseId', getLectures);
router.delete('/:id', protect, authorize('instructor', 'admin'), deleteLecture);

module.exports = router;
