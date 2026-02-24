const pool = require("../config/db");
const axios = require("axios");

// GET Prediction from AI
exports.getPrediction = async (req, res) => {
  try {
    const { stock_symbol } = req.body;

    if (!stock_symbol) {
      return res.status(400).json({ error: "Stock symbol is required" });
    }

    // Mock prediction
    const prediction = ["BUY","SELL","HOLD"][Math.floor(Math.random() * 3)];

    // Save prediction to DB
    const newPrediction = await pool.query(
      "INSERT INTO predictions (user_id, stock_symbol, prediction) VALUES ($1, $2, $3) RETURNING *",
      [req.user.id, stock_symbol, prediction]
    );

    res.json({
      message: "Prediction created",
      prediction: newPrediction.rows[0]
    });

  } catch (err) {
    console.error("Prediction Error:", err); // <-- Add this line
    res.status(500).json({ error: "Prediction failed", details: err.message }); // <-- Add details
  }
};

