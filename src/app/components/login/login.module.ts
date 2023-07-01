import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { CheckBoxModule } from 'src/app/shared/components/check-box/check-box.module';

@NgModule({
  exports: [LoginComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
    MatGridListModule,
    InputModule,
    ButtonModule,
    CheckBoxModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
