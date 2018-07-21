import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UsersService} from './users.service';


@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    providers: [UsersService],
})
export class UsersComponent implements OnInit {
    ngOnInit() {
    }
}
