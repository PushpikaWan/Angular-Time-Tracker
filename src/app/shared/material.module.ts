import { NgModule } from '@angular/core';

import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule, 
            MatIconModule, MatButtonModule],
  exports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
            MatIconModule, MatButtonModule],
})
export class MyOwnCustomMaterialModule { }