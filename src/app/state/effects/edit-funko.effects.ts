import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FunkoActions from "../actions/funko.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FunkoService } from "../../services/funko.service";
import { loadFunkos } from "../actions/funko.actions";
import { notifyError } from "../actions/error.action";

@Injectable()
export class EditFunkoEffects {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(FunkoActions.editFunkos),
        mergeMap((payload) => this.funkoService.putFunko(payload.funko).pipe(
            map(() => FunkoActions.editFunkosSuccess()),
            map(() => loadFunkos()),
            catchError((error) => [ FunkoActions.editFunkosFailure(), notifyError({ errorMsg: "Erro ao alterar funko =/"}) ])
        ))
    ))

    constructor(private actions$: Actions, private funkoService: FunkoService) {}
}