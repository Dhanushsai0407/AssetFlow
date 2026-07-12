const express = require('express');
const router = express.Router();
const { getDashboardStats, getAnalytics } = require('../controllers/reportController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/dashboard', protect, getDashboardStats);
router.get('/analytics', protect, authorize('Asset Manager', 'Admin'), getAnalytics);

module.exports = router;
