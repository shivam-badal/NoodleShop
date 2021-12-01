import { Router } from "express";
import userRoutes from "./components/user/user.routes";
import authRoutes from "./components/auth/auth.routes";

const router: Router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
