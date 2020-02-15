import { User } from './../model/user';
import { UserService } from '../services/user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {

  // created userEditStatus as an empty object. it could be editing or !editing mode.
  userEditStatus = {};


  constructor(
    public userService: UserService) { }

  // In general: To edit and save any data in the table, we need to have User information and index in the table.
  // To cancel edit: we just need to have an index of the user in the table.


  // edit user table method: 
  edit(currentUser: User, index: number) {
    const copyOfCurrentUser = { ...currentUser }; // spread operator: copyOfCurrentUser object holds all properties of currentUser.
    this.userEditStatus[index] = copyOfCurrentUser; // Editing user index holds a copyOfCurrentUser object, 
  }


  // save user table method: 
  save(modifiedUser: User, index: number) {
    this.userEditStatus[index] = null; // Stop editing at current user.
    this.userService.save(modifiedUser); // save current edited user
  }

  // Cancel edit user table method: 
  cancelEdit(index: number) {
    const originalUser = this.userEditStatus[index]; // originalUser holds editedStatus of user in an object.
    this.save(originalUser, index); // Saves original User object.
  }


}
