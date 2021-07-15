import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Hey! there. How are you doing?';

  // constructor() {}

  onchangeText(){
    this.text = 'Now it changes. bla bla bla ! black sheep.';
  }

}
