import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule],
})
export class MaterialModule {}
