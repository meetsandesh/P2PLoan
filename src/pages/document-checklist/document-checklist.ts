import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-document-checklist',
  templateUrl: 'document-checklist.html'
})
export class DocumentChecklist {
  public buttonText: string;
  public proceed: boolean;
  private eventId: number;
  public eventTitle: string;
  public documentChecklist: any;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.eventId = this._navParams.get('eventId');
    this.eventTitle = this._navParams.get('eventTitle');
    this.buttonText = "Next";
    this.documentChecklist = 
    [
      { id:'1',name:'adhaar',uploaded:0},
      { id:'2',name:'pan',uploaded:0},
      { id:'3',name:'passport',uploaded:0},
    ];
    this.checkUploadStatus();
  }

  public showListStatus(){
    let str="[";
    for (let doc of this.documentChecklist) {
      str+="{"+doc.id+","+doc.name+","+doc.uploaded+"},";
    }
    str+="]";
    this.showEvents(str);
  }

  public uploadDocument(document){
    for (let doc of this.documentChecklist) {
      if(doc.id==document.id){
        let index=this.documentChecklist.indexOf(doc);
        this.documentChecklist[index].uploaded=1;
      }
    }
    //this.showListStatus();
    this.showEvents("Upload call will fire.");
    this.checkUploadStatus();
  }

  public deleteDocument(document){
    for (let doc of this.documentChecklist) {
      if(doc.id==document.id){
        let index=this.documentChecklist.indexOf(doc);
        this.documentChecklist[index].uploaded=0;
      }
    }
    //this.showListStatus();
    this.showEvents("Delete call will fire.");
    this.checkUploadStatus();
  }

  public checkUploadStatus(){
    let uploaded_files=0;
    for (let doc of this.documentChecklist) {
      if(doc.uploaded==true){
        uploaded_files++;
      }
    }
    if(uploaded_files==this.documentChecklist.length){
      this.proceed=true;
    }
    else{
      this.proceed=false;
    }
  }

  public next() {
    this.showEvents("Next Screen will open");
  }

  showEvents(text) {
    let alert = this.alertCtrl.create({
      title: 'Event',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
