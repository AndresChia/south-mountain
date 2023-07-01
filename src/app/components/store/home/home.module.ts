import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CategorySidebarModule } from 'src/app/shared/components/category-sidebar/category-sidebar.module';
import { FiltersModule } from 'src/app/shared/components/filters/filters.module';
import { BannerMiniumOrderModule } from 'src/app/shared/components/banner-minium-order/banner-minium-order.module';
import { BannersModule } from 'src/app/shared/components/banners/banners.module';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryModule } from '../category/category.module';

@NgModule({
  exports: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    CategorySidebarModule,
    FiltersModule,
    BannerMiniumOrderModule,
    BannersModule,
    MatDividerModule,
    CategoryModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
