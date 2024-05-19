import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradesRoutingModule } from './upgrades-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UpgradesRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class UpgradesModule { }
