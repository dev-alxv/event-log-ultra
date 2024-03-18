import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

const matModules = [
  CommonModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  FormsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTableModule
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules],
  declarations: [],
})
export class MaterialUiModule { }
