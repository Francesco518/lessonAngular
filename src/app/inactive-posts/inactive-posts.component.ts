import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  inactiveUsers: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().then(users => {
      this.inactiveUsers = users.filter(user => !user.active)
    })
  }

}
