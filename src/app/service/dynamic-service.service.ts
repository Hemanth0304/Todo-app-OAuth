import { Injectable } from '@angular/core';
import cat from '../models/cat';
import pets from '../models/pets';
import dog from '../models/dog';

@Injectable({
  providedIn: 'root'
})
export class DynamicServiceService {

  constructor() { }
  get members(): pets[] {
    return [
      {
        name: 'Rex',
        age: 5,
        IT: 'Central Park, New York',
        profilePicture: 'assets/sereja-ris-zGyG2OyLu4k-unsplash.jpg',
      } as dog,
      {
        name: 'Max',
        age: 2,
        IT: 'Treptower Park, Berlin',
      } as dog,
      {
        name: 'Peanut',
        age: 1,
        favoriteComfyPlace: 'Human bellies',
        profilePicture: 'assets/hang-niu-Tn8DLxwuDMA-unsplash.jpg',
      } as cat,
      {
        name: 'Noob',
        age: 3,
        favoriteComfyPlace: 'Window side',
      } as cat,
      {
        name: 'Carabas',
        age: 7,
        IT: 'Özgürlük, Istanbul',
        profilePicture: 'assets/jack-brind-rmvG_oHzCNA-unsplash.jpg',
      } as dog,
      {
        name: 'Tom',
        age: 4,
        IT: 'Bois de Boulogne, Paris',
        profilePicture: 'assets/charles-zqhe4qjVTJI-unsplash.jpg',
      } as dog,
      {
        name: 'Mia',
        age: 2,
        favoriteComfyPlace: 'Under the couch',
        profilePicture: 'assets/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg',
      } as cat,
      {
        name: 'Fitz',
        age: 4,
        IT: 'Englisher Garten, Munich',
      } as dog,
    ];
  }
}