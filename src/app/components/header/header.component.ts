import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app-state/app.state';
import { getFunkosPendingSelector } from '../../state/reducers/load-funko.reducer';

@Component({
  selector: 'fkl-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  requestIsHappening$: Observable<boolean>

  constructor(private store: Store<AppState>) {
    this.requestIsHappening$ = this.store.select(getFunkosPendingSelector)
  }
}
