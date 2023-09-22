import { Injectable, inject } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  collectionData,
  getDocs,
  QuerySnapshot,
  Query,
  onSnapshot,
  Unsubscribe
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

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
  private firestore = inject(Firestore);

  constructor(){
    // this.getDataRt();
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

  //! Datos en tiempo real de la base de datos
  unsubscribe!: Unsubscribe;

  dbDataRt$: BehaviorSubject<any> = new BehaviorSubject(null);

  getDataRt(){
    const collectionInstance = collection(this.firestore,'conduceDb');

    this.unsubscribe = onSnapshot(collectionInstance,
      (querySnapshot) => {
        const data = querySnapshot.docs.map( doc => {
          return {id: doc.id, ...doc.data()}
        })

        this.dbDataRt$.next(data);
      },
      (error) => {
        console.log(`Error Obteniendo los datos ${error}`);
      },
      () => {
        console.log('terminado de cargar');
      }
    );
  }

  destroyOnSnapshot(){
    if(this.unsubscribe){
      this.unsubscribe();
    }
  }

}
