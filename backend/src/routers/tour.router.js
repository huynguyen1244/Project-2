// routes/tour.routes.js
const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controller');

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);
router.post('/', tourController.createTour);
router.put('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports = router;
