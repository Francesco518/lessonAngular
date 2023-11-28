import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'assets/db.json'

  getUser(): Promise <User[]> {
    return fetch(this.url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error HTTP. ${response.status}`)
      }
      return response.json()
    })
    .then(data => data as User[])
  }
}
