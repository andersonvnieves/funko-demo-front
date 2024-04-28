import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeModal } from '../../../state/actions/form-modal.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funko } from '../../../models/funko';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Category } from '../../../models/category';
import { Serie } from '../../../models/serie';
import { loadSeries } from '../../../state/actions/serie.actions';
import { addFunkos, editFunkos } from '../../../state/actions/funko.actions';
import { AppState } from '../../../state/app-state/app.state';
import { getFormVisibleFunkoSelector, getModalCurrentFunkoSelector, getModalModeSelector } from '../../../state/reducers/form-modal.reducer';

@Component({
  selector: 'fkl-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.scss'
})
export class FormModalComponent {
  isModalFormVisible: boolean = false
  isAddMode: boolean
  
  modalFormState$: Observable<any>
  categories$: Observable<Category[]>
  series: Serie[]
  filteredSeries: string[]

  funkoForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", [Validators.required, Validators.maxLength(45)]),
    category: new FormControl("", [Validators.required, Validators.maxLength(45)]),
    serie: new FormControl("", [Validators.required]),
    imageUrl: new FormControl("", [Validators.required, Validators.maxLength(255)])
  })

  constructor(private store: Store<AppState>) {
    this.store.select(getModalModeSelector).subscribe(modalMode => {this.isAddMode = modalMode})
    this.store.select(getModalCurrentFunkoSelector).subscribe((funko) => this.setFunkoToForm(funko))    
    this.categories$ = this.store.select((state) => state.category) 
    this.store.dispatch(loadSeries())
    this.store.select((state) => state.serie).subscribe(serie => this.series = serie)
    this.store.select(getFormVisibleFunkoSelector).subscribe(visible => this.isModalFormVisible = visible)
  }
 
  clickCloseModal() {
    this.funkoForm.reset()   
    this.store.dispatch(closeModal())
  }

  onSubmit(event: Event){    
    if(this.isAddMode)
      this.store.dispatch(addFunkos({ funko: this.getFunkoFromForm()}))
    else
      this.store.dispatch(editFunkos({ funko: this.getFunkoFromForm() }))
    this.clickCloseModal()
  }

  private setFunkoToForm(funko: Funko){
    this.funkoForm.controls.id.setValue(funko?.id)
    this.funkoForm.controls.name.setValue(funko?.name)
    this.funkoForm.controls.category.setValue(funko?.category)
    this.funkoForm.controls.serie.setValue(funko?.serie)
    this.funkoForm.controls.imageUrl.setValue(funko?.imageUrl)
  }

  private getFunkoFromForm = <Funko>()=> ({
      id: this.funkoForm.controls.id.value as string,
      name: this.funkoForm.controls.name.value as string,
      category: this.funkoForm.controls.category.value,
      serie: this.funkoForm.controls.serie.value as string,
      imageUrl: this.funkoForm.controls.imageUrl.value as string
    })
  
  
  filterSeries(event: AutoCompleteCompleteEvent) {
    this.filteredSeries = this.series.filter(serie => serie.label.includes(event.query.toUpperCase()))
      .map(serie => serie.label)
  }

  nameToUpperCase(event: Event){
    this.funkoForm.controls.name.setValue(this.funkoForm.controls.name.value.toUpperCase())
  }

  serieToUpperCase(){
    this.funkoForm.controls.serie.setValue(this.funkoForm.controls.serie.value.toUpperCase())
  }
}
