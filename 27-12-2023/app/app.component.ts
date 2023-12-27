import { Component} from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
   constructor(private _userService:UserService){

   }
  
   users:User[] = [];
   userId:number=0;
   user:any;
   getUsers(){
        this._userService.getUsers().subscribe({
         next:data => {
            console.log(data);
            this.users =<User[]>data;
         }, 
         error: error=> console.log(error),
         complete:() => console.log('Get method calling completed')
      }); 
    }

    getUserById(){
      this._userService.getUserById(this.userId).subscribe({
         next:data => {
            console.log(data);
            this.user =<User>data;
         }, 
         error: error=> {
            console.log(error);
            this.user ='User not Found';
          },
         complete:() => console.log('Get method calling completed')
      }); 
    }
}
