import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  exports: [SettingsComponent],
  imports: [SharedModule, SettingsRoutingModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
