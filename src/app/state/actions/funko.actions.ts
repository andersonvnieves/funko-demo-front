import { createAction, props } from "@ngrx/store";
import { Funko } from "../../models/funko";

export const loadFunkos = createAction("[LOAD] Load funkos")
export const loadFunkosSuccess = createAction("[LOAD] Load funkos success", props<{ funkos: Funko[] }>())
export const loadFunkosFailure = createAction("[LOAD] Load funkos failure")

export const addFunkos = createAction("[ADD] Add funko", props<{ funko: Funko }>())
export const addFunkosSuccess = createAction("[ADD] Add funko success")
export const addFunkosFailure = createAction("[ADD] Add funko failure")

export const editFunkos = createAction("[EDIT] Edit funko", props<{ funko: Funko }>())
export const editFunkosSuccess = createAction("[EDIT] Edit funko success")
export const editFunkosFailure = createAction("[EDIT] Edit funko failure")

export const deleteFunkos = createAction("[DELETE] Delete funko", props<{ funkoId: string }>())
export const deleteFunkosSuccess = createAction("[DELETE] Delete funko success")
export const deleteFunkosFailure = createAction("[DELETE] Delete funko failure")