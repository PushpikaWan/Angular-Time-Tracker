import { NgModule } from '@angular/core';

import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
         MatAutocompleteModule, MatSelectModule, MatDividerModule, MatCardModule,
         MatChipsModule, MatDialogModule } from '@angular/material';

//custom material modules 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule, 
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            MatAutocompleteModule, NgxMaterialTimepickerModule, MatSelectModule,
            MatDividerModule, MatCardModule, MatChipsModule, MatDialogModule],
  exports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            MatAutocompleteModule, NgxMaterialTimepickerModule, MatSelectModule,
            MatDividerModule, MatCardModule, MatChipsModule, MatDialogModule],
})
export class MyOwnCustomMaterialModule { }