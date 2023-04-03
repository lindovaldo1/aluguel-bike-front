import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RentElement } from './../../../models/RentElement';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-rent-dialog',
  templateUrl: './rent-dialog.component.html',
  styleUrls: ['./rent-dialog.component.scss']
})
export class RentDialogComponent {
  element!: RentElement
  isChange!: boolean
  date!: Date

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

      console.log(this.data)
  }

  onClick():void{}

  onCancel():void{
    this.dialogRef.close()
  }
}
