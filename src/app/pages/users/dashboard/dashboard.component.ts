import { Component, inject, OnInit } from '@angular/core';
import { conduceData, DataBaseService } from '../services/data-base.service';

interface ITableData extends conduceData{
  id: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private readonly dbSvc = inject(DataBaseService);

  tableData!: ITableData[];

  loading: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.getTableData();
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

    this.loading = true;
    await this.dbSvc.addData('conduceDb', body);
    await this.getTableData();
    this.loading = false;
  }
}
