import { Router } from "express";
const router: Router = Router();

import * as orderController from "../../controllers/client/order.controller";

router.post("/", orderController.order);

router.get("/success", orderController.success);

export const orderRoutes: Router = router;