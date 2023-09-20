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

  async addData(data: conduceData): Promise<any>{
    const collectionInstance = collection(this.firestore,'conduceDb');

    return await addDoc( collectionInstance, data );
  }

}
