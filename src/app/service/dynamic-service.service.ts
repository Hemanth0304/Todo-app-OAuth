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
        IT: 'Software',
        profilePicture: 'assets/sereja-ris-zGyG2OyLu4k-unsplash.jpg',
      } as dog,
      {
        name: 'Max',
        age: 2,
        IT: 'Software',
      } as dog,
      {
        name: 'Peanut',
        age: 1,
        Accounts: 'account',
        profilePicture: 'assets/hang-niu-Tn8DLxwuDMA-unsplash.jpg',
      } as cat,
      {
        name: 'Noob',
        age: 3,
        Accounts: 'account',
      } as cat,
      {
        name: 'Carabas',
        age: 7,
        IT: 'account',
        profilePicture: 'assets/jack-brind-rmvG_oHzCNA-unsplash.jpg',
      } as dog,
      {
        name: 'Tom',
        age: 4,
        IT: 'account',
        profilePicture: 'assets/charles-zqhe4qjVTJI-unsplash.jpg',
      } as dog,
      {
        name: 'Mia',
        age: 2,
        Accounts: 'account',
        profilePicture: 'assets/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg',
      } as cat,
      {
        name: 'Fitz',
        age: 4,
        IT: 'account',
      } as dog,
    ];
  }
}