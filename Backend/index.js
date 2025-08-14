const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");
const User = require("./Models/User");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
}));

// DB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || "mysecretkey",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    ttl: 14 * 24 * 60 * 60,
  }),
  cookie: {
    secure: false, // true in prod
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000,
  },
}));

// Routes
app.get("/", (req, res) => res.send("Hello, server is running"));

app.get("/allHoldings", async (req, res) => {
  res.send(await HoldingsModel.find({}));
});

app.get("/allPositions", async (req, res) => {
  res.send(await PositionsModel.find({}));
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).send("Failed to save order");
  }
});

// Signup Route
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: "All fields are required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: error.message || "Server error" });
  }
});


app.use("/api", authRoutes);

// Start Server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
