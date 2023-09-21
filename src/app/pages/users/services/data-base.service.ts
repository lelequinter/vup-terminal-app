import { Injectable, inject } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  collectionData,
  getDocs,
  QuerySnapshot,
  Query
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface conduceData {
  placa: string;
  empresa: string;
  destino: string;
  horaSalida: string;
  numeroConduce: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private readonly firestore = inject(Firestore);

  constructor(){
    this.test();
  }

  addData(collectionName: string, data: conduceData): Promise<any>{
    const collectionInstance = collection(this.firestore, collectionName);
    return addDoc( collectionInstance, data );
  }

  async getData(collectionName: string): Promise<any[]>{
    const q: Query<any> = collection(this.firestore, collectionName);
    const querySnapshot: QuerySnapshot<any> = await getDocs(q);

    const data = querySnapshot.docs.map( doc => {
      return {id: doc.id, ...doc.data()}
    })

    return data;
  }

  test(){
    const collectionInstance = collection(this.firestore, 'conduceDb');

    collectionData(collectionInstance, { idField: 'id' }).subscribe({
      next: (value) => {
        console.log(value);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
