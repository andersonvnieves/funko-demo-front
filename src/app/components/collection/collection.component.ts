import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { openModalAdd } from '../../state/actions/form-modal.actions';
import { loadCategories } from '../../state/actions/category.actions';
import { AppState } from '../../state/app-state/app.state';
import { getFunkosPendingSelector, getFunkosResponseSelector } from '../../state/reducers/load-funko.reducer';
import { loadFunkos } from '../../state/actions/funko.actions';
import { Funko } from '../../models/funko';

@Component({
  selector: 'fkl-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit {
  pageTitle: string = "Minha Coleção"
  requestIsHappening$: Observable<boolean>  
  funkos$: Observable<Funko[]>  

  constructor(private store: Store<AppState>) {
    this.requestIsHappening$ = this.store.select(getFunkosPendingSelector)   
    this.funkos$ = this.store.select(getFunkosResponseSelector)
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadCategories())
    this.store.dispatch(loadFunkos())
  }  

  openFormModal(event: Event){
    this.store.dispatch(openModalAdd())
  }

}