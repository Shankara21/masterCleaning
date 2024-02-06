import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';
import { MasterServiceService } from 'src/app/services/masterService/master-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  nik: string = '';
  password: string = '';
  isAuthenticated: boolean = false;

  alert: boolean = false;
  alertMsg: string = "";

  form = new FormGroup({
    nik: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  constructor(private masterService:MasterServiceService,private authService:AuthServiceService,private router:Router) {
    
  }

  login() {
    // Perform authentication logic here
    console.log(this.form.value);

    if (this.form.invalid) {
      this.alert = true;
      this.alertMsg = "Lengkapi form terlebih dahulu";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
      return
    } else {
      this.authService.Login(this.form.value).subscribe((data:any)=>{
        console.log(data);
        this.authService.SetToken(data.token)
        this.masterService.ShowUserByNik(data.user.nik).subscribe((user)=>{
          console.log(user);
          this.authService.SetUser(user)
        })
        
        
      console.log("login Sucees!");
      
      this.router.navigate(['/dashboard']);
      },err=>{
        console.log(err);
        this.alert = true;
      this.alertMsg = "Login Gagal!";
      setTimeout(() => {
        this.alert = false;
        this.alertMsg = "";
      }, 3000);
      })

      
    }
    
    if (this.nik === 'validNik' && this.password === 'validPassword') {
      // Authentication successful
      console.log('Authentication successful');
      this.isAuthenticated = true; // Set the authentication status to true
      // Redirect to a different page or perform further actions
    } else {
      // Authentication failed
      console.error('Authentication failed');
      this.isAuthenticated = false; // Set the authentication status to false
      // You can display an error message to the user if needed
    }
  }

  logout() {
    // Perform logout logic here, e.g., clear authentication tokens
    this.isAuthenticated = false;
  }
}