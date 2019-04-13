import { NgModule } from '@angular/core';

import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
         MatAutocompleteModule } from '@angular/material';

//custom material modules 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule, 
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            MatAutocompleteModule, NgxMaterialTimepickerModule],
  exports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            MatAutocompleteModule, NgxMaterialTimepickerModule],
})
export class MyOwnCustomMaterialModule { }