import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'aluguel-bike-front';

  ngOnInit(){
    console.log('teste')
    localStorage.clear()
  }
}
