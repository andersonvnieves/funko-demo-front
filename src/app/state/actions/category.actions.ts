import { createAction, props } from "@ngrx/store";
import { Category } from "../../models/category";

export const loadCategories = createAction("[CATEGORY] Load categories")
export const loadCategoriesSuccess = createAction("[CATEGORY] Load categories success", props<{ categories: Category[] }>())
export const loadCategoriesFailure = createAction("[CATEGORY] Load categories failure", props<{ error: any }>())