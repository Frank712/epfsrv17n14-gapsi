import { Router } from "express";
import { SupplierController } from "./controller";
import { FileSystemSupplierDatasourceImpl } from "../../infrastructure/datasources/file-system-supplier.datasource.impl";
import { SupplierRepositoryImpl } from "../../infrastructure/repositories/supplier.repository.impl";

export class SupplierRoutes {
  static get routes(): Router {
    const router = Router();
    const fileSystemSupplierDataSource = new FileSystemSupplierDatasourceImpl();
    const supplierRepository = new SupplierRepositoryImpl(
      fileSystemSupplierDataSource
    );
    const supplierController = new SupplierController(supplierRepository);

    router.get("/", supplierController.getSuppliers);
    router.post("/", supplierController.createSupplier);
    router.delete("/", supplierController.deleteSupplier);

    return router;
  }
}
