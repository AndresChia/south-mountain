import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  exports: [ProfileComponent],
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
