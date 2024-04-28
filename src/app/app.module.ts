import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkeletonModule } from 'primeng/skeleton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CollectionComponent } from './components/collection/collection.component';
import { GridComponent } from './components/collection/grid/grid.component';
import { ItemComponent } from './components/collection/grid/item/item.component';
import { GridSkeletonComponent } from './components/collection/grid-skeleton/grid-skeleton.component';
import { FormModalComponent } from './components/collection/form-modal/form-modal.component';

import { formModalReducer } from './state/reducers/form-modal.reducer';
import { categoryReducer } from './state/reducers/category.reducer';
import { CategoryEffects } from './state/effects/category.effects';
import { serieReducer } from './state/reducers/serie.reducer';
import { SerieEffects } from './state/effects/serie.effects';
import { LoadFunkoEffects } from './state/effects/load-funko.effects';
import { loadFunkoReducer } from './state/reducers/load-funko.reducer';
import { addFunkoReducer } from './state/reducers/add-funko.reducer';
import { AddFunkoEffects } from './state/effects/add-funko.effects';
import { EditFunkoEffects } from './state/effects/edit-funko.effects';
import { DeleteFunkoEffects } from './state/effects/delete-funko.effects';
import { errorReducer } from './state/reducers/error.reducer';
import { editFunkoReducer } from './state/reducers/edit-funko.reducer';
import { deleteFunkoReducer } from './state/reducers/delete-funko.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    CollectionComponent,
    GridComponent,
    ItemComponent,
    GridSkeletonComponent,
    FormModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    CardModule,
    ImageModule,
    MultiSelectModule,
    DividerModule,
    ButtonModule,
    MenuModule,
    ToastModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ProgressBarModule,
    SkeletonModule,
    AutoCompleteModule,
    TagModule,
    StoreModule.forRoot({
      formModal: formModalReducer, 
      category: categoryReducer,
      serie: serieReducer,
      loadFunko: loadFunkoReducer,
      addFunko: addFunkoReducer,
      editFunko: editFunkoReducer,
      deleteFunko: deleteFunkoReducer,
      error: errorReducer
    }, {}),
    EffectsModule.forRoot([
      CategoryEffects, 
      SerieEffects, 
      LoadFunkoEffects, 
      AddFunkoEffects, 
      EditFunkoEffects, 
      DeleteFunkoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
