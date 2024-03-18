import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutModule } from './presentation/layout/layout.module';
import { UiCoreModule } from './presentation/shared/modules/ui-core/ui-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserAnimationsModule,
    HttpClientModule,

    // UI core
    UiCoreModule,

    // Core "singleton" modules (not feature modules)
    LayoutModule,
  ],
  providers: [
    // Core "singleton" services
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
