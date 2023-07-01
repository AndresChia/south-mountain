import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [HeaderComponent],
  imports: [
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
