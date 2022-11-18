import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routeProps: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { icon: 'home' }
  },
  {
    path: 'template',
    title: 'Template Forms',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
    data: { icon: 'description' }
  },
  {
    path: 'reactive',
    title: 'Reactive Forms',
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule),
    data: { icon: 'article' }
  }
];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...routeProps,
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
