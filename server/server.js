import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./controller/routes/userRoutes.js";
import ownerRouter from "./controller/routes/ownerRoutes.js";
import bookingRouter from "./controller/routes/bookingRoutes.js";

// Initialize Express App
const app = express();

// Connect database
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("server is running");
});

// User routes
app.use("/api/user", userRouter);

app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);

export default app