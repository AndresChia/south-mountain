import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { BannerMiniumOrderModule } from 'src/app/shared/components/banner-minium-order/banner-minium-order.module';
import { FiltersModule } from 'src/app/shared/components/filters/filters.module';
import { CategorySidebarModule } from 'src/app/shared/components/category-sidebar/category-sidebar.module';
import { MatDividerModule } from '@angular/material/divider';
import { CardProductModule } from 'src/app/shared/components/card-product/card-product.module';

@NgModule({
  exports: [CategoryComponent],
  imports: [
    SharedModule,
    CategoryRoutingModule,
    FiltersModule,
    BannerMiniumOrderModule,
    CategorySidebarModule,
    MatDividerModule,
    CardProductModule
  ],
  declarations: [CategoryComponent],
})
export class CategoryModule {}
