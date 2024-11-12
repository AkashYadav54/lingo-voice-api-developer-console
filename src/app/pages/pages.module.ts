import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ApikeysComponent } from './apikeys/apikeys.component';
import { UsageComponent } from './usage/usage.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DeveloperToolsComponent } from './developer-tools/developer-tools.component';

@NgModule({
  declarations: [
    ApikeysComponent,
    UsageComponent,
    PlaygroundComponent,
    DeveloperToolsComponent
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
