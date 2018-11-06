import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http , RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {
  form: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
  }

  insertnewnote() {
    this.form.insert = 1;
    console.log(this.form)
    //this.http.post("https://smallboy1996.000webhostapp.com/api/note.php", this.form).subscribe(data => {
      //console.log(data);
      //this.form = data;
    //}, err => {
     // console.log(err);
    //});
    this.http.post('http://localhost/note/note.php', this.form)
      .pipe(         map(res => res.json())       )
        .subscribe(data => {
          console.log(data)
        }, error => {
          console.log(error)
      });
  }
}

