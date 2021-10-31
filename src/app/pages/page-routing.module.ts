import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftMenuComponent } from '../layout/left-menu/left-menu.component';
import { FullPageComponent } from '../layout/full-page/full-page.component';



const routes: Routes = [
  {
    path: 'console',
    component: LeftMenuComponent,
    children: [
      { path: 'project', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'draw', loadChildren: () => import('./draw/draw.module').then(m => m.DrawModule) },
    ],
  },
  {
    path: 'console',
    component: FullPageComponent,
    children: [
      { path: 'draw2', loadChildren: () => import('./draw/draw.module').then(m => m.DrawModule) },
    ],
  },
  {
     path: '**', pathMatch: 'full', redirectTo: '/console/project'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PageRoutingModule { }
