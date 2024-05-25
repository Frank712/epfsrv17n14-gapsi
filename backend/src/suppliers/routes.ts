import { Router } from "express";
import { SupplierController } from "./controller";

export class SupplierRoutes {
  static get routes(): Router {
    const router = Router();
    const supplierController = new SupplierController();

    router.get("/", supplierController.getSuppliers);
    router.post("/", supplierController.createSupplier);
    router.delete("/", supplierController.deleteSupplier);

    return router;
  }
}
