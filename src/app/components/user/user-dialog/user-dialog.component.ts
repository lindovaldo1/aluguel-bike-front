import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserElement } from 'src/app/models/UserElement';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  element!: UserElement
  isChange!: boolean
  date!: Date
  hide = true
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: UserElement,
    public dialogRef: MatDialogRef<UserDialogComponent>,
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
