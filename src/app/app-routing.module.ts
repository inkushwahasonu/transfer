import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./pages/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: 'terms-of-service',
    loadChildren: () =>
      import('./pages/terms-of-service/terms-of-service.module').then(
        (m) => m.TermsOfServiceModule
      ),
  },
  {
    path: 'get:/docId',
    loadChildren: () =>
      import('./pages/get-files/get-files.module').then(
        (m) => m.GetFilesModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/upload/upload.module').then((m) => m.UploadModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
