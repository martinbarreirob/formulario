import { Router } from "express";
import usuarioRouter from "./usuarios.route.js";

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
    res.send("Bienvenido a Martin FORMBOT database");
});

indexRouter.use(`${prefix}/usuarios`, usuarioRouter)

export default indexRouter;