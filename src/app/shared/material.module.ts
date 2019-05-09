import { NgModule } from '@angular/core';

import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
         MatAutocompleteModule, MatSelectModule, MatDividerModule, MatCardModule,
         MatChipsModule, MatDialogModule, MatSidenavModule } from '@angular/material';

//custom material modules 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule, 
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            MatAutocompleteModule, NgxMaterialTimepickerModule, MatSelectModule,
            MatDividerModule, MatCardModule, MatChipsModule, MatDialogModule,
            MatSidenavModule ],
  exports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            MatAutocompleteModule, NgxMaterialTimepickerModule, MatSelectModule,
            MatDividerModule, MatCardModule, MatChipsModule, MatDialogModule,
            MatSidenavModule],
})
export class MyOwnCustomMaterialModule { }