import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from '../modellek/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  collectionName = 'Users';


  constructor(private afs: AngularFirestore){ }

  create(user: User): Promise<void>{
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }
  getAll(){

  }
  update(){

  }
  delete(){

  }
}
