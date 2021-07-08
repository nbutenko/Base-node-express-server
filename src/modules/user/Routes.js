import { Router } from "express";
import userRegister from "./userRegister";
import userGetAll from "./userGetAll";
import userGetById from "./userGetById";
import userUpdateById from "./userUpdateById";
import userUpdate from "./userUpdate";
import userDeleteById from "./userDeleteById";
import userDeleteAll from "./userDeleteAll";
const router = Router();

router.post("/", userRegister); // POST localhost:5000/user
router.get("/", userGetAll); // GET localhost:5000/user
router.get("/:userId/:age", userGetById); // GET localhost:5000/userId/age
router.patch("/:userId", userUpdateById); // UPDATE localhost:5000/userId
router.patch("/:userId", userUpdate); // UPDATE localhost:5000/userId
router.delete("/:userId", userDeleteById); // DELETE localhost:5000/userId
router.delete("/", userDeleteAll); // DELETE localhost:5000/user

export default router;
