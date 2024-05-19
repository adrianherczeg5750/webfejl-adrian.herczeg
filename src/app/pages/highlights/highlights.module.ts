import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightsRoutingModule } from './highlights-routing.module';
import { HighlightsComponent } from './highlights.component';
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MatSelect } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    HighlightsComponent,
    ListComponent,
    ViewerComponent,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
    HighlightsRoutingModule,
    MatSelect,
    MatOptionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class HighlightsModule { }
