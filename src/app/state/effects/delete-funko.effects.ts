import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FunkoActions from "../actions/funko.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FunkoService } from "../../services/funko.service";
import { loadFunkos } from "../actions/funko.actions";
import { notifyError } from "../actions/error.action";

@Injectable()
export class DeleteFunkoEffects {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(FunkoActions.deleteFunkos),
        mergeMap((payload) => this.funkoService.deleteFunkoById(payload.funkoId).pipe(
            map(() => FunkoActions.deleteFunkosSuccess()),
            map(() => loadFunkos()),
            catchError((error) => [ FunkoActions.deleteFunkosFailure(), notifyError({ errorMsg: "Erro ao apagar funko =/"}) ])
        ))
    ))

    constructor(private actions$: Actions, private funkoService: FunkoService) {}
}