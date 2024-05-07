import { body, checkExact } from "express-validator";
import { repositoryBlogs } from "../repository/repositoryBlogs";



export const validaPosts = checkExact([
  body("title").trim().exists().isString().isLength({ max: 30, min: 1 }),
  body("shortDescription").trim().exists().isString().isLength({ max: 100, min: 1 }),
  body("content").trim().exists().isString().isLength({ max: 1000, min: 1 }),
  body("blogId")
    .custom(async (value) => {
      const user = await repositoryBlogs.findBlogs(value);
      if (!user) {
        throw new Error("E-mail already in use");
      }
    })
    .trim()
    .exists()
    .isString()
    .isLength({ min: 1 }),
]);
