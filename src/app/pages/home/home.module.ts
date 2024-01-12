import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatPaginatorModule],
})
export class HomeModule {}
