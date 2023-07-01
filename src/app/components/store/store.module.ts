import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  exports: [StoreComponent],
  imports: [SharedModule, StoreRoutingModule, HeaderModule],
  declarations: [StoreComponent],
})
export class StoreModule {}
