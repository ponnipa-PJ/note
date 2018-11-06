import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  notes: any = [];
  detail;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.detail = this.navParams.data
    console.log(this.detail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  updatenote() {
    this.http.get("http://localhost/note/note.php?update").subscribe(data => {
      console.log(data);
      this.notes = data;
    }, err => {
      console.log(err);
    });
  }
}

