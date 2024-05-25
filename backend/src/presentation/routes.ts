import { Router } from "express";
import { SupplierRoutes } from "../suppliers/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/suppliers", SupplierRoutes.routes);

    return router;
  }
}
