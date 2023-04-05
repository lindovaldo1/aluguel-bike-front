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

  users!: UserElement[]

  role = localStorage.getItem('role')
  userID = localStorage.getItem('userId')

  constructor(
    public dialog: MatDialog,
    @Inject(RentElementService)
    public rentElementService: RentElementService
  ){}

  ngOnInit(): void {
    if(this.role == 'user' && this.role != undefined){
      this.displayedColumns.splice(6, 3)

      this.rentElementService.getAll()
      .subscribe((data: RentElement[]) => {
        this.dataSource = data.filter((user)=> (
          user.user.id == Number(this.userID)
        ))
      })

    }else{
      this.rentElementService.getAll()
      .subscribe((data: RentElement[]) => {
        this.dataSource = data
      })
    }

  }

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
          let data:RentElement = {
            id: result.id,
            user_id: result.user,
            bike_id: result.Bike.id,
            exit_time: result.exit_time,
            return_time: result.return_time,
            state: result.state,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            user: result.user,
            Bike: result.Bike,
          }
          this.rentElementService.edit(data)
            .subscribe(() => {
              this.dataSource[result.id - 1] = result
              this.refresh()
            })
        }else{
          let data:RentElement = {
            id: 0,
            user_id: result.user,
            bike_id: result.Bike,
            exit_time: result.exit_time,
            return_time: result.return_time,
            state: result.state,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            user: result.user,
            Bike: result.Bike,
          }
          this.rentElementService.create(data)
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
