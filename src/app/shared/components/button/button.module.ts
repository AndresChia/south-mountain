import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [ButtonComponent],
  imports: [SharedModule, MatButtonModule],
  declarations: [ButtonComponent],
})
export class ButtonModule {}
