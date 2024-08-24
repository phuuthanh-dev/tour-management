import { Request, Response } from "express";
import Tour from "../../models/tour.model";
import Category from "../../models/category.model";
import { generateTourCode } from "../../helpers/generate";
import { systemConfig } from "../../config/system";

// [GET] /admin/tours/
export const index = async (req: Request, res: Response) => {
    // SELECT * FROM tours WHERE deleted = false;
    const tours = await Tour.findAll({
        where: {
            deleted: false,
        },
        raw: true
    });

    tours.forEach(item => {
        if (item["images"]) {
            const images = JSON.parse(item["images"]);
            item["image"] = images[0];
        }
        item["price_special"] = (item["price"] * (1 - item["discount"] / 100));
    });

    console.log(tours);

    res.render("admin/pages/tours/index", {
        pageTitle: "Danh sách tour",
        tours: tours
    });
};

// [GET] /admin/tours/create
export const create = async (req: Request, res: Response) => {
    const categories = await Category.findAll({
        where: {
            deleted: false,
            status: "active"
        },
        raw: true
    });

    res.render("admin/pages/tours/create", {
        pageTitle: "Thêm mới tour",
        categories: categories
    });
};