import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  form :any = {
    name : '',
    body : ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public notepro:NoteProvider, private alertCtrl:AlertController) {
    this.form = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  
  updatenote() {
    if(this.form.name == '' || this.form.body == ''){
      let alert = this.alertCtrl.create({
        title: 'warning',
        subTitle: 'Please input name and body ',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.notepro.update(this.form).then((data:any) => {
      console.log(data);
      if(data.status == 'success') {
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Update Note Success',
          buttons: [{
            text: 'Okey',
            handler: () => {
              this.navCtrl.pop();
            }
          }]
        });
        alert.present();
      }
    });
  }
}
