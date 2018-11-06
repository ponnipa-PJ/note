import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddnotePage } from '../addnote/addnote';
import { EditPage } from '../edit/edit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes: any = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.getallnote();
  }
  ionViewDidLoad() {

  }
  getallnote() {
    this.http.get("http://localhost/note/note.php?get").subscribe(data => {
      console.log(data);
      this.notes = data;
    }, err => {
      console.log(err);
    });
  }
  add() {
    this.navCtrl.push(AddnotePage);
  }
  deletenote(id) {
    this.http.get("http://localhost/note/note.php?delete=1&id="+id).subscribe(data => {
      console.log(data);
      this.notes = data;
    }, err => {
      console.log(err);
    });
  }
  updatenote(n) {
    console.log(n);
    this.navCtrl.push(EditPage, n);
  }



}
