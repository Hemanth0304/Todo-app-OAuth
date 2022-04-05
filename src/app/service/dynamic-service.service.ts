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
        name: 'Joe',
        age: 21,
        IT: 'Software',
        profilePicture: 'assets/sereja-ris-zGyG2OyLu4k-unsplash.jpg',
      } as dog,
      {
        name: 'Harry',
        age: 26,
        IT: 'Software',
      } as dog,
      {
        name: 'Phineas',
        age: 31,
        Accounts: 'account',
        profilePicture: 'assets/hang-niu-Tn8DLxwuDMA-unsplash.jpg',
      } as cat,
      {
        name: 'Nobita',
        age: 33,
        Accounts: 'account',
      } as cat,
      {
        name: 'Cathy',
        age: 47,
        IT: 'Infra',
        profilePicture: 'assets/jack-brind-rmvG_oHzCNA-unsplash.jpg',
      } as dog,
      {
        name: 'Tom',
        age: 24,
        IT: 'Infra',
        profilePicture: 'assets/charles-zqhe4qjVTJI-unsplash.jpg',
      } as dog,
      {
        name: 'Mia',
        age: 20,
        Accounts: 'account',
        profilePicture: 'assets/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg',
      } as cat,
      {
        name: 'Fruit',
        age: 44,
        IT: 'account',
      } as dog,
    ];
  }
}