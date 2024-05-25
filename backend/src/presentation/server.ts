import express, { Router } from "express";

export interface ServerParams {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  public readonly port: number;
  public readonly routes: Router;

  constructor(params: ServerParams) {
    const { port = 3000, routes } = params;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(this.routes);
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
