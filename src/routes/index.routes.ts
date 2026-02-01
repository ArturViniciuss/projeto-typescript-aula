import { Router } from "express";
import sensorRouter from "./sensorRoutes.js";
import pesquisadorRoutes from "./pesquisadorRoutes.js";
import authRouter from "./authRoutes.js";


const indexRouter = Router();

indexRouter.use(pesquisadorRoutes);
indexRouter.use(authRouter)
indexRouter.use(sensorRouter);

export default indexRouter;
