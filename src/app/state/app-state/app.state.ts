import { Category } from "../../models/category"
import { FormModalState } from "../../models/form-modal-state"
import { Funko } from "../../models/funko"
import { Serie } from "../../models/serie"
import { RequestState } from "./request.state"

export interface AppState{
    load: RequestState<Funko[]>,
    add: RequestState<Funko>,
    edit: RequestState<Funko>,
    delete: RequestState<string>,
    formModal: FormModalState,
    category: Category[],
    serie: Serie[]
}