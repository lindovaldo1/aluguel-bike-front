import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import * as moment from 'moment';
import { BikeElement } from 'src/app/models/BikeElement';
import { BikeElementService } from 'src/app/services/bikeElement.service';
import { BikeDialogComponent } from '../bike-dialog/bike-dialog.component';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.scss'],
  providers: [BikeElementService],

})
export class BikeTableComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['id', 'model', 'color', 'fabrication_year', 'wheels', 'state', 'created', 'updated', 'actions'];
  dataSource!:BikeElement[]

  dataID!:BikeElement[]

  role = localStorage.getItem('role')

  constructor(
    public dialog: MatDialog,
    public bikeElementService: BikeElementService
    ){}

  ngOnInit(): void {
    if(this.role == 'user' && this.role != undefined){
      this.displayedColumns.splice(6, 3)
    }

    this.bikeElementService.getAll()
        .subscribe((data: BikeElement[]) => {
          this.dataSource = data
        })
  }

  openDialog(element: BikeElement | null):void{
    const dialogRef = this.dialog.open(BikeDialogComponent, {
      height:'538px',
      width: '300px',
      data: element === null ? {
        id: null,
        model: '',
        color: '',
        fabrication_year: '',
        wheels: null,
        state: null,
        createdAt: null,
        updatedAt: null,
      }: {
        id: element.id,
        model: element.model,
        color: element.color,
        fabrication_year: element.fabrication_year,
        wheels: element.wheels,
        state: element.state,
        createdAt: element.createAt,
        updatedAt: element.updateAt,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        result.birthdate = moment(result.birthdate).format('YYYY-MM-DD')
        if(this.dataSource.map(p => p.id).includes(result.id)){
          this.bikeElementService.edit(result)
            .subscribe(() => {
              this.dataSource[result.id - 1] = result
              this.refresh()
            })
        }else{
          this.bikeElementService.create(result)
            .subscribe(()=> {
              this.dataSource.push(result)
              this.refresh()
            })
        }
      }
    })

  }

  editElement(element: BikeElement):void{
    this.openDialog(element)
  }

  deleteElement(id: number):void{
    this.bikeElementService.delete(id)
      .subscribe(() => {
        this.refresh()
      })
  }
  refresh(){
    this.bikeElementService.getAll()
    .subscribe((data: BikeElement[]) => {
      this.dataSource = data
    })
  }

}
