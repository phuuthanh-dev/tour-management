import { Router } from "express";
import multer from "multer";
const router: Router = Router();

const upload = multer();

import * as tourController from "../../controllers/admin/tour.controller";
import * as uploadCloud from "../../middlewares/admin/uploadCloud.middleware";

router.get("/", tourController.index);

router.get("/create", tourController.create);

export const tourRoutes: Router = router;