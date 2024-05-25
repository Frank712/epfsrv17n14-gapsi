import { Response, Request } from "express";

export class SupplierController {
  private handleError = (error: unknown, res: Response) => {
    return res.status(500).json({ error: "Internal server error" });
  };

  //:TODO Get list of suppliers
  getSuppliers = (req: Request, res: Response) => {
    res.json("Get all suppliers");
  };

  //:TODO Add a supplier
  createSupplier = (req: Request, res: Response) => {
    res.json("Add supplier");
  };

  //:TODO Delete a supplier
  deleteSupplier = (req: Request, res: Response) => {
    res.json("Delete supplier");
  };
}
