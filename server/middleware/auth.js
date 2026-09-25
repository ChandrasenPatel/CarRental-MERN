import jwt from "jsonwebtoken";
import User from "../Models/user.js";

export const protect = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({
            success: false,
            message: "Not authorized"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return res.json({
            success: false,
            message: "Not authorized"
        });
    }
};