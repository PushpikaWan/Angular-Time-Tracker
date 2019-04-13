import { NgModule } from '@angular/core';

import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

//custom material modules 
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule, 
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            NgxMaterialTimepickerModule],
  exports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
            MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
            NgxMaterialTimepickerModule],
})
export class MyOwnCustomMaterialModule { }