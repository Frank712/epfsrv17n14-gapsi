import { Response, Request } from "express";
import { CreateSupplierDto } from "../../domain/dtos/suppliers/create-supplier.dto";
import { SupplierRepository } from "../../domain/repositories/supplier.repository";
import { CreateSupplier } from "../../domain/use-cases/suppliers/create-supplier.use-case";
import { CustomError } from "../../domain/errors/custom.error";
import { DeleteSupplierDto } from "../../domain/dtos/suppliers/delete-supplier.dto";
import { DeleteSupplier } from "../../domain/use-cases/suppliers/delete-supplier.use-case copy";
import { GetAllSuppliersDto } from "../../domain/dtos/suppliers/get-all-suppliers.dto";
import { GetAllSuppliers } from "../../domain/use-cases/suppliers/get-all-suppliers";

export class SupplierController {
  constructor(private readonly supplierRepository: SupplierRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.errorCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  };

  //:TODO Get list of suppliers
  getSuppliers = (req: Request, res: Response) => {
    const [error, getAllSupplierDto] = GetAllSuppliersDto.create(req.query);
    console.log(error, getAllSupplierDto);
    if (error) {
      res.status(400).json({ error });
    }

    new GetAllSuppliers(this.supplierRepository)
      .execute(getAllSupplierDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  //:TODO Add a supplier
  createSupplier = (req: Request, res: Response) => {
    const [error, createSupplierDto] = CreateSupplierDto.create(req.body);
    console.log(error, createSupplierDto);
    if (error) {
      return res.status(400).json({ error });
    }

    new CreateSupplier(this.supplierRepository)
      .execute(createSupplierDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  //:TODO Delete a supplier
  deleteSupplier = (req: Request, res: Response) => {
    const [error, deleteSupplierDto] = DeleteSupplierDto.create(req.query);
    console.log(error, deleteSupplierDto);
    if (error) {
      return res.status(400).json({ error });
    }

    new DeleteSupplier(this.supplierRepository)
      .execute(deleteSupplierDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };
}
