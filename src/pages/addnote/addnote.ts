import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {
  form: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
  }

  insertnewnote() {
    this.http.get("http://localhost/note/note.php?insert", this.form).subscribe(data => {
      console.log(data);
      this.form = data;
    }, err => {
      console.log(err);
    });
  }
}

