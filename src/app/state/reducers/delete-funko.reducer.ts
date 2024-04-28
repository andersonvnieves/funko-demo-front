import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as FunkoActions from "../actions/funko.actions";
import { RequestState } from "../app-state/request.state";
import { Funko } from "../../models/funko";

export const initialState: RequestState<string> = {
    pending: false,
    payload: null,
    error: false
}

export const deleteFunkoReducer = createReducer(
    initialState,
    on(FunkoActions.deleteFunkos, (state, action) => ({ pending: true, payload: action.funkoId, error: false})),
    on(FunkoActions.deleteFunkosSuccess, (state) => ({ pending: false, payload: null, error: false})),
    on(FunkoActions.deleteFunkosFailure, (state) => ({ pending: false, payload: null, error: true}))
)

const getDeleteFunkoFeatureState = createFeatureSelector<RequestState<string>>('deleteFunko')

export const deleteFunkosResponseSelector = createSelector(getDeleteFunkoFeatureState,  state => state.payload)
export const deleteFunkosPendingSelector = createSelector(getDeleteFunkoFeatureState,  state => state.pending)
export const deleteFunkosErrorSelector = createSelector(getDeleteFunkoFeatureState,  state => state.error)