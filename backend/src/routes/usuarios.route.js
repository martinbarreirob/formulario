import { Router } from "express";

import {
  getUsuarios,
  getUsuario,
  createUsuario,
  deleteUsuario
} from "../controllers/usuarios.controller.js";

const usuarioRouter = Router();

usuarioRouter.get("/", getUsuarios);

usuarioRouter.get("/:id", getUsuario);

usuarioRouter.post("/", createUsuario);

usuarioRouter.delete("/:id", deleteUsuario);

export default usuarioRouter;