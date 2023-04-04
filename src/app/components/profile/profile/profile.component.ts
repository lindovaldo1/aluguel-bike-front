import { Component } from '@angular/core';
import { RentElementService } from 'src/app/services/rentElement.service';
import { UserElementService } from 'src/app/services/userElement.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userResponse: any;
  rentResponse: any;
  error?: string ;

  constructor(
    private rentService: RentElementService,
    private userService: UserElementService,
  ){}

  ngOnInit() {
    const id = Number(2);

    this.userService.getById(id).subscribe(
      (data) => {
        this.userResponse = JSON.parse(JSON.stringify(data));
        console.log(data)
      }
    );

    // this.rentService.getById(id).subscribe(
    //   (data) => {
    //     this.rentResponse = JSON.parse(JSON.stringify(data));
    //     console.log(this.rentResponse)
    //   },
    // );
  }

}
