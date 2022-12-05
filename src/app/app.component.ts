import { trigger, transition, animate,style,state } from '@angular/animations';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    trigger('openClose', [
      state('open',
      style({
        height : '200px',
        opacity : 1,
        backgroundColor : 'yellow'
      })
      ),
      state('closed',
      style({
        height : '100px',
        opacity : 0.8,
        backgroundColor : 'blue'
      })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'my-first-project';

  isOpen: boolean = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.title = 'nouveau title';
    console.log("saluuut !!!")
    // throw new Error('Method not implemented.');
  }

  onChildMessage( args : string){
    console.log(args);
  }
}
