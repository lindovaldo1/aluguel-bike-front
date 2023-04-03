import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BikeElement } from 'src/app/models/BikeElement';

@Component({
  selector: 'app-bike-dialog',
  templateUrl: './bike-dialog.component.html',
  styleUrls: ['./bike-dialog.component.scss']
})
export class BikeDialogComponent {
  element!: BikeElement
  isChange!: boolean
  date!: Date

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: BikeElement,
    public dialogRef: MatDialogRef<BikeDialogComponent>,
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