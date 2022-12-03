import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-first-project';

  ngOnInit(): void {
    this.title = 'nouveau title';
    console.log("saluuut !!!")
    // throw new Error('Method not implemented.');
  }

  onChildMessage( args : string){
    console.log(args);
  }
}
