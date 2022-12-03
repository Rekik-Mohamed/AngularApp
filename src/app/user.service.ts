import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
userList:AngularFireList<any>  
constructor(private db:AngularFireDatabase) {
    this.userList=db.list('Users');
   }
getUsers():Observable<any>{
 return this.userList.snapshotChanges();
} 
getUserById(id:any) : Observable<any>{
  return this.db.list('Users', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
}
  }
