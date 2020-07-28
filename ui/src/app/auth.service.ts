import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateUserDto} from "./create-user.dto";
import {API_BASE_URL} from "./constants";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${API_BASE_URL}/auth`;

  constructor(private httpClient: HttpClient) { }

  public create(userDto: CreateUserDto) {
    return this.httpClient.post<User>(`${this.url}`, userDto);
  }
}
