const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/authMiddleware');
const {
  enroll,
  getMyEnrollments
} = require('../controllers/enrollmentController');

// Routes
router.post('/', protect, authorize('student'), enroll);
router.get('/my-courses', protect, authorize('student'), getMyEnrollments);

module.exports = router;
