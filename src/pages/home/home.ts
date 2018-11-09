import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddnotePage } from '../addnote/addnote';
import { EditPage } from '../edit/edit';
import { NoteProvider } from '../../providers/note/note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes: any = [];

  constructor(public navCtrl: NavController, public notepro: NoteProvider, private alertCtrl: AlertController) {
    this.getallnote();
  }
  ionViewDidLoad() {

  }
  getallnote() {
    this.notepro.getAll().then((data: any) => {
      console.log(data);
      this.notes = data;
    });
  }
  add() {
    this.navCtrl.push(AddnotePage);
  }
  deletenote(id) {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Delete');
            this.notepro.delete(id).then((data: any) => {
              console.log(data);
              if (data.status == 'success') {
                this.getallnote();
              }
            });
          }
        }
      ]
    });
    alert.present();
  }

  updatenote(n) {
    console.log(n);
    this.navCtrl.push(EditPage, n);
  }



}
