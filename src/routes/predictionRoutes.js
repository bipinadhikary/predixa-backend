const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const predictionController = require("../controllers/predictionController");

router.post("/predict", authenticate, predictionController.getPrediction);

module.exports = router;
