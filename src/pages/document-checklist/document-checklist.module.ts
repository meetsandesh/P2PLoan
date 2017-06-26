import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentChecklist } from './document-checklist';

@NgModule({
  declarations: [
    DocumentChecklist,
  ],
  imports: [
    IonicPageModule.forChild(DocumentChecklist),
  ],
  exports: [
    DocumentChecklist
  ]
})
export class DocumentChecklistModule {}
