import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { FilesPickerComponent } from './components/files-picker/files-picker.component';
import { DocComponent } from './components/doc/doc.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    children: [
      {
        path: 'doc/:docId',
        component: DocComponent,
      },
      {
        path: '',
        component: FilesPickerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {}
