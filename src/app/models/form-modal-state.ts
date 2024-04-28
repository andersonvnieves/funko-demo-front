import { Nullable } from "primeng/ts-helpers";
import { Funko } from "./funko";

export interface FormModalState {
    isModalFormModeAdd: boolean,
    isModalFormVisible: boolean,
    currentFunko: Nullable<Funko>
}