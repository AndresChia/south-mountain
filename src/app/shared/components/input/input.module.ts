import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  exports: [InputComponent],
  imports: [SharedModule, MatFormFieldModule, MatInputModule],
  declarations: [InputComponent],
})
export class InputModule {}
