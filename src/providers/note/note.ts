import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class NoteProvider {
  api_url = 'http://localhost/note/note.php'
  constructor(public http: HttpClient) {
    console.log('Hello NoteProvider Provider');
  }

  getAll() {
    return new Promise((resovle, reject) => {
      this.http.get(this.api_url + '?get=1').subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  insert(body) {
    return new Promise((resovle, reject) => {
      body['key'] = 'insert';
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.api_url, JSON.stringify(body), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  update(body) {
    return new Promise((resovle, reject) => {
      body['key'] = 'update';
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.api_url, JSON.stringify(body), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }

  delete(id) {
    return new Promise((resovle, reject) => {
      this.http.get(this.api_url + '?delete=1&id=' + id)
        .subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
}
