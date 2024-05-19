import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: AngularFireStorage) { }

  getImageUrl(imagePath: string) {
    return this.storage.ref(imagePath).getDownloadURL();
  }
}

