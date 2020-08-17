import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,
              private authService: AuthService) { }

  // submit() {
  //   // this.authService.login(this.form.value.username, this.form.value.password);
  // }

  @Input() error: string | boolean;

  ngOnInit(): void {
  }

  onLogin()
  {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
