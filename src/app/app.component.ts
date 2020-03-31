import { Component } from '@angular/core';
import { APIService } from './api.service';
import { NgModule } from '@angular/core';

import { Subscriber } from 'rxjs';

interface User {
  name: string;
}
interface Notes {
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'NotesApp';
  columns = ['Name', 'Note', 'Show Notes', 'Delete'];
  columnsNotes = ['content'];
  userList: Array<User>;
  noteList: Array<Notes>;
  service: APIService;
  nameOnNote: string;
  nameToAdd: string;
  nameForNote: string;
  note: string;
  user: string;
  message: string;
  messageToAdd: string;
  deleteUserMessage: string;
  userDeleted = false;
  noteAdded = false;
  showNotes = false;
  addUser = false;
  messageObject;

  constructor(apiService: APIService) {
    this.service = apiService;
    apiService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.userList = data;
    });
  }

  GetUsers = () => this.service.getUsers().subscribe((data: Array<User>) => {
    console.log(data);
    this.userList = data;
  })

  AddUser = () => {
    this.service.AddUser(this.nameToAdd).subscribe((response) => {
      console.log(response);
      this.GetUsers();
    });
  }

  DeleteUser = (name: string) => {
    this.service.DeleteUser(name).subscribe((response) => {
      this.showNotes = false;
      this.noteAdded = false;
      this.GetUsers();
    });
  }

  AddNote = () => {
    this.service.AddNote(this.nameForNote, this.note).subscribe((response) => {
      this.noteAdded = true;
      this.GetNotes(this.nameForNote);
    });
  }

  CreateNote = (name: string) => {
    this.noteAdded = true;
    this.nameForNote = name;
    this.showNotes = false;
  }

  GetNotes = (name: string) => {
    this.service.GetNotes(name).subscribe((data: Array<Notes>) => {
      this.noteList = data;
      this.showNotes = true;
      this.user = name;
      this.noteAdded = false;
    });
  }
}
