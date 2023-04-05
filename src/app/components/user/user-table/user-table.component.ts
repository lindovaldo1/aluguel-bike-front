import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { UserElement } from 'src/app/models/UserElement';
import { UserElementService } from 'src/app/services/userElement.service';

import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import * as moment from 'moment';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  providers: [UserElementService]
})

export class UserTableComponent implements OnInit{

  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'name', 'email', 'birthdate', 'state', 'role', 'created', 'updated', 'actions'];
  dataSource!:UserElement[]

  constructor(
    public dialog: MatDialog,
    public userElementService: UserElementService
    ){
      this.userElementService.getAll()
        .subscribe((data: UserElement[]) => {
          this.dataSource = data
        })
    }

  ngOnInit(): void {}

  openDialog(element: UserElement | null):void{
    const dialogRef = this.dialog.open(UserDialogComponent, {
      height:'500px',
      width: '300px',
      data: element === null ? {
        id: null,
        name: '',
        email: null,
        password: '',
        birthdate: '',
        state: null,
        role: 'user',
        createdAt: null,
        updatedAt: null,
      }: {
        id: element.id,
        name: element.name,
        email: element.email,
        password: element.password,
        birthdate: element.birthdate,
        state: element.state,
        role: element.role,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt,
      }
    })

    dialogRef.afterClosed().subscribe(result => {

      if(result !== undefined){
        result.birthdate = moment(result.birthdate).format('YYYY-MM-DD')
        if(this.dataSource.map(p => p.id).includes(result.id)){
          console.log(result)
          this.userElementService.edit(result)
            .subscribe(() => {
              this.dataSource[result.id - 1] = result
              this.refresh()
            })
        }else{
          this.userElementService.create(result)
            .subscribe(()=> {
              this.dataSource.push(result)
              this.refresh()
            })
        }
      }
    })

  }

  editElement(element: UserElement):void{
    this.openDialog(element)
  }

  deleteElement(id: number):void{
    this.userElementService.delete(id)
      .subscribe(() => {
        this.refresh()
      })
  }
  refresh(){
    this.userElementService.getAll()
        .subscribe((data: UserElement[]) => {
          this.dataSource = data
        })
  }

}
