import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as FunkoActions from "../actions/funko.actions";
import { RequestState } from "../app-state/request.state";
import { Funko } from "../../models/funko";

export const initialState: RequestState<Funko[]> = {
    pending: false,
    payload: [],
    error: false
}

export const loadFunkoReducer = createReducer(
    initialState,
    on(FunkoActions.loadFunkos, (state) => ({ pending: true, payload: [], error: false})),
    on(FunkoActions.loadFunkosSuccess, (state, action) => ({ pending: false, payload: action.funkos, error: false})),
    on(FunkoActions.loadFunkosFailure, (state) => ({ pending: false, payload: [], error: true}))
)

const getLoadFunkoFeatureState = createFeatureSelector<RequestState<Funko[]>>('loadFunko')

export const getFunkosResponseSelector = createSelector(getLoadFunkoFeatureState,  state => state.payload)
export const getFunkosPendingSelector = createSelector(getLoadFunkoFeatureState,  state => state.pending)
export const getFunkosErrorSelector = createSelector(getLoadFunkoFeatureState,  state => state.error)