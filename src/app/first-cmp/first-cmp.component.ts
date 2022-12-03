import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Hero } from 'src/models/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-first-cmp',
  templateUrl: './first-cmp.component.html',
  styleUrls: ['./first-cmp.component.scss']
})

export class FirstCmpComponent implements OnInit {
  @Input()
  valeur_text : string = '';
  
  @Output()
  clickEvent : EventEmitter<string> = new EventEmitter();

  constructor(private heroService : HeroService){

  }
  
  ngOnInit(): void {

    this.heroService.getHeroes().subscribe((data) => {
      console.log(data)
    }

    );
    //throw new Error('Method not implemented.');
    console.log(this.heroes)
    switch (this.resultat) {
      case true : { 
        
        break;
      }
      case false : {
        
        break;
      }
      
      default : {
        break;
        
      }
    }
    //  syntaxe 1
    if (this.resultat == true){
      console.log("true");
    } else {
      console.log("true");
    }
    
    //   stntaxe 2
    (this.resultat == true) ? console.log('true') : console.log('false');
    //   stntaxe 3
    (this.resultat) ? console.log('true') : console.log('false');
    
  }
  
  
  onButtonClick(){
    this.clickEvent.emit('salut de ton fils ')
  }
  
  imageUrl: string = "https://picsum.photos/200/300";
  
  listAlpha : Array<string> = ['a','b','c','d'];
  
  resultat : boolean = true ;
  
  today : Date = new Date();
  
  montant : number = 1000.555555;
  
  buttonTitle : string = 'mon titre';

  heroes : Hero[] = [];

  
   


}
