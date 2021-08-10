import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Moral } from '../models/Moral.model';

@Injectable({
  providedIn: 'root'
})
export class StuffMService {

  constructor(private http: HttpClient) { }

  private stuff: Moral[] = [
    {
      _id: '324sdfmoih3',
      entreprise: 'chakir',
      adresse: 'mohamed',
      mail: 'mohamad@test.com',
      telephone: '33622222222',
      userId: 'will'
    },
    {
      _id: '324sdfmoih4',
      entreprise: 'chare',
      adresse: 'simo',
      mail: 'simo@test.com',
      telephone: '33611111111', 
      userId: 'will'
    }];
  public stuff$ = new Subject<Moral[]>();

  getStuffM() {
    this.http.get('http://localhost:3000/api/stuffM').subscribe(
      (stuff: Moral[]) => {
        if (stuff) {
          this.stuff = stuff;
          this.emitStuff();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitStuff() {
    this.stuff$.next(this.stuff);
  }

  getMoralById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/stuffM/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewMoral(moral: Moral) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/stuffM', moral).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewMoralWithFile(moral: Moral) {
    return new Promise((resolve, reject) => {
      const moralData = new FormData();
      moralData.append('thing', JSON.stringify(moral));
      this.http.post('http://localhost:3000/api/stuffM', moralData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifymoral(id: string, moral: Moral) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/stuffM/' + id, moral).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }



  deleteMoral(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/stuffM/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
