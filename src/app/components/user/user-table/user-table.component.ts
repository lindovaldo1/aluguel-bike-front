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
  displayedColumns: string[] = ['id', 'name', 'email', 'birthday', 'state', 'created', 'updated', 'actions'];
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
        birthday: '',
        state: null,
        createdAt: null,
        updatedAt: null,
      }: {
        id: element.id,
        name: element.name,
        email: element.email,
        birthday: element.birthday,//moment(element.birthday).format('DD-MM-YYYY'),
        state: element.state,
        createdAt: element.createdAt,
        updatedAt: element.updatedAt,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        result.birthday = moment(result.birthday).format('YYYY-MM-DD')
        if(this.dataSource.map(p => p.id).includes(result.id)){
          this.userElementService.edit(result)
            .subscribe(() => {
              this.dataSource[result.id - 1] = result
              this.refrest()
            })
        }else{
          this.userElementService.create(result)
            .subscribe(()=> {
              this.dataSource.push(result)
              this.refrest()
            })
        }
      }
    })

  }

  editElement(element: UserElement):void{
    this.openDialog(element)
  }

  deleteElement(element: UserElement):void{
    this.userElementService.delete(element.id)
      .subscribe(() => {
        this.refrest()
      })
  }
  refrest(){
    this.userElementService.getAll()
        .subscribe((data: UserElement[]) => {
          this.dataSource = data
        })
  }

}
