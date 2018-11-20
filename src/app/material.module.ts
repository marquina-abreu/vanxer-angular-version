import { NgModule } from '@angular/core';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon"; //iconoss..
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
//modals
import {MatDialogModule} from '@angular/material/dialog';


const material_mod= [
	MatToolbarModule,
	MatSidenavModule,
	MatMenuModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatSelectModule,
	MatFormFieldModule,
	MatListModule,
	MatGridListModule,
	MatRadioModule,
	MatDividerModule,
	MatDialogModule,
	MatProgressSpinnerModule
];

@NgModule({
 
  imports: [material_mod],
  exports: [material_mod],
})

export class MaterialModule { }