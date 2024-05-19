import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandprixComponent } from './grandprix.component';

const routes: Routes = [{ path: '', component: GrandprixComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrandprixRoutingModule { }
