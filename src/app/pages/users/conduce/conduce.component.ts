import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conduce',
  templateUrl: './conduce.component.html',
  styleUrls: ['./conduce.component.scss']
})
export class ConduceComponent {
  private readonly fb = inject(FormBuilder);

  conduceForm: FormGroup = this.fb.group({
    empresa: [null, Validators.required],
    placa: [null, Validators.required],
    hora: [null, Validators.required],
    destino: [null, Validators.required],
    numeroConduce: [null, Validators.required],
  })

  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
  time: Date | null = new Date();

  // todo: Crear la interface del arreglo
  empresas: any[] = [
    {
      value: '01',
      label: '01 COOTRAMEQUE'
    },
    {
      value: '02',
      label: '02 EXPRESO BRASILIA'
    },
    {
      value: '03',
      label: '03 COOTRACOSTA'
    },
    {
      value: '04',
      label: '04 LA VELOZ COSTEÑA'
    },
  ]

  // todo: Crear la interface del arreglo
  ciudades: any[] = [
    {
      value: '08',
      label: '08 AGUACHICA'
    },
    {
      value: '32',
      label: '32 ARACATACA'
    },
    {
      value: '41',
      label: '41 ASTREA'
    },
    {
      value: '01',
      label: '01 BUCARAMANGA'
    },
  ]

  reset(){
    this.conduceForm.reset();
  }

  save(){
    console.log(this.conduceForm.value);

  }
}
