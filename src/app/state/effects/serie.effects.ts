import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as SerieActions from "../actions/serie.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { SerieService } from "../../services/serie.service";

@Injectable()
export class SerieEffects {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(SerieActions.loadSeries),
        mergeMap(() => 
            this.serieService.getSeries().pipe(
                map(series => SerieActions.loadSeriesSuccess({series})),
                catchError((error) => [ SerieActions.loadSeriesFailure({error}) ])
            )        
    )))

    constructor(private actions$: Actions, private serieService: SerieService) {}
}