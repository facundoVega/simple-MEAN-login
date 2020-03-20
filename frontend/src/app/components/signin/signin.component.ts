import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  user= {};

  constructor( 
    private authService: AuthService,
    private router: Router
              ) { }

  ngOnInit() {
  }

  signIn(){
      this.authService.signin(this.user)
      .subscribe(
        res =>{
          console.log("Respuesta ", res);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/private']);

        },
        err =>{
          console.log("Error: ", err);
        }
      );
  }

}
