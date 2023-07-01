import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [CommonModule, FormsModule, RouterModule],
  declarations: [SharedComponent],
})
export class SharedModule {}
