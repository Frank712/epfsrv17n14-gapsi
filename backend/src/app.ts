import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  new Server({
    port: 3333,
    routes: AppRoutes.routes,
  }).start();
}
