import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiCoreModule } from '../shared/modules/ui-core/ui-core.module';
import { HeaderComponent } from './header/header.component';
import { InfoTableModule } from './info-table/info-table.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InfoTableModule,

    // UI core
    UiCoreModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
