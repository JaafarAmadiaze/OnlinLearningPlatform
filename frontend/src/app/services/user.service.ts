import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject=new BehaviorSubject<User>(new User());

  public userObservable:Observable<User>;


  constructor(private http:HttpClient , private toastrService:ToastrService) { 
    this.userObservable=this.userSubject.asObservable();
  }

  login(userLogin :IUserLogin ):Observable<User>{
    return  this.http.post<User>(LOGIN_URL,userLogin).pipe(
      tap({
        next:(user)=>{
          this.userSubject.next(user);
          this.toastrService.success("Welcome "+user.name , "Login Success");
        },
        error:(err)=>{
          this.toastrService.error(err.error,'Login Failed');
        }
      })
    );
  }

}
