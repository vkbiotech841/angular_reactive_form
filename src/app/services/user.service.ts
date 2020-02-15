import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor() {
    // getItem(): Retrieve a value by the key from localStorage.
    // In our case key is userTable.
    const userTable = window.localStorage.getItem('userTable');
    // if key (userTable) is present. the parse JSON using key.
    // parse:Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    if (userTable) {
      this.users = JSON.parse(userTable);
    }
  }


  // Saving users to local storage. Local localStorage is a window object.
  // setItem: setItem(key: string, value: string)
  // stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
  private saveToLocalStorage() {
    window.localStorage.setItem('userTable', JSON.stringify(this.users));
  }


  // Logic for saving newUser in the users array. Based on value. 
  // Here, we are considering email as value to compare with existing User.
  save(newUser: User) {
    let isUserExist = false;
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].email);
      if (this.users[i].email === newUser.email) {
        isUserExist = true;
        index = i;
        break;
      }
    }
    if (isUserExist === false) {
      this.users.push(newUser);
    } else {
      this.users[index] = newUser;
    }
    this.saveToLocalStorage();
  }

  // Delete method for deleting a row from the userTable:
  deleteRow(index: number) {
    this.users.splice(index, 1);
    this.saveToLocalStorage();
  }


}

