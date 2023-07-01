import { NgModule } from '@angular/core';
import { CheckBoxComponent } from './check-box.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  exports: [CheckBoxComponent],
  imports: [SharedModule, MatCheckboxModule],
  declarations: [CheckBoxComponent],
})
export class CheckBoxModule {}
