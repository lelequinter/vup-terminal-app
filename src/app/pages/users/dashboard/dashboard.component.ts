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

  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  async ngOnInit(): Promise<void> {

    this.tableData  = await this.dbSvc.getData('conduceDb');
  }

}
