import { Router } from "express";

export class SupplierRoutes {
  static get routes(): Router {
    const router = Router();

    router.get("/", (req, res) => {
      res.json({
        message: "Hello",
      });
    });

    return router;
  }
}
