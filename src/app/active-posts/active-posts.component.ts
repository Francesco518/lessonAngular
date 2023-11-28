import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
activeUsers: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().then(users => {
      this.activeUsers = users.filter(user => user.active)
    })
  }

}
