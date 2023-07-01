import { NgModule } from '@angular/core';
import { CategorySidebarComponent } from './category-sidebar.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [CategorySidebarComponent],
  imports: [SharedModule, MatDividerModule],
  declarations: [CategorySidebarComponent],
})
export class CategorySidebarModule {}
