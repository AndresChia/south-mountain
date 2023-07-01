import { NgModule } from '@angular/core';
import { BannerMiniumOrderComponent } from './banner-minium-order.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  exports: [BannerMiniumOrderComponent],
  imports: [SharedModule],
  declarations: [BannerMiniumOrderComponent],
})
export class BannerMiniumOrderModule {}
