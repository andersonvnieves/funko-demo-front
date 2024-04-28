import { Injectable } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CategoryActions from "../actions/category.actions";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class CategoryEffects {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(CategoryActions.loadCategories),
        mergeMap(() => 
            this.categoryService.getCategories().pipe(
                map(categories => CategoryActions.loadCategoriesSuccess({categories})),
                catchError((error) => [ CategoryActions.loadCategoriesFailure({error}) ])
            )        
    )))

    constructor(private actions$: Actions, private categoryService: CategoryService) {}
}