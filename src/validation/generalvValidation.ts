import { query } from "express-validator";

export const validaQurePageSezi = query("pageSize").toInt().default(10);
export const validaQureipageNumber = query("pageNumber").toInt().default(1);
export const validaSearchNameTerm = query("searchNameTerm").default("");
export const validaQureSortBy = query("sortBy").default("createdAt");
export const validaQursortDirection = query("sortDirection").default("desc");
