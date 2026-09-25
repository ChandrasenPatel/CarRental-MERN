import express from "express"
import { protect } from "../../middleware/auth.js";
import { changeRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailablity, updateUserImage } from "../ownerController.js";
import upload from "../../middleware/multer.js";
import { addCar } from "../ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add-car", upload.single("image"), protect, addCar)
ownerRouter.get("/cars", protect, getOwnerCars)
ownerRouter.post("/toggle-car", protect, toggleCarAvailablity)
ownerRouter.post("/delete-car", protect, deleteCar)
ownerRouter.post("/dashboard", protect, getDashboardData)
ownerRouter.post("/update-image", upload.single("image"), protect, updateUserImage)
export default ownerRouter;