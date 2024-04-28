import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FunkoActions from "../actions/funko.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FunkoService } from "../../services/funko.service";
import { loadFunkos } from "../actions/funko.actions";
import { notifyError } from "../actions/error.action";

@Injectable()
export class AddFunkoEffects {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(FunkoActions.addFunkos),
        mergeMap((payload) => this.funkoService.postFunko(payload.funko).pipe(
            map(() => FunkoActions.addFunkosSuccess()),
            map(() => loadFunkos()),
            catchError((error) => [ FunkoActions.addFunkosFailure(), notifyError({ errorMsg: "Erro ao salvar funko =/"}) ])
        ))
    ))

    constructor(private actions$: Actions, private funkoService: FunkoService) {}
}