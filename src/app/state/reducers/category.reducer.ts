import { createReducer, on } from "@ngrx/store";
import * as CategoryActions from "../actions/category.actions";
import { Category } from "../../models/category";

export const initialState: any[] = []

export const categoryReducer = createReducer(
    initialState,
    on(CategoryActions.loadCategories, (state) => state),
    on(CategoryActions.loadCategoriesSuccess, (state, {categories}) => categories),
    on(CategoryActions.loadCategoriesFailure, (state, {error}) => error)
)

