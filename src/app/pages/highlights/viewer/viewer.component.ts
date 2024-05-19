import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';
import { Comment } from 'src/app/shared/modellek/Comment';
import { AuthService } from '../../../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() imageInput: any;

  commentObject: any = {};

  comments: Comment[] = [];
  newComment: Comment = { username: '', text: '' };

  constructor(private commentService: CommentService, private authService: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(data => {
      this.comments = data.map(e => {
        const data = e.payload.doc.data() as Comment;
        const id = e.payload.doc.id;
        return { id, ...data };
      });
    });
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.newComment.username = user.displayName || user.email || ''; // Felhasználónév beállítása
      }
    });
  }
  

  addComment() {
    if(this.newComment.username && this.newComment.text) {
      this.commentService.addComment(this.newComment);
      this.newComment = { username: '', text: '' };
    }
  }

  deleteComment(id: string | undefined) {

   if (id) {
      this.commentService.deleteComment(id);
    } else {
      console.error('Cannot delete comment without a valid id.');
    }
  }

}
