import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiCoreModule } from '../../shared/modules/ui-core/ui-core.module';
import { TimelineComponent } from '../timeline/timeline.component';
import { InfoTableComponent } from './info-table.component';

@NgModule({
  declarations: [
    InfoTableComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,

    // UI core
    UiCoreModule,
  ],
  exports: [
    InfoTableComponent
  ]
})
export class InfoTableModule { }
