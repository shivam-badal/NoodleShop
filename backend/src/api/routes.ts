import { Router } from "express";
import userRoutes from "./components/user/user.routes";
import authRoutes from "./components/auth/auth.routes";
import productRoutes from "./components/product/product.routes"
import { isAuthenticated } from "./middleware/isAuthenticated";

const router: Router = Router();

router.use("/users", isAuthenticated, userRoutes);
router.use("/auth", authRoutes);
router.use("/products", productRoutes)

export default router;
