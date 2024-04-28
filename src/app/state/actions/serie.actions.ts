import { createAction, props } from "@ngrx/store";
import { Serie } from "../../models/serie";

export const loadSeries = createAction("[SERIE] Load series")
export const loadSeriesSuccess = createAction("[SERIE] Load series success", props<{ series: Serie[] }>())
export const loadSeriesFailure = createAction("[SERIE] Load series failure", props<{ error: any }>())