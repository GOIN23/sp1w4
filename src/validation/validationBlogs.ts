import { body, checkExact, query } from "express-validator";

export const validBlogs = checkExact([
  body("name").trim().exists().isString().isLength({ max: 15, min: 1 }),
  body("description").trim().exists().isString().isLength({ max: 500, min: 1 }),
  body("websiteUrl").trim().exists().isString().isLength({ max: 100, min: 1 }).matches("^https://([a-zA-Z0-9_-]+.)+[a-zA-Z0-9_-]+(/[a-zA-Z0-9_-]+)*/?$"),
]);
