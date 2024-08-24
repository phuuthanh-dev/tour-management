import { Router } from "express";
const router: Router = Router();

import * as cartController from "../../controllers/client/cart.controller";

router.get("/", cartController.index);

router.post("/list-json", cartController.listJson);

export const cartRoutes: Router = router;