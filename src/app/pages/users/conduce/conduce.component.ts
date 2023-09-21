import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DataBaseService, conduceData } from '../services/data-base.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-conduce',
  templateUrl: './conduce.component.html',
  styleUrls: ['./conduce.component.scss'],
})
export class ConduceComponent {
  private readonly fb = inject(FormBuilder);
  private readonly notification = inject(NzNotificationService);
  private readonly dbSvc = inject(DataBaseService);

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
      label: '01 - COOTRAMEQUE'
    },
    {
      value: '02',
      label: '02 - EXPRESO BRASILIA'
    },
    {
      value: '03',
      label: '03 - COOTRACOSTA'
    },
    {
      value: '04',
      label: '04 - LA VELOZ COSTEÑA'
    },
  ]

  // todo: Crear la interface del arreglo
  ciudades: any[] = [
    {
      value: '08',
      label: '08 - AGUACHICA'
    },
    {
      value: '32',
      label: '32 - ARACATACA'
    },
    {
      value: '41',
      label: '41 - ASTREA'
    },
    {
      value: '01',
      label: '01 - BUCARAMANGA'
    },
  ]

  loading: boolean = false;

  reset(){
    this.conduceForm.reset();

    this.notification.create(
      'info',
      'Formulario reseteado','',
      {
        nzDuration: 2000,
        nzStyle: {
          top: '60px',
          width: '400px',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '20px'
        },
      }
    );
  }

  async save(){
    if( this.conduceForm.invalid ){
      this.notification.create(
        'error',
        'Todos los campos son requeridos','',
        {
          nzDuration: 2000,
          nzPauseOnHover: true,
          nzStyle: {
            top: '60px',
            width: '400px',
            background: '#fff2f0',
            border: '1px solid #ffccc7',
            borderRadius: '20px'
          },
        }
      );
    }

    if( this.conduceForm.valid ){
      const { hora, ...rest  } = this.conduceForm?.value

      const body: conduceData = {
        ...rest,
        horaSalida: DateTime.fromJSDate(hora).toFormat('hh:mm a'),
      }

      this.loading = true;
      const succe = this.notification.create(
        'info',
        'Guardando información ... ','',
        {
          nzKey: 'validNotification',
          nzDuration: 0,
          nzPauseOnHover: true,
          nzStyle: {
            top: '60px',
            width: '400px',
            background: '#e6f7ff',
            border: '1px solid #91d5ff',
            borderRadius: '20px'
          },
          nzClass: 'loading-notification',
        }
      );

      try {
        await this.dbSvc.addData('conduceDb',body);

        this.conduceForm.reset();

        this.loading = false;

        this.notification.create(
          'success',
          'Información guardada','',
          {
            nzKey: 'validNotification',
            nzDuration: 2000,
            nzPauseOnHover: true,
            nzStyle: {
              top: '60px',
              width: '400px',
              background: '#f6ffed',
              border: '1px solid #b7eb8f',
              borderRadius: '20px',
              nzClass: 'loading-notification-completed',
            },
          }
        );

        setTimeout(() => {
          this.notification.remove(succe.messageId);
        }, 2000);

      } catch (error) {

        this.loading = false;

        this.notification.create(
          'error',
          'Ha ocurrido un error, vuelva a intentarlo','',
          {
            nzKey: 'validNotification',
            nzDuration: 2000,
            nzPauseOnHover: true,
            nzStyle: {
              top: '60px',
              width: '400px',
              background: '#fff2f0',
              border: '1px solid #ffccc7',
              borderRadius: '20px'
            },
          }
        );

        setTimeout(() => {
          this.notification.remove(succe.messageId);
        }, 3000);
      }
    }
  }

}
