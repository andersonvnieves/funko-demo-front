import { createReducer, on } from "@ngrx/store";
import * as SerieActions from "../actions/serie.actions";

export const initialState: any[] = []

export const serieReducer = createReducer(
    initialState,
    on(SerieActions.loadSeries, (state) => state),
    on(SerieActions.loadSeriesSuccess, (state, {series}) => series),
    on(SerieActions.loadSeriesFailure, (state, {error}) => error)
)

