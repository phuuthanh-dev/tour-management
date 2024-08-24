import { Router } from "express";
const router: Router = Router();

import * as tourController from "../../controllers/client/tour.controller";

router.get("/:slugCategory", tourController.index);

router.get("/detail/:slugTour", tourController.detail);

export const tourRoutes: Router = router;
