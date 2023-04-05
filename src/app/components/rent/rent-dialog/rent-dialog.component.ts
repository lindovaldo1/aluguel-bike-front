import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BikeElement } from 'src/app/models/BikeElement';
import { UserElement } from 'src/app/models/UserElement';
import { BikeElementService } from 'src/app/services/bikeElement.service';
import { UserElementService } from 'src/app/services/userElement.service';
import { RentElement } from './../../../models/RentElement';

@Component({
  selector: 'app-rent-dialog',
  templateUrl: './rent-dialog.component.html',
  styleUrls: ['./rent-dialog.component.scss']
})

export class RentDialogComponent {
  isChange!: boolean

  users!: UserElement[]
  bikes!: BikeElement[]

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: RentElement,
    public dialogRef: MatDialogRef<RentDialogComponent>,

    @Inject(UserElementService)
    public userElementService: UserElementService,

    @Inject(BikeElementService)
    public bikeElementService: BikeElementService,

  ){

    this.bikeElementService.getAll()
    .subscribe((data: BikeElement[]) => {
      this.bikes = data
    })

    this.userElementService.getAll()
    .subscribe((data: UserElement[]) => {
      this.users = data
    })

  }

  ngOnInit(): void {
    if(this.data.id != null)
      this.isChange = true
    else
      this.isChange = false
  }

  onClick():void{}

  onCancel():void{
    this.dialogRef.close()
  }
}
