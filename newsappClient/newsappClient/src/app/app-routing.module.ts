// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
//
// import { ComposeMessageComponent }  from './compose-message/compose-message.component';
// // import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
//
// const appRoutes: Routes = [
//   {
//     path: '/',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: './admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
//     data: { preload: true }
//   } //,
//   // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
//   // { path: '**', component: PageNotFoundComponent }
// ];
//
// @NgModule({
//   imports: [
//     RouterModule.forRoot(
//       appRoutes,
//       {
//         enableTracing: true, // <-- debugging purposes only
//       }
//     )
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule { }
