require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

//temp code to test db connection
const pool = require("./src/config/db");

pool.connect()
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.error("Database connection error", err));
