import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RentElement } from './../../../models/RentElement';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserElement } from 'src/app/models/UserElement';

@Component({
  selector: 'app-rent-dialog',
  templateUrl: './rent-dialog.component.html',
  styleUrls: ['./rent-dialog.component.scss']
})
export class RentDialogComponent {
  isChange!: boolean
  user_id!: number
  bike_id!: number

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: RentElement,
    public dialogRef: MatDialogRef<RentDialogComponent>,
  ){}

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
