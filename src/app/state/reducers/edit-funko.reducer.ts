import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as FunkoActions from "../actions/funko.actions";
import { RequestState } from "../app-state/request.state";
import { Funko } from "../../models/funko";

export const initialState: RequestState<Funko> = {
    pending: false,
    payload: null,
    error: false
}

export const editFunkoReducer = createReducer(
    initialState,
    on(FunkoActions.editFunkos, (state, action) => ({ pending: true, payload: action.funko, error: false})),
    on(FunkoActions.editFunkosSuccess, (state) => ({ pending: false, payload: null, error: false})),
    on(FunkoActions.editFunkosSuccess, (state) => ({ pending: false, payload: null, error: true}))
)

const getEditFunkoFeatureState = createFeatureSelector<RequestState<Funko>>('editFunko')

export const editFunkosResponseSelector = createSelector(getEditFunkoFeatureState,  state => state.payload)
export const editFunkosPendingSelector = createSelector(getEditFunkoFeatureState,  state => state.pending)
export const editFunkosErrorSelector = createSelector(getEditFunkoFeatureState,  state => state.error)