import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get('https://jensjorisdecorte-backend-example-6.glitch.me/users');
  }
  AddUser = (name: string) => {
    return this.http.get('https://jensjorisdecorte-backend-example-6.glitch.me/add?name=' + name);
  }
  AddNote = (name: string, note: string) => {
    return this.http.get('https://jensjorisdecorte-backend-example-6.glitch.me/addnote?name=' + name + '&content=' + note);
  }
  DeleteUser = (name: string) => {
    return this.http.get('https://jensjorisdecorte-backend-example-6.glitch.me/remove?name=' + name);
  }
  GetNotes = (name: string) => {
    return this.http.get('https://jensjorisdecorte-backend-example-6.glitch.me/notes?name=' + name);
  }
}
