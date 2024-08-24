import { Router } from "express";
const router: Router = Router();

import * as categoryController from "../../controllers/client/category.controller";

router.get("/", categoryController.index);

export const categoryRoutes: Router = router;