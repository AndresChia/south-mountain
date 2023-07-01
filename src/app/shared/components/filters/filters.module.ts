import { NgModule } from '@angular/core';
import { FiltersComponent } from './filters.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  exports: [FiltersComponent],
  imports: [SharedModule],
  declarations: [FiltersComponent],
})
export class FiltersModule {}
