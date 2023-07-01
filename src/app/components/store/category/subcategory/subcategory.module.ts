import { NgModule } from '@angular/core';
import { SubcategoryComponent } from './subcategory.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { subcategoryRoutingModule } from './subcategory-routing.module';
import { BannerMiniumOrderModule } from 'src/app/shared/components/banner-minium-order/banner-minium-order.module';
import { FiltersModule } from 'src/app/shared/components/filters/filters.module';
import { CategorySidebarModule } from 'src/app/shared/components/category-sidebar/category-sidebar.module';

@NgModule({
  exports: [SubcategoryComponent],
  imports: [
    SharedModule,
    subcategoryRoutingModule,
    FiltersModule,
    BannerMiniumOrderModule,
    CategorySidebarModule,
  ],
  declarations: [SubcategoryComponent],
})
export class SubcategoryModule {}
