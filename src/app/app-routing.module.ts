import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { ListComponent } from './pages/highlights/list/list.component';
import { ViewerComponent } from './pages/highlights/viewer/viewer.component';
import {AuthGuard} from "./shared/services/auth.guard";
const routes: Routes = [
  {
    path: 'main', loadChildren: () =>
    import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'teams', loadChildren: () =>
    import('./pages/teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'standings', loadChildren: () =>
    import('./pages/standings/standings.module').then(m => m.StandingsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'upgrades', loadChildren: () =>
    import('./pages/upgrades/upgrades.module').then(m => m.UpgradesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'grandprix', loadChildren: () =>
    import('./pages/grandprix/grandprix.module').then(m => m.GrandprixModule)
  },
  {
    path: 'highlights', loadChildren: () =>
    import('./pages/highlights/highlights.module').then(m => m.HighlightsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'not-found', loadChildren: () =>
    import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'login', loadChildren: () =>
    import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { path: 'register', loadChildren: () =>
    import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
