import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FunkoActions from "../actions/funko.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FunkoService } from "../../services/funko.service";
import { notifyError } from "../actions/error.action";

@Injectable()
export class LoadFunkoEffects {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(FunkoActions.loadFunkos),
        mergeMap(() => 
            this.funkoService.getFunkos().pipe(
                map(funkos => FunkoActions.loadFunkosSuccess({funkos})),
                catchError((error) => [ FunkoActions.loadFunkosFailure(), notifyError({ errorMsg: "Erro ao carregar a coleção =/"}) ])
        ))
    ))

    constructor(private actions$: Actions, private funkoService: FunkoService) {}
}