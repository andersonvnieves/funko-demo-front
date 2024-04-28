import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { closeModal, openModalAdd, openModalEdit } from "../actions/form-modal.actions";
import { FormModalState } from "../../models/form-modal-state";

export const initialState: FormModalState = {
    isModalFormModeAdd: true,
    isModalFormVisible: false,
    currentFunko: null,
}

export const formModalReducer = createReducer(
    initialState,    
    on(openModalAdd, (state) => ({ currentFunko: null, isModalFormModeAdd: true, isModalFormVisible: true})),
    on(openModalEdit, (state, action) => ({ isModalFormModeAdd: false, isModalFormVisible: true, currentFunko: action.currentFunko})),
    on(closeModal, (state) => ({ currentFunko: null, isModalFormVisible: false, isModalFormModeAdd: true }))
)

const getFormModalFeatureState = createFeatureSelector<FormModalState>('formModal')

export const getModalModeSelector = createSelector(getFormModalFeatureState,  state => state.isModalFormModeAdd)
export const getModalCurrentFunkoSelector = createSelector(getFormModalFeatureState,  state => state.currentFunko)
export const getFormVisibleFunkoSelector = createSelector(getFormModalFeatureState,  state => state.isModalFormVisible)
