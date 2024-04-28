import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AppState } from './state/app-state/app.state';
import { Observable } from 'rxjs';
import { getErrorMsgSelector } from './state/reducers/error.reducer';

@Component({
  selector: 'fkl-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  errorMsg$: Observable<string>
  constructor(private config: PrimeNGConfig, private messageService: MessageService, private store: Store<AppState>) {
    this.errorMsg$ = this.store.select(getErrorMsgSelector)
  }

  ngOnInit() {
    this.config.setTranslation({
        accept: 'Sim',
        reject: 'Não',
    });

    this.errorMsg$.subscribe(msg => this.messageService.add({ severity: 'error', summary: 'Error', detail: msg }))
  }
}
