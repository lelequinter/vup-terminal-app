import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { conduceData, DataBaseService } from '../services/data-base.service';
import { Observable } from 'rxjs';

interface ITableData extends conduceData{
  id: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly dbSvc = inject(DataBaseService);

  tableData!: ITableData[];

  tableData2!: Observable<any>;

  loading: boolean = false;

  async ngOnInit(): Promise<void> {
    this.tableData2 = this.dbSvc.dbDataRt$;

    this.tableData2.subscribe({
      next: (res) => {
        res ? this.loading = false : this.loading = true;
      }
    })

    this.dbSvc.getDataRt();

    // await this.getTableData();
  }

  ngOnDestroy(): void {
    this.dbSvc.destroyOnSnapshot();
  }

  async getTableData(): Promise<void>{
    this.loading = true;
    try {
      this.tableData  = await this.dbSvc.getData('conduceDb');
      this.loading = false
    } catch (error) {
      this.loading = false
      console.log(error);
    }
  }

  async add(): Promise<void>{
    const body = {
      empresa: "03",
      placa: "CRA123",
      destino: "41",
      numeroConduce: "555",
      horaSalida: "04:33 PM"
    }

    // this.loading = true;
    await this.dbSvc.addData('conduceDb', body);
    // await this.getTableData();
    // this.loading = false;
  }
}
