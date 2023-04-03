import { BikeElement } from 'src/app/models/BikeElement';
import { UserElement } from 'src/app/models/UserElement';
import { RentElementService } from 'src/app/services/rentElement.service';

import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import * as moment from 'moment';
import { RentElement } from './../../../models/RentElement';
import { RentDialogComponent } from './../rent-dialog/rent-dialog.component';

@Component({
  selector: 'app-rent-table',
  templateUrl: './rent-table.component.html',
  styleUrls: ['./rent-table.component.scss']
})
export class RentTableComponent {

  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'user_id', 'bike_id', 'exit_time', 'return_time', 'state', 'created', 'updated', 'actions'];
  dataSource!:RentElement[]

  constructor(
    public dialog: MatDialog,
    @Inject(RentElementService)
    public rentElementService: RentElementService
  ){
    this.rentElementService.getAll()
      .subscribe((data: RentElement[]) => {
        this.dataSource = data
      })
  }

  ngOnInit(): void {}

  openDialog(element: RentElement | null):void{

    const dialogRef = this.dialog.open(RentDialogComponent, {
      height:'538px',
      width: '300px',
      data: element === null ? {
        id: null,
        user: '',
        bike: '',
        exit_time: '',
        return_time: '',
        state: '',
        createdAt: null,
        updatedAt: null,
      }: {
        id: element.id,
        user: element.user,
        Bike: element.Bike,
        exit_time: element.exit_time,
        return_time: element.return_time,
        state: element.state,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        result.exit_time = moment(result.exit_time).format('YYYY-MM-DD')
        result.return_time = moment(result.return_time).format('YYYY-MM-DD')
        if(this.dataSource.map(p => p.id).includes(result.id)){
          this.rentElementService.edit(result)
            .subscribe(() => {
              this.dataSource[result.id - 1] = result
              this.refresh()
            })
        }else{
          console.log(result)
          this.rentElementService.create(result)
            .subscribe(()=> {
              this.dataSource.push(result)
              this.refresh()
            })
        }
      }
    })

  }

  editElement(element: RentElement):void{
    this.openDialog(element)
  }

  deleteElement(id: number):void{
    this.rentElementService.delete(id)
      .subscribe(() => {
        this.refresh()
      })
  }

  refresh():void{
    this.rentElementService.getAll()
        .subscribe((data: RentElement[]) => {
          this.dataSource = data
        })
  }
}
