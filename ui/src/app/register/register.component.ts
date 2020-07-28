import {Component, OnInit} from '@angular/core';
import {CreateUserDto} from "../create-user.dto";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDto: CreateUserDto;
  loading: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.userDto = new CreateUserDto();
    this.loading = false;
  }

  ngOnInit() {
  }

  validate() {
    if (!this.userDto.name) {
      alert('Please enter a name');
      return false;
    }

    if (!this.userDto.email) {
      alert('Please enter an email');
      return false;
    }

    return true;
  }

  onSubmit() {
    console.log(this.userDto);
    if (!this.validate()) {
      return;
    }
    this.loading = true;
    this.authService.create(this.userDto).subscribe(res => {
      this.loading = false;
      console.log(res);
      this.authService.setUser(res);
      this.router.navigate(['/dashboard']).catch(
        (reason: any) => {
          console.warn(reason + 'Route not found');
        }
      );
    }, er => {
      this.loading = false;
      alert(er);
    });
  }

}
