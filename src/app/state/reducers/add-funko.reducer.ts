import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AddFunkoActions from "../actions/funko.actions";
import { RequestState } from "../app-state/request.state";
import { Funko } from "../../models/funko";

export const initialState: RequestState<Funko> = {
    pending: false,
    payload: null,
    error: false
}

export const addFunkoReducer = createReducer(
    initialState,
    on(AddFunkoActions.addFunkos, (state, action) => ({ pending: true, payload: action.funko, error: false})),
    on(AddFunkoActions.addFunkosSuccess, (state) => ({ pending: false, payload: null, error: false})),
    on(AddFunkoActions.addFunkosFailure, (state) => ({ pending: false, payload: null, error: true}))
)

const getAddFunkoFeatureState = createFeatureSelector<RequestState<Funko>>('addFunko')

export const addFunkosResponseSelector = createSelector(getAddFunkoFeatureState,  state => state.payload)
export const addFunkosPendingSelector = createSelector(getAddFunkoFeatureState,  state => state.pending)
export const addFunkosErrorSelector = createSelector(getAddFunkoFeatureState,  state => state.error)