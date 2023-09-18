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


}
