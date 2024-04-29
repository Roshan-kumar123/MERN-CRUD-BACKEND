require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// Allow requests from this origin
// const corsOptions = {
//   origin: "http://localhost:5173",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow all HTTP methods
// };
// app.use(cors(corsOptions));

// middelware

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to MERN application!" });
// });

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 5000, () => {
      console.log("connected to db server is running on", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
