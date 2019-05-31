import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-data', loadChildren: './add-data/add-data.module#AddDataPageModule' },
  { path: 'edit-data', loadChildren: './edit-data/edit-data.module#EditDataPageModule' },
  { path: 'show', loadChildren: './show/show.module#ShowPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
