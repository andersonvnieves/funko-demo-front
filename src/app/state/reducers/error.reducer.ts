import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { notifyError } from "../actions/error.action";

export const initialState = ""

export const errorReducer = createReducer(initialState, on(notifyError, (state, action) => action.errorMsg))

const getErrorFeatureState = createFeatureSelector<string>('error')

export const getErrorMsgSelector = createSelector(getErrorFeatureState,  state => state)