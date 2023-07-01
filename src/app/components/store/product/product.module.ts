import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  exports: [ProductComponent],
  imports: [SharedModule, ProductRoutingModule],
  declarations: [ProductComponent],
})
export class ProductModule {}
