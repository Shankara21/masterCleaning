import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public authService:AuthServiceService,private router:Router) {
    console.log(authService.GetUser());
    
  }
  signOut(){
    this.authService.DeleteToken()
    this.router.navigate(['/login'])
    
  }
}
