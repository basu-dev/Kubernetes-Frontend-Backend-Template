import { Component, input } from '@angular/core';
import { IUser } from '../user';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-user-list',
    imports: [DatePipe],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users = input<IUser[]>();

}
