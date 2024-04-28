import { createAction, props } from "@ngrx/store";
import { Funko } from "../../models/funko";

export const openModalAdd = createAction("[FORM MODAL] Open modal in add mode")
export const openModalEdit = createAction("[FORM MODAL] Open modal in edit mode", props<{currentFunko: Funko}>())
export const closeModal = createAction("[FORM MODAL] Close modal")
export const startAddFunko = createAction("[ADD] Start add Funko", props<{currentFunko: Funko}>())
export const endAddFunko = createAction("[ADD] End add Funko")
export const startEditFunko = createAction("[ADD] Start edit Funko", props<{currentFunko: Funko}>())
export const endEditFunko = createAction("[ADD] End edit Funko")


