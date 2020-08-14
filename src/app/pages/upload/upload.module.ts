import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { FilesPickerComponent } from './components/files-picker/files-picker.component';
import { DocComponent } from './components/doc/doc.component';

@NgModule({
  declarations: [UploadComponent, FilesPickerComponent, DocComponent],
  imports: [CommonModule, UploadRoutingModule],
})
export class UploadModule {}
