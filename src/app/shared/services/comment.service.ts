import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../modellek/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private firestore: AngularFirestore) { }

  addComment(comment: Comment) {
    return this.firestore.collection('comments').add(comment);
  }

  getComments() {
    return this.firestore.collection('comments').snapshotChanges();
  }

  updateComment(id: string, comment: Comment) {
    return this.firestore.collection('comments').doc(id).update(comment);
  }

  deleteComment(id: string) {
    return this.firestore.collection('comments').doc(id).delete();
  }
}

