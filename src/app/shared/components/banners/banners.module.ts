import { NgModule } from '@angular/core';
import { BannersComponent } from './banners.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  exports: [BannersComponent],
  imports: [SharedModule],
  declarations: [BannersComponent],
})
export class BannersModule {}
