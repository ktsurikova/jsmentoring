import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsViewComponent } from './news/news-view/news-view.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: 'create',
    component: NewsEditComponent
  },
  {
    path: 'edit/:id',
    component: NewsEditComponent
  },
  {
    path: 'view',
    component: NewsViewComponent
  }
  // {
  //   path: 'crisis-center',
  //   loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
