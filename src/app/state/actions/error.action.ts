import { createAction, props } from "@ngrx/store";

export const notifyError = createAction("[ERROR] Notify error", props<{ errorMsg: string }>())