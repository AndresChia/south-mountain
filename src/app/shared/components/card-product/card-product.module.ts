import { NgModule } from '@angular/core';
import { CardProductComponent } from './card-product.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { ButtonModule } from '../button/button.module';
import { MatChipsModule } from '@angular/material/chips';
import { InputModule } from '../input/input.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [CardProductComponent],
  imports: [
    SharedModule,
    ButtonModule,
    MatChipsModule,
    InputModule,
    MatIconModule,
  ],
  declarations: [CardProductComponent],
})
export class CardProductModule {}
