import { Component, OnInit } from '@angular/core';
import { Recipe } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 's1',
      title: 'Kala bhuna',
      imageUrl: 'https://cookpad.com/us/recipe/images/2cca2e5dd84f3d3c',
      ingredients: ['raw cumin 1 tsp', 'nutmeg 1/4', 'mace 2 pcs', 'cloves 6 pcs', 'black pepper 1 tsp', 'green cardamom 6 pcs']
    },
    {
      id: 's2',
      title: 'Kala bhuna 2',
      imageUrl: 'https://cookpad.com/us/recipe/images/2cca2e5dd84f3d3c',
      ingredients: ['cinnamon 3 pcs', 'yellow mustard seeds 1 tsp', 'meat 1 kg', 'salt to taste (1/2 tsp)', 'red chili powder 1 tsp']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
