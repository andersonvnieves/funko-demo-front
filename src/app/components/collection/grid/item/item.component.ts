import { Component, Input } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Funko } from '../../../../models/funko';
import { Store } from '@ngrx/store';
import { openModalEdit } from '../../../../state/actions/form-modal.actions';
import { deleteFunkos } from '../../../../state/actions/funko.actions';
import { AppState } from '../../../../state/app-state/app.state';
@Component({
  selector: 'fkl-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  providers: [ConfirmationService],
})
export class ItemComponent {
  @Input() funko: Funko = null;
  items: MenuItem[] | undefined
  
  constructor(private confirmationService: ConfirmationService, private store: Store<AppState>) {}

  ngOnInit() {
    this.items = [ { label: 'Opções do Funko',
        items: [
          { label: 'Editar', icon: 'pi pi-pencil', command: () => this.store.dispatch(openModalEdit({ currentFunko: this.funko })) },
          { label: 'Deletar', icon: 'pi pi-times', command: () => this.confirmationBeforeDelete() }          
        ],
      },
    ]
  }

  confirmationBeforeDelete() {    
    this.confirmationService.confirm({      
      message: `Quer mesmo apagar o funko ${this.funko.name} ?`,
      header: 'Confirmação de exclusão!',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",
      accept: () => this.store.dispatch(deleteFunkos({ funkoId: this.funko.id }))
    })  
  }
}