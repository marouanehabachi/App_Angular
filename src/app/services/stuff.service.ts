import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Physique } from '../models/Physique.model';

@Injectable({
  providedIn: 'root'
})
export class StuffService {

  constructor(private http: HttpClient) { }

  private stuff: Physique[] = [
    {
      _id: '324sdfmoih3',
      nom: 'chakir',
      prenom: 'mohamed',
      mail: 'mohamad@test.com',
      telephone: 33622222222,
      userId: 'will'
    },
    {
      _id: '324sdfmoih4',
      nom: 'chare',
      prenom: 'simo',
      mail: 'simo@test.com',
      telephone: 33611111111, 
      userId: 'will'
    }];
  public stuff$ = new Subject<Physique[]>();

  getStuff() {
    this.http.get('http://localhost:3000/api/stuff').subscribe(
      (stuff: Physique[]) => {
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

  getPhysiqueById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/stuff/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewPhysique(physique: Physique) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/stuff', physique).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewPhysiqueWithFile(physique: Physique) {
    return new Promise((resolve, reject) => {
      const physiqueData = new FormData();
      physiqueData.append('thing', JSON.stringify(physique));
      this.http.post('http://localhost:3000/api/stuff', physiqueData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyPhysique(id: string, physique: Physique) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/stuff/' + id, physique).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }



  deletePhysique(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/stuff/' + id).subscribe(
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
