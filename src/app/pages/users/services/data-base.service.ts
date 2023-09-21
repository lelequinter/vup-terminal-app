import { Injectable, inject } from '@angular/core';
import {
  doc,
  addDoc,
  deleteDoc,
  Firestore,
  updateDoc,
  collection,
  collectionData,
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

  constructor() { }

  addData(collectionName: string, data: conduceData): Promise<any>{
    const collectionInstance = collection(this.firestore, collectionName);
    return addDoc( collectionInstance, data );
  }

  getData(collectionName: string): Observable<any>{
    const collectionInstance = collection(this.firestore, collectionName);
    return collectionData(collectionInstance, { idField: 'id' });
  }

}
